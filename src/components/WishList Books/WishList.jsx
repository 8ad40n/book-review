import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../utility/localStorage";
import ReadBook from "../Read Books/ReadBook";

export default function WishList() {
  const [wish,setWish]= useState([]);
  const wishBooks = useLoaderData();

  useEffect(() => {
    const stored = getStoredWishlist();

    const wishList = [];
    for (const id of stored) {
      const book = wishBooks.find((book) => book.id == id);
      if (book) {
        wishList.push(book);
      }
    }
    setWish(wishList);
  }, []);
  return (
    <div className="flex flex-col gap-6 mb-10">
      {
        wish.map(r=> <ReadBook key={r.id} read={r}></ReadBook>)
      }
    </div>
  )
}
