import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable('work')
        .addColumn('id', 'integer', (col) => col.primaryKey())
        .addColumn('title', 'text', (col) => col.notNull())
        .addColumn('year', 'integer')
        .execute();

    await db.schema
        .createTable('author')
        .addColumn('id', 'integer', (col) => col.primaryKey())
        .addColumn('name', 'text', (col) => col.notNull())
        .execute();

    await db.schema
        .createTable('book')
        .addColumn('id', 'integer', (col) => col.primaryKey())
        .addColumn('workId', 'integer', (col) =>
            col.references('work.id').onDelete('cascade').notNull()
        )
        .addColumn('title', 'text', (col) => col.notNull())
        .addColumn('titleWithoutSeries', 'text', (col) => col.notNull())
        .addColumn('url', 'text', (col) => col.notNull())
        .addColumn('year', 'integer')
        .addColumn('rating', 'real')
        .addColumn('bestOfWork', 'boolean', (col) => col.notNull())
        .execute();

    await db.schema
        .createTable('authorForBook')
        .addColumn('bookId', 'integer', (col) => col.primaryKey().references('book.id').onDelete('cascade'))
        .addColumn('authorId', 'integer', (col) => col.primaryKey().references('author.id').onDelete('cascade'))
        .addColumn('role', 'text')
        // .addPrimaryKeyConstraint('primary_key', ['bookId', 'authorId'])
        .execute();

    await db.schema
        .createTable('review')
        .addColumn('id', 'text', (col) => col.primaryKey())
        .addColumn('bookId', 'integer', (col) => col.references('book.id').onDelete('cascade').notNull())
        .addColumn('embedding', 'vector(384)')
}

export async function down(db: Kysely<any>): Promise<void> {
    // Migration code
}
