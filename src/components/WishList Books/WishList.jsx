import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../utility/localStorage";

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
    <div>
      {
        wish.map(w=> <p>{w.id}</p>)
      }
    </div>
  )
}
