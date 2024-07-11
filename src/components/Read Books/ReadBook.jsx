import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

export default function ReadBook({ read }) {
  const {
    image,
    title,
    hashtags,
    author,
    year_of_publishing,
    publisher,
    total_pages,
    genre,
    rating,
  } = read;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl px-4 py-4 lg:pl-6 lg:py-6">
        <figure className="md:max-w-80 lg:mr-8 mx-auto md:mx-0">
          <img className="rounded-2xl" src={image} alt={title} />
        </figure>
        <div className="flex flex-col justify-center mt-4">
          <h2 className="card-title playfair text-2xl md:text-3xl font-bold mb-1">
            {title}
          </h2>
          <p className="text-base font-medium mb-4">By: {author}</p>
          <div className="flex items-center mb-4">
            <p className="text-base font-semibold mr-3">Tag: </p>
            <div className="flex gap-3">
              {hashtags.map((tag) => (
                <p className="text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1 rounded-xl font-medium">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-1 items-center mb-1">
            <IoLocationOutline />
            <p>Year of Publishing: {year_of_publishing}</p>
          </div>
          <div className="">
            <div className="flex gap-1 items-center mb-1">
              <IoPeopleOutline />
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdOutlineContactPage />
              <p>Page {total_pages}</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-3 md:flex-row md:gap-2">
            <div className="flex gap-2">
              <h3 className="bg-[#328EFF26] text-[#328EFF] px-3 py-1 rounded-xl">
                Category: {genre}
              </h3>
              <h3 className="bg-[#FFAC3326] text-[#FFAC33] px-3 py-1 rounded-xl">
                Rating: {rating}
              </h3>
            </div>
            <button className="text-white bg-[#23BE0A] px-3 py-1 rounded-xl hover:text-white hover:bg-black">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
