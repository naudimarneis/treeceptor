import { db } from "../db/database";
import { NewBook } from "../types";

export async function createBook(book: NewBook) {
  return db
    .insertInto("books")
    .returning("id")
    .values(book)
    .executeTakeFirstOrThrow();
}

export async function fetchBooks() {
  return db.selectFrom("books").selectAll().execute();
}
