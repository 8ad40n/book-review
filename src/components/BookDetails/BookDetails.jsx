import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find(book => book.id == id);

  return (
    <div>
      {id}
      {
        book.title
      }
    </div>
  );
}
