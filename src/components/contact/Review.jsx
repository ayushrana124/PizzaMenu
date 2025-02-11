import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Sujal Rana",
    review:
      "Absolutely love the pizza here! the cheese is gooey, and the flavors are top-notch!",
    rating: 5,
    image: "../../Avatar.png",
  },
  {
    id: 2,
    name: "Sunil Singh",
    review:
      "Best Malai Chap in town!  Will definitely come back!",
    rating: 4.5,
    image: "../../Avatar.png",
  },
  {
    id: 3,
    name: "Zoheb Saifi",
    review:
      "Noodles bohot badiya hai. Highly recommend the Hakka special!",
    rating: 5,
    image: "../../Avatar.png",
  },
];

const Review = () => {
  return (
    <div id="reviews" className="p-6 bg-gray-100 pb-10 pt-16">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-800 tracking-tighter">
        What Our <span className="text-primary">Customers</span>  Says!
      </h2>

      {/* Subheading */}
      <p className="text-1rem md:text-[1.15rem] text-center text-gray-600 mb-8">
        Real feedback from our valued customers. Experience the taste that keeps them coming back!
      </p>

      {/* Swiper Slider */}
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-lg"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                {/* Customer Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                
                {/* Customer Name */}
                <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>

                {/* Rating */}
                <div className="flex justify-center text-yellow-500 my-2">
                  {"★".repeat(Math.round(review.rating))}
                  {"☆".repeat(5 - Math.round(review.rating))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Review;