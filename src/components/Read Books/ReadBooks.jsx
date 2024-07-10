import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../utility/localStorage";

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
    <div>
      {
        read.map(r=> <p>{r.id}</p>)
      }
    </div>
  )
}
