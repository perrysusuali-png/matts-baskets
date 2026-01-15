'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { getImageUrl } from './lib/images';

export default function Home() {
  return (
    <>
      <Navbar activePage="home" />

      <section
        className="bg-cover bg-center bg-no-repeat h-[90vh] flex justify-center items-center relative"
        style={{ backgroundImage: "linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg')" }}
      >
        <div className="relative z-10 text-center text-white p-8 md:p-6 animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 animate-text-fade-in">
            Authentic African Woven Art
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-text-fade-in">
            Handcrafted baskets that carry stories, culture, and craftsmanship.
          </p>
          <a
            href="/product"
            className="inline-block px-8 py-3 bg-secondary text-white rounded-full font-semibold transition duration-300 hover:bg-blue-700"
          >
            Explore Our Collection
          </a>
        </div>
      </section>

      <section className="flex justify-around items-start gap-6 py-16 px-8 md:px-32 flex-wrap">
        <div className="bg-white rounded-lg text-center p-8 shadow-md max-w-xs transition duration-300 hover:-translate-y-2">
          <img
            src={getImageUrl('basket8.jpg')}
            alt="Small Decorative Basket"
            className="w-full h-52 object-cover rounded-lg mb-4"
          />
          <h3 className="text-primary mb-2 font-semibold">Small Decorative Basket</h3>
          <p className="text-gray-600">Each basket is carefully handmade with love, patience, and precision.</p>
        </div>

        <div className="bg-white rounded-lg text-center p-8 shadow-md max-w-xs transition duration-300 hover:-translate-y-2">
          <img
            src={getImageUrl('basket20.jpg')}
            alt="Traditional African Basket"
            className="w-full h-52 object-cover rounded-lg mb-4"
          />
          <h3 className="text-primary mb-2 font-semibold">Traditional African Basket</h3>
          <p className="text-gray-600">Made from 100% natural fibers and eco-friendly materials.</p>
        </div>

        <div className="bg-white rounded-lg text-center p-8 shadow-md max-w-xs transition duration-300 hover:-translate-y-2">
          <img
            src={getImageUrl('basket25.jpg')}
            alt="Compact Travel Basket"
            className="w-full h-52 object-cover rounded-lg mb-4"
          />
          <h3 className="text-primary mb-2 font-semibold">Compact Travel Basket</h3>
          <p className="text-gray-600">Beautiful designs for homes, stores, and cultural spaces worldwide.</p>
        </div>
      </section>

      <section className="text-center bg-secondary text-white py-12 px-4">
        <h2 className="text-2xl md:text-3xl mb-4">Want to See More?</h2>
        <p className="text-lg mb-6">Step into our product and explore the beauty of African weaving.</p>
        <a
          href="/product"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold transition duration-300 hover:bg-blue-700 hover:text-white"
        >
          Visit Product
        </a>
      </section>

      <Footer />
    </>
  );
}
