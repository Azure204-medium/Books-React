import React, { useEffect, useState } from "react";
import { Book } from "./Books.types";
import { API_CONFIG } from "../config";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const results = await fetch(`${API_CONFIG.baseUrl}/api/books`);
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
