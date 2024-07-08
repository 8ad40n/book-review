import { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto mt-10">
        {
            books.map((book) => <Book key={book.id} book={book}></Book>)
        }
    </div>
  )
}
