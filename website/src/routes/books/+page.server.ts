import { neon } from '@neondatabase/serverless';
import type { PageServerLoad } from './$types';
import { DATABASE_URL } from '$env/static/private';
import { encode } from '$lib/inference';
import { redirect } from '@sveltejs/kit';
import type { Book } from '$lib/book';

export const load = (({ url, setHeaders }) => {
    const query = url.searchParams.get('search');
    if (query === null || query.length === 0) {
        throw redirect(303, '/');
    }

    setHeaders({
        'Cache-Control': 'max-age=3600'
    });

    return {
        streamed: {
            books: (new Promise(async (resolve, reject) => {
                const sql = neon(DATABASE_URL);

                let embedding;
                try {
                    embedding = await encode(query as string);
                }
                catch (error) {
                    reject({
                        success: false,
                        error: error
                    });
                    return;
                }

                const books = await sql`
                    with constants (query_embedding) as (
                        values (${"[" + embedding.toString() + "]"}::vector(384))
                    )
                    select res.title, res.series, res.description, res.url, res.image, res.year, res.authors from (
                        select work.id, work.title, work.series, 1 - (embedding <=> query_embedding) as distance, b.description, b.url, b.image, work.year, b.authors
                        from constants, review_embed
                        left join review on review_embed.id = review.id
                        left join book on review.bookId = book.id
                        left join work on book.workId = work.id
                        left join book as b on work.id = b.workId and b.bestOfWork = true
                        order by embedding <=> query_embedding
                        limit 1000) as res
                    group by res.id, res.title, res.series, res.description, res.url, res.image, res.year, res.authors
                    order by sum(distance) desc
                    limit 5;
                    `;

                resolve(books as Book[]);
            })) satisfies Promise<Book[]>
        }
    };
}) satisfies PageServerLoad;
