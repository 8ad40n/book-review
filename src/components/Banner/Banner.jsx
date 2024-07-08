import banner from "../../assets/banner.png";
export default function Banner({}) {

  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center bg-[#1313130D] rounded-2xl px-10 py-6 md:px-20 md:py-10">
      <div className="flex flex-col justify-center ">
        <h1 className="playfair text-4xl md:text-6xl font-bold mb-4 mt-4 md:mb-8">Books to freshen up your bookshelf</h1>
        <button className="btn max-w-40 bg-[#23BE0A] text-white px-4 py-3 rounded-xl">View The List</button>
      </div>
      <div className="mx-auto">
        <img className="h-80 md:h-1/2 rounded-3xl" src={banner} alt="banner" />
      </div>
    </div>
  );
}
