import { sql } from "kysely";
import { db } from "../db/database";
import * as RequestMatchers from "./requestMatchers";
import { describe, expect, it } from "vitest";

describe("RequestMatchers", () => {
  it("should create a book", async () => {
    const request = await RequestMatchers.createBook({
      method: "GET",
      responseBody: String(`{
        "employeeEmail":"{{queryParam 'idContrato'}}@email.exemplo",
         "balance": 67.5,
        "periods":[
          {
            "start_date":"2020-04-01",
            "end_date":"2021-03-31",
            "vacation_balance":29.5,
            "last_updated_at":"2021-03-31"
          }
        ]
      }`),
      responseStatus: "200",
      url: "/periodosAquisitivos?idContrato=",
    });
  });

  // it("fetch books", async () => {
  //   const book = await RequestMatchers.createBook({
  //     name: "Pai rico pai pobre",
  //     image_url: "https://m.media-amazon.com/images/I/81ALgAW3gHL._SY522_.jpg",
  //     author: "Robert Kiyosaki e Sharon L. Lechter",
  //   });

  //   const result = await RequestMatchers.fetchBooks();
  //   expect(result.find((item) => item.id == book.id)).toBeDefined();
  // });
});
