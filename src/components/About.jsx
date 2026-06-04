import React from "react";
import Navbar from "../components/Navbar";


const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="w-11/12 md:w-10/12 mx-auto my-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Our Newspaper</h1>
        <p className="text-gray-700 md:text-lg">
          Keeping you updated with the latest news and stories from around the world. 
          Our mission is to provide accurate, unbiased and reliable news to our readers.
        </p>
      </section>

      {/* About Us Section */}
      <section className="w-11/12 md:w-10/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img
          src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
          alt="Newspaper Office"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 1990, our newspaper has grown to become a trusted source for news, insights, and analysis. 
            We cover politics, economy, technology, culture, and more.
          </p>
          <p className="text-gray-700">
            With a dedicated team of journalists, editors, and reporters, we strive to bring you news that matters, 
            with integrity and transparency.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="mt-auto bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Our Newspaper. All rights reserved.</p>
        <p>Contact: info@ournewspaper.com | +123 456 7890</p>
      </footer>
    </div>
  );
};

export default AboutPage;