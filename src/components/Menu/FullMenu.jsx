import React, { useState, useEffect } from "react";

const menuItems = [
  { id: 1, name: "Paneer&Corn Pizza", category: "Pizza Mania", price: "₹100", image: "../.././paneercorn.png" },
  { id: 2, name: "Paneer&Onion Pizza", category: "Pizza Mania", price: "₹100", image: "../.././paneeronion.png" },
  { id: 3, name: "Paneer & Capsicum Pizza", category: "Pizza Mania", price: "₹100", image: "../.././paneercapsicumpizza.png" },
  { id: 4, name: "Onion Pizza", category: "Pizza Mania", price: "₹90", image: "../.././onionpizza.png" },
  { id: 5, name: "Tomato Pizza", category: "Pizza Mania", price: "₹90", image: "../.././tomatopizza.png" },
  { id: 6, name: "Loaded Veg Pizza", category: "Pizza Mania", price: "₹150", image: "../.././vegloadedpizza.png" },
  { id: 56, name: "Margherita Pizza (Reg/Med)", category: "Veg Pizza's", price: "₹100/₹220", image: "../.././margherita.png" },
  { id: 57, name: "Cheese Corn Pizza (Reg/Med)", category: "Veg Pizza's", price: "₹170/₹300", image: "../.././cheeseandcornpizza.png" },
  { id: 58, name: "Cheese Paneer Pizza (Reg/Med)", category: "Veg Pizza's", price: "₹170/₹300", image: "../.././cheesepaneerpizza.png" },
  { id: 59, name: "Cheese Onion Pizza (Reg/Med)", category: "Veg Pizza's", price: "₹170/₹300", image: "../.././cheeseonionpizza.png" },
  { id: 60, name: "Cheese Tomato Pizza (Reg/Med)", category: "Veg Pizza's", price: "₹170/₹300", image: "../.././cheesetomatopizza.png" },
  { id: 62, name: "Cheese Pasta Pizza (Reg/Med)", category: "Veg Pizza's", price: "₹170/₹300", image: "../.././cheesepastapizza.png" },
  { id: 63, name: "Mashroom Pizza", category: "Veg Pizza's", price: "₹220/₹400", image: "../.././mashroompizza.png" },
  { id: 64, name: "Paneer Paprika Veg Pizza", category: "Veg Pizza's", price: "₹220/₹400", image: "../.././paneerpaprikapizza.png" },
  { id: 65, name: "Diamond Pizza", category: "Veg Pizza's", price: "₹220/₹400", image: "../.././diamondpizza.png" },
  { id: 66, name: "Tandoori Deluxe Pizza", category: "Veg Pizza's", price: "₹230/₹400", image: "../.././tandooridelux.png" },
  { id: 67, name: "Veg Extra Pizza", category: "Veg Pizza's", price: "₹250/₹450", image: "../.././vegExtra.png" },
  
  { id: 7, name: "Veg Noodles", category: "Chinese", price: "₹60", image: "../.././Chinese/vegnoodles.png" },
  { id: 8, name: "Hakka Noodles", category: "Chinese", price: "₹70", image: "../.././Chinese/hakkanoodles.png" },
  { id: 9, name: "Singapore Noodles", category: "Chinese", price: "₹100", image: "../.././Chinese/singapurinoodles.png" },
  { id: 10, name: "Manchurian Noodles", category: "Chinese", price: "₹80", image: "../.././Chinese/vegmanchuriannoodle.png" },
  { id: 11, name: "Veg SpringRoll", category: "Chinese", price: "₹60-2pcs", image: "../.././Chinese/springroll.png" },
  { id: 12, name: "Manchurian Dry/Gravy", category: "Chinese", price: "₹120/₹100", image: "../.././Chinese/manchurian.png" },
  { id: 13, name: "Fried Rice", category: "Chinese", price: "₹80", image: "../.././Chinese/friedrice.png" },
  { id: 14, name: "Red Sauce Pasta", category: "Chinese", price: "₹100", image: "../.././Chinese/redsaucepasta.png" },
  { id: 15, name: "White Sauce Pasta", category: "Chinese", price: "₹120", image: "../.././Chinese/whitesaucepasta.png" },
  { id: 16, name: "Plain Pasta", category: "Chinese", price: "₹80", image: "../.././Chinese/plainpasta.png" },
  { id: 17, name: "Veg Momos steam/fry", category: "Chinese", price: "₹60/₹80", image: "../.././Chinese/vegmomos.png" },
  { id: 18, name: "Paneer Momos", category: "Chinese", price: "₹80", image: "../.././Chinese/paneermomos.png" },
  { id: 19, name: "Chilli Potato dry/gravy", category: "Chinese", price: "₹100", image: "../.././Chinese/chillipotato.png" },
  { id: 20, name: "Honey Chilli Potato", category: "Chinese", price: "₹120", image: "../.././Chinese/honeychillipotato.png" },
  { id: 21, name: "Cheese Chilli Potato", category: "Chinese", price: "₹120", image: "../.././Chinese/cheesechillipotato.png" },
  

  { id: 23, name: "Oreo Shake", category: "Drinks", price: "₹80", image: "../.././drinks/oreoshake.png" },
  { id: 24, name: "Mango Shake", category: "Drinks", price: "₹80", image: "../.././drinks/mangoshake.png" },
  { id: 25, name: "Banana Shake", category: "Drinks", price: "₹80", image: "../.././drinks/bananashake.png" },
  { id: 26, name: "Strawberry Shake", category: "Drinks", price: "₹80", image: "../.././drinks/strawberryshake.png" },
  { id: 27, name: "Kitkat Shake", category: "Drinks", price: "₹100", image: "../.././drinks/kitkatshake.png" },
  { id: 28, name: "Vanilla Shake", category: "Drinks", price: "₹80", image: "../.././drinks/vanillashake.png" },
  { id: 29, name: "Blue Lagoon mojito", category: "Drinks", price: "₹99", image: "../.././drinks/bluelagoon.png" },
  { id: 30, name: "Strawberry mojito", category: "Drinks", price: "₹99", image: "../.././drinks/strawberry.png" },
  { id: 31, name: "Black current mojito", category: "Drinks", price: "₹99", image: "../.././drinks/blackcurrent.png" },
  { id: 32, name: "Green Apple mojito", category: "Drinks", price: "₹99", image: "../.././drinks/greenapple.png" },
  { id: 33, name: "Blueberry mojito", category: "Drinks", price: "₹99", image: "../.././drinks/blueberry.png" },

  { id: 34, name: "Veg Parcel", category: "Sides", price: "₹30", image: "../.././sides/vegparcel.png" },
  { id: 35, name: "Garlic BreadSticks", category: "Sides", price: "₹100", image: "../.././sides/garlicbreadsticks.png" },
  { id: 36, name: "Stuffed Garlic Bread", category: "Sides", price: "₹130", image: "../.././sides/stuffedgarlicbread.png" },
  { id: 37, name: "Cheese Burger", category: "Sides", price: "₹60", image: "../.././sides/cheeseburger.png" },
  { id: 38, name: "Potato Burger", category: "Sides", price: "₹70", image: "../.././sides/potatoburger.png" },
  { id: 39, name: "French Fries", category: "Sides", price: "₹50/₹100", image: "../.././sides/frenchfries.png" },
  { id: 54, name: "Vada Pav (2pc)", category: "Sides", price: "₹100", image: "../.././sides/vadapav.png" },

  { id: 40, name: "Masala Chaap", category: "Snacks", price: "₹100", image: "../.././Chinese/masalachap.png" },
  { id: 41, name: "Malai Chaap", category: "Snacks", price: "₹120", image: "../.././Chinese/malaichap.png" },
  { id: 42, name: "Paneer Tikka", category: "Snacks", price: "₹230", image: "../.././Chinese/paneertikka.png" },
  { id: 43, name: "Chilli Paneer", category: "Snacks", price: "₹180", image: "../.././Chinese/chillipaneer.png" },
  { id: 22, name: "Pav Bhaji", category: "Snacks", price: "₹100", image: "../.././Chinese/pavbhaji.png" },

  { id: 44, name: "Veg Maggie", category: "Maggie", price: "₹50", image: "../.././maggie/vegmaggie.png" },
  { id: 45, name: "Paneer Maggie", category: "Maggie", price: "₹60", image: "../.././maggie/paneermaggie.png" },
  { id: 46, name: "Garlic Maggie", category: "Maggie", price: "₹60", image: "../.././maggie/garlicmaggie.png" },
  { id: 47, name: "Italian Maggie", category: "Maggie", price: "₹60", image: "../.././maggie/italianmaggie.png" },

  { id: 48, name: "Cheese Sandwich", category: "Sandwich", price: "₹90", image: "../.././sandwich/cheesesandwich.png" },
  { id: 49, name: "Veg Sandwich", category: "Sandwich", price: "₹80", image: "../.././sandwich/vegsandwich.png" },
  { id: 50, name: "Paneer Thick Sandwich", category: "Sandwich", price: "₹100", image: "../.././sandwich/paneerthicksandwich.png" },
  { id: 51, name: "Corn Sandwich", category: "Sandwich", price: "₹90", image: "../.././sandwich/cornsandwich.png" },
  { id: 52, name: "Coleslaw Sandwich", category: "Sandwich", price: "₹120", image: "../.././sandwich/coleslawsandwich.png" },

  { id: 53, name: "Choco LavaCake", category: "Newly Launched", price: "₹120", image: "../.././sides/chocolava.png" },
  { id: 55, name: "Chole Bhature", category: "Newly Launched", price: "₹120", image: "../.././sides/cholebhature.png" },
  { id: 68, name: "Kulhad Pizza", category: "Newly Launched", price: "₹140", image: "../.././kulhadpizza.png" },

  { id: 69, name: "Aloo Masala Dosa", category: "Dosa", price: "₹120", image: "../.././sides/aloomasaladosa.png" },
  { id: 70, name: "Onion Masala Dosa", category: "Dosa", price: "₹130", image: "../.././sides/onionmasaladosa.png" },
  { id: 71, name: "Paneer Dosa", category: "Dosa", price: "₹150", image: "../.././sides/paneerdosa.png" },
  { id: 72, name: "Loaded Masala Dosa", category: "Dosa", price: "₹180", image: "../.././sides/loadedmasaladosa.png" },
  
];

const categories = ["Pizza Mania","Veg Pizza's","Newly Launched", "Chinese", "Drinks", "Sides", "Snacks", "Maggie", "Sandwich", "Dosa"];

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState("Pizza Mania");
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll position to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.location.href = "#full-menu"; // Change to your desired URL
  };

  return (
    <div id="full-menu" className="p-6">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Our Menu  → </h2>

      {/* Scrollable Categories Bar */}
      <div className="sticky top-0 bg-yellow-200 z-10 py-6">
        <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {setActiveCategory(category); handleClick();}}
              className={`px-4 py-2 whitespace-nowrap rounded-lg text-lg font-semibold transition-all
                ${activeCategory === category ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-yellow-400 hover:text-white"}
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked List with Image on Left and Text on Right */}
      <div className="space-y-6">
        {menuItems
          .filter((item) => item.category === activeCategory)
          .map((item) => (
            <div
              key={item.id}
              className={`bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center transform 
                ${scrolling ? "animate__animated animate__fadeInUp animate__delay-0.5s" : ""}
              `}
            >
              {/* Image on the left */}
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              
              {/* Text on the right */}
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-lg font-bold text-primary mt-2">{item.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
