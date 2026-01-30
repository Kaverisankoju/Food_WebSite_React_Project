import { Link } from "react-router-dom";
import bg_1 from "../assets/bg_1.avif";
import dish_1 from "../assets/dish_1.jpg";
import dish_2 from "../assets/dish_2.jpg";
import dish_3 from "../assets/dish_3.jpg"

function Landing() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage:`url(${bg_1})`}}>
        <div className="bg-black/60 p-10 rounded-xl text-center text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Delicious Food Delivered Fast
          </h1>

          <p className="mb-6 text-lg">
            Order your favourite meals anytime, anywhere.
          </p>

          <Link
            to="/menu"
            className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Explore Menu
          </Link>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="bg-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-8 text-green-600">
          Popular Dishes
        </h2>

        <div className="flex flex-wrap justify-center gap-6 px-6">
          <img src={dish_1} className="w-72 h-48 object-cover rounded-lg shadow-lg"/>
          <img src={dish_2} className="w-72 h-48 object-cover rounded-lg shadow-lg"/>
          <img src={dish_3} className="w-72 h-48 object-cover rounded-lg shadow-lg"/>
        </div>
      </div>

    </div>
  );
}

export default Landing;