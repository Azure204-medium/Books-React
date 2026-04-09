import React, { useEffect, useState } from "react";
import { Book } from "./Books.types";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const results = await fetch("https://localhost:7160/api/books");
        const response = (await results.json()) as Book[];
        setBooks(response);
      } catch (err) {
        console.error("Error fetching books", err);
      }
    };

    fetchBooks();
  }, []);
  return (
    <main className="Menu">
      <ul className="bookd">
        {books.map((book) => (
          <li key={book.id} className="book">
            <h3> {book.title} </h3>
          </li>
        ))}
      </ul>
    </main>
  );
};
