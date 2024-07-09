import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Book({ book }) {
  const { id, image, title, author, genre, rating, hashtags } = book;
  return (
    <div>
      <Link to={`/book/${id}`} className="card bg-base-100 shadow-xl">
        <figure className="px-3 pt-3 md:px-6 md:pt-6">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="flex gap-1 justify-center mt-3">
            {
              hashtags.map((hash) => (
              <p className="text-[#23BE0A] text-sm bg-[#23BE0A0D] px-3 py-2 rounded-2xl font-medium">{hash}</p>))
            }
          </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl playfair">{title}</h2>
          <p className="text-xs">By: {author}</p>
          <hr className="border border-1 border-dashed my-2" />
          <div className="flex justify-between">
            <p className="text-sm">{genre}</p>
            <div className="flex gap-1 items-center">
              <p className="text-sm">{rating}</p>
              <CiStar />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
