import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const books = useLoaderData();
  const intID = parseInt(id);
  const bookDetails = books.find(book => book.id === intID);

  const {image, title, author, description, genre, hashtags, total_pages, publisher, year_of_publishing, rating} = bookDetails;

  return (
    <div className="md:mt-10">
      <div className="md:flex md:gap-10 md:justify-center md:items-center">

        <div className="w-2/5">
          <img className="rounded-3xl" src={image} alt={title} />
        </div>

        <div className="w-3/5 flex flex-col">
          <h1 className="playfair text-4xl font-bold mb-6">{title}</h1>
          <p className="font-medium">By: {author}</p>
          <hr className="border border-1 border-dashed my-3"/>
          <p className="font-medium">{genre}</p>
          <hr className="border border-1 border-dashed my-3"/>
          <p className="text-sm"><span className="font-bold">Description: </span>{description}</p>
          <div className="flex gap-1 mt-3 items-center">
            <span className="font-bold mr-3">Tags:</span>
            {
              hashtags.map((hash) => (
              <p className="text-[#23BE0A] text-sm bg-[#23BE0A0D] px-3 py-2 rounded-2xl font-medium">{hash}</p>))
            }
          </div>
          <hr className="border border-1 border-dashed my-3"/>
          <p className="text-sm font-bold mb-2"><span className="font-normal">Number of Pages: </span>{total_pages}</p>
          <p className="text-sm font-bold mb-2"><span className="font-normal">Publisher: </span>{publisher}</p>
          <p className="text-sm font-bold mb-2"><span className="font-normal">Year of Publishing: </span>{year_of_publishing}</p>
          <p className="text-sm font-bold mb-2"><span className="font-normal">Rating: </span>{rating}</p>
          <div className="flex gap-4 mt-3">
            <button className="px-3 py-2 border border-solid border-1 border-gray-400 rounded-md hover:bg-black hover:text-white">Read</button>
            <button className="px-3 py-2 bg-[#50B1C9] text-white rounded-md hover:bg-black hover:text-white">Wishlist</button>
          </div>
        </div>

      </div>
    </div>
  );
}
