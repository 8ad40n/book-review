import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { getStoredRead } from "../../utility/localStorage";

export default function PageToRead() {
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
    <div className="flex items-center justify-center mt-6">
      <BarChart width={400} height={400} data={read}>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="title"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        {/* <Legend></Legend> */}
        <Bar dataKey="total_pages" fill="#8884d8"></Bar>
      </BarChart>
    </div>
  )
}
