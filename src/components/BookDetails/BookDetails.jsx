import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const books = useLoaderData();
  const intID = parseInt(id);
  const bookDetails = books.find(book => book.id === intID);

  return (
    <div>
      <h1>BOOK DETAILS</h1>
      {id}
      {
        bookDetails.title
      }
    </div>
  );
}
