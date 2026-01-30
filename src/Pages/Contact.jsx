import React from "react";
import contact_bg3 from "../assets/contact_bg3.jpg"

function Contact() {
  return (
    <div
  className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${contact_bg3})` }}
>

      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-green-600">
          Contact Food Express
        </h1>
        <p className="text-black-600 font-extrabold mt-3">
          We are always ready to serve you delicious meals.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-8 px-10 pb-10 items-center">

        {/* Contact Details */}
        <div className="bg-white/40 shadow-xl rounded-xl p-8 flex flex-col gap-4 w-full md:w-1/2 hover:shadow-2xl transition backdrop-blur-sm">

          <h2 className="text-2xl font-semibold text-green-600">
            Contact Details
          </h2>

          <p><b>Email:</b> support@foodexpress.com</p>
          <p><b>Phone:</b> +91 9876543210</p>
          <p><b>Address:</b> Hyderabad, India</p>

          <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
            Chat With Support
          </button>
        </div>

        {/* Support Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
            className="rounded-xl shadow-lg w-full hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Delivery Section */}
      <div className="flex flex-col md:flex-row-reverse gap-8 px-10 pb-12 items-center">

        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            className="rounded-xl shadow-lg w-full hover:scale-105 transition duration-300"
          />
        </div>

        <div className="w-full md:w-1/2 text-black-600 font-semibold text-lg">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Fast & Reliable Delivery
          </h2>
          <p>
            Our delivery partners ensure your food arrives hot,
            fresh, and on time. Track your orders live and enjoy
            secure payments with seamless ordering experience.
          </p>
        </div>

      </div>

      {/* Google Map */}
      <div className="px-10 pb-12">
        <iframe
          title="map"
          className="w-full h-[400px] rounded-xl shadow-lg"
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-6">
        © 2026 Food Express — Delivering Happiness 🍽️
      </footer>

    </div>
  );
}

export default Contact;
