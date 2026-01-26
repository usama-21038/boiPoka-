
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "./Home/Home.jsx";
import ListedBooks from "../pages/ListedBooks/ListedBooks.jsx";
import BookDetails from "../pages/BookDetails/BookDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        index: true,
        loader: () => fetch('/bookData.json'),
        Component:Home
        },
        {
         path: "/listed-books",
         loader: () => fetch('/bookData.json'),
         Component: ListedBooks
        },
       {
        path: "/book/:bookId",
        loader: async ({ params }) => {
          const response = await fetch('/bookData.json');
          const books = await response.json();
          const book = books.find(b => b.bookId === parseInt(params.bookId));
          return book;
        },
        Component: BookDetails
       }
    ]
  },
]);


