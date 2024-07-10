import { NavLink, Outlet } from "react-router-dom";
import './ListedBooks.css';

export default function ListedBooks() {
  return (
    <div>
      <h1 className="font-bold text-2xl py-10 bg-[#1313130D] text-center rounded-2xl mt-6">
        Books
      </h1>
      <details className="dropdown mb-6">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <div className="">
        <NavLink to="/listedBooks/readBooks" className="mr-4">Read Books</NavLink>
        <NavLink to="/listedBooks/wishList">Wishlist Books</NavLink>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
