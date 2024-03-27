import { sql } from "kysely";
import { db } from "../db/database";
import * as Book from "./book.server";
import { describe, expect, it } from "vitest";

describe("Book", () => {
  it("should create a book", async () => {
    await Book.createBook({
      name: "Pai rico pai pobre",
      image_url: "https://m.media-amazon.com/images/I/81ALgAW3gHL._SY522_.jpg",
      author: "Robert Kiyosaki e Sharon L. Lechter",
    });
  });

  it("fetch books", async () => {
    const book = await Book.createBook({
      name: "Pai rico pai pobre",
      image_url: "https://m.media-amazon.com/images/I/81ALgAW3gHL._SY522_.jpg",
      author: "Robert Kiyosaki e Sharon L. Lechter",
    });

    const result = await Book.fetchBooks();
    expect(result.find((item) => item.id == book.id)).toBeDefined();
  });
});
