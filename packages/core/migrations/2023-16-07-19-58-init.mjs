import { Kysely } from 'kysely'

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
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
        .createTable('author_for_book')
        .addColumn('bookId', 'integer', (col) => col.references('book.id').onDelete('cascade'))
        .addColumn('authorId', 'integer', (col) => col.references('author.id').onDelete('cascade'))
        .addColumn('role', 'text')
        .addPrimaryKeyConstraint('primary_key', ['bookId', 'authorId'])
        .execute();

    await db.schema
        .createTable('review')
        .addColumn('id', 'text', (col) => col.primaryKey())
        .addColumn('bookId', 'integer', (col) => col.references('book.id').onDelete('cascade').notNull())
        .addColumn('embedding', 'vector(384)')
        .execute();

    await db.schema
        .createIndex('book_work_fk')
        .on('book')
        .column('workId')
        .execute();

    await db.schema
        .createIndex('review_book_fk')
        .on('review')
        .column('bookId')
        .execute();

    await db.schema
        .createIndex('authorForBook_book_fk')
        .on('author_for_book')
        .column('bookId')
        .execute();

    await db.schema
        .createIndex('authorForBook_author_fk')
        .on('author_for_book')
        .column('authorId')
        .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
    await db.schema.dropTable('review').execute();
    await db.schema.dropTable('author_for_book').execute();
    await db.schema.dropTable('book').execute();
    await db.schema.dropTable('author').execute();
    await db.schema.dropTable('work').execute();
}
