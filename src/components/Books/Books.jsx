import { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto my-10">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
      <div className="flex justify-center">
        <span
          className={`${loading ? "loading loading-spinner loading-lg" : ""}`}
        ></span>
      </div>
    </>
  );
}
