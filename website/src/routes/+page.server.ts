import type { Actions } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$env/static/private';
import { encode } from '$lib/inference';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const query = data.get('search');

        if (query === null || query.length === 0) {
            return {
                success: false,
                error: 'No query provided'
            };
        }

        const sql = neon(DATABASE_URL);

        let embedding;
        try {
            embedding = await encode(query as string);
        }
        catch (error) {
            return {
                success: false,
                error: error
            }
        }

        const books = await sql`
            with constants (query_embedding) as (
                values (${"[" + embedding.toString() + "]"}::vector(384))
            )
            select res.title, count(*), sum(distance) from (
                select work.id, work.title, 1 - (embedding <=> query_embedding) as distance
                from constants, review_embed
                inner join review on review_embed.id = review.id
                inner join book on review.bookId = book.id
                inner join work on book.workId = work.id
                order by embedding <=> query_embedding
                limit 1000) as res
            group by res.id, res.title
            order by sum(distance) desc
            limit 20;
            `;
        console.log(books);

        return { books };
    }
} satisfies Actions;
