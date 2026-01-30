import Delivery from "../assets/Delivery.avif";
import fresh_food from "../assets/fresh_food.avif";
import about_bg from "../assets/about_bg.jpg";
import kitchen from "../assets/kitchen.png";
import packing from "../assets/packing.jpg"

/* NEW images */




function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${about_bg})` }}
    >
      {/* white overlay for readability */}
      <div className="p-10 space-y-16 bg-white/85">

        <h1 className="text-4xl font-bold text-center text-green-600">
          About Our Food Delivery
        </h1>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={fresh_food}
            className="rounded-xl shadow-lg w-full md:w-1/2"
          />

          <p className="text-lg text-gray-700">
            We deliver freshly prepared meals from top restaurants directly
            to your doorstep. Our platform ensures fast, hygienic and
            affordable food delivery so customers enjoy restaurant-quality
            meals at home.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <img
            src={Delivery}
            className="rounded-xl shadow-lg w-full md:w-1/2"
          />

          <p className="text-lg text-gray-700">
            With live tracking and secure payments, customers enjoy seamless
            ordering experiences. Our delivery partners ensure food arrives
            fresh and hot, every time.
          </p>
        </div>

        {/* NEW Section 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={kitchen}
            className="rounded-xl shadow-lg w-full md:w-1/2"
          />

          <p className="text-lg text-gray-700">
            Partner restaurants follow strict hygiene standards and use fresh
            ingredients prepared by professional chefs to maintain consistent
            taste and quality in every order.
          </p>
        </div>

        {/* NEW Section 4 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <img
            src={packing}
            className="rounded-xl shadow-lg w-full md:w-1/2"
          />

          <p className="text-lg text-gray-700">
            Orders are packed carefully using safe packaging methods so your
            meals stay secure and fresh throughout the delivery journey,
            ensuring complete customer satisfaction.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
