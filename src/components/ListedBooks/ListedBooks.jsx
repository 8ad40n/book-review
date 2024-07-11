import { NavLink, Outlet } from "react-router-dom";
import './ListedBooks.css';

export default function ListedBooks() {
  return (
    <div>
      <h1 className="font-bold text-2xl py-10 bg-[#1313130D] text-center rounded-2xl mt-6">
        Books
      </h1>
      <div className="mt-14 md:mt-20 mb-10">
        <NavLink to="/listedBooks/readBooks" className="border-b-2 border-b-[#1313134D] px-2 py-2">Read Books</NavLink>
        <NavLink to="/listedBooks/wishList" className="border-b-2 border-b-[#1313134D] px-2 py-2">Wishlist Books</NavLink>
        
      </div>
      <Outlet></Outlet>
    </div>
  );
}
