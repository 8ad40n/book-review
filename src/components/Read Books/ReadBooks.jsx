import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../utility/localStorage";
import ReadBook from "./ReadBook";

export default function ReadBooks() {
  const [read,setRead]= useState([]);
  const readBooks = useLoaderData();

  useEffect(() => {
    const stored = getStoredRead();

    const readList = [];
    for (const id of stored) {
      const book = readBooks.find((book) => book.id == id);
      if (book) {
        readList.push(book);
      }
    }
    setRead(readList);
  }, []);

  return (
    <div className="flex flex-col gap-6 mb-10">
      {read.length > 0 ? (
        read.map((r) => <ReadBook key={r.id} read={r}></ReadBook>)
      ) : (
        <div className="text-center mt-6">
          <h2 className="text-xl font-bold">No books read yet</h2>
          <p>Start reading some books to see them listed here.</p>
        </div>
      )}
    </div>
  )
}
