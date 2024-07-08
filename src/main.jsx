import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PageToRead from "./components/PageToRead/PageToRead";
import Root from "./components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PageToRead></PageToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);