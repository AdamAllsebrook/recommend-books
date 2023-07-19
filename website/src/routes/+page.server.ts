import type { Actions, PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$env/static/private';

export let load = (async ({ locals }) => {
    const sql = neon(DATABASE_URL);

    const rows = await sql('select * from book limit 1')

    return { rows };
}) satisfies PageServerLoad;
