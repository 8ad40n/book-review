import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveRead, saveWishlist } from "../../utility/localStorage";

export default function BookDetails() {
  const { id } = useParams();
  const books = useLoaderData();
  const intID = parseInt(id);
  const bookDetails = books.find(book => book.id === intID);

  const {image, title, author, description, genre, hashtags, total_pages, publisher, year_of_publishing, rating} = bookDetails;


  const handleRead = ()=>{
    saveRead(intID);
    toast("Added to Read List!");
  }
  const handleWishlist = ()=>{
    saveWishlist(intID);
    toast("Added to Wishlist!");
  }

  return (
    <div className="my-6 md:my-10">
      <div className="lg:flex md:gap-10 md:justify-center md:items-center">

        <div className="mx-auto lg:w-2/5 mb-6 md:mb-8">
          <img className="rounded-3xl" src={image} alt={title} />
        </div>

        <div className="lg:w-3/5 flex flex-col pl-3">
          <h1 className="playfair text-3xl md:text-4xl font-bold mb-6">{title}</h1>
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
            <button onClick={handleRead} className="px-3 py-2 border border-solid border-1 border-gray-400 rounded-md hover:bg-black hover:text-white">Read</button>
            <button onClick={handleWishlist} className="px-3 py-2 bg-[#50B1C9] text-white rounded-md hover:bg-black hover:text-white">Wishlist</button>
            <ToastContainer></ToastContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
