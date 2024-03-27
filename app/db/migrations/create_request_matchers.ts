import type { Kysely } from "kysely";
import { sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("request_matchers")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("method", "text", (col) => col.defaultTo("ALL").notNull())
    .addColumn("url", "text", (col) => col.defaultTo(".*").notNull())
    .addColumn("body", "text", (col) => col.defaultTo(".*").notNull())
    .addColumn("header", "text", (col) => col.defaultTo(".*").notNull())
    .addColumn("response_status", "integer", (col) =>
      col.defaultTo("204").notNull()
    )
    .addColumn("response_body", "text", (col) => col.defaultTo("").notNull())
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("request_matchers").execute();
}
