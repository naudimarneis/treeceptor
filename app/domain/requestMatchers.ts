import { DB } from "../db/types";
import { db } from "../db/database";

export async function createBook(requestMatchers: DB) {
  return db
    .insertInto("request_matchers")
    .returning("id")
    .values(requestMatchers)
    .executeTakeFirstOrThrow();
}

export async function fetchRequestMatchers() {
  return db.selectFrom("request_matchers").selectAll().execute();
}
