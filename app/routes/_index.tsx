import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { fetchBooks } from "~/domain/book.server";

export const meta: MetaFunction = () => {
  return [{ title: "Meus livros" }];
};

export async function loader() {
  return json({
    books: {
      category: "Clássicos",
      items: await fetchBooks(),
    },
  });
}

export default function Index() {
  const books = useLoaderData<typeof loader>();
  console.warn("books", books);
  // const books = [
  //   {
  //     category: "Clássicos",
  //     items: [
  //       {
  //         name: "Pai rico pai pobre",
  //         image_url:
  //           "https://m.media-amazon.com/images/I/81ALgAW3gHL._SY522_.jpg",
  //       },
  //       {
  //         name: "A Família Netanyahu",
  //         image_url:
  //           "https://img.wook.pt/images/a-familia-netanyahu-joshua-cohen/MXwyNzQ3MDMyN3wyMzg0MjI1MnwxNjY0NDQ4Mjg3MDAwfHdlYnA=/550x",
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className="container mx-auto px-4">
      <h1>Acervo</h1>
      {/* {books.map((book) => (
        <>
          <h2>{book.category}</h2>
          <div className="flex">
            {book.items.map((item) => (
              <div className="basis-1/3 p-2">
                <img
                  className="aspect-square rounded-lg"
                  src={item.image_url}
                />
                <span>
                  <strong>{item.name}</strong>
                </span>
              </div>
            ))}
          </div>
        </>
      ))} */}
    </div>
  );
}
