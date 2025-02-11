import React from "react";

const topRatedItems = [
  {
    id: 1,
    name: "Paner&Onion Pizza",
    image: "../.././paneeronion.png",
    rating: 4.5,
    price: " ₹100",
  },
  {
    id: 2,
    name: "Paneer&Corn Pizza",
    image: "../.././paneercorn.png",
    rating: 4.5,
    price: " ₹100",
  },
  {
    id: 3,
    name: "Malai Chaap",
    image: "../.././malaichap.png",
    rating: 4.0,
    price: " ₹100",
  },
];

const TopRated = () => {
  return (
    <div className="p-6  mt-8 lg:mt-16">
      <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-800 tracking-tighter">
        Our Most <span className="text-primary">Loved</span>  Items
      </h2>

      <p className="md:text-xl text-center text-1rem text-gray-600 mb-10">
       Try these best-sellers and experience why they're loved!
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRatedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <div className="flex items-center mt-2 mb-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.round(item.rating))}
                {"☆".repeat(5 - Math.round(item.rating))}
              </span>
              <span className="ml-2 text-gray-500">({item.rating})</span>
            </div>
            <p className="text-lg font-semibold text-gray-800">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
      <button onClick={() =>  window.location.href = "#full-menu"} className="bg-primary font-semibold px-6 p-2 rounded-full text-lg shadow-lg hover:bg-yellow-300 text-white transition-all">
        View Full Menu
      </button>
      </div>
    </div>
  );
}

export default TopRated;
