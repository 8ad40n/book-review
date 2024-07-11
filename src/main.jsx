import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PageToRead from "./components/PageToRead/PageToRead";
import ReadBooks from "./components/Read Books/ReadBooks";
import Root from "./components/Root/Root";
import WishList from "./components/WishList Books/WishList";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children:[
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/book/:id",
        loader: () => fetch("/books.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/listedBooks",
            element: <Navigate to="/listedBooks/readBooks" replace />, 
          },
          {
            path: "/listedBooks/readBooks",
            element: <ReadBooks></ReadBooks>,
            loader: ()=> fetch("/books.json"),
          },
          {
            path: "/listedBooks/wishList",
            element: <WishList></WishList>,
            loader: ()=> fetch("/books.json"),
          }
        ],
      },
      {
        path: "/pagesToRead",
        element: <PageToRead></PageToRead>,
        loader: ()=> fetch("/books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);