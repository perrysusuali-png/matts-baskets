'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

const defaultProducts: Product[] = [];

export default function Gallery() {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [cart, setCart] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          // Transform data to match expected format, adding default images if missing
          const transformedData = data.map((product: any, index: number) => ({
            ...product,
            image: product.image || `basket${6 + index}.jpg` // Default images starting from basket6.jpg
          }));
          setProducts(transformedData);
        } else {
          // If no products from API, show empty state
          setProducts([]);
        }
      })
      .catch(() => {
        // If API fails, show empty state
        setProducts([]);
      });

    // Load cart from localStorage (only on client side)
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    if (typeof window !== 'undefined') {
      const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
      const updatedCart = [...currentCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
      // Removed alert for better UX
    }
  };

  if (!isClient) {
    return (
      <>
        <Navbar activePage="product" />
        <section
          className="bg-cover bg-center bg-no-repeat h-[90vh] relative flex justify-center items-center"
          style={{ backgroundImage: "linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg')" }}
        >
          <div className="bg-primary bg-opacity-60 p-8 text-center text-white rounded-lg backdrop-blur-sm animate-fade-in-up">
            <h2 className="text-2xl mb-4 animate-text-fade-in">Our Handwoven Masterpieces</h2>
            <p className="animate-text-fade-in">Explore our collection of African baskets — crafted with love, skill, and heritage.</p>
          </div>
        </section>
        <section className="py-12 px-8 md:px-32">
          <div className="text-center py-12 text-gray-600">
            <h3 className="text-xl mb-2">Loading products...</h3>
            <p>Please wait while we load your products from the database.</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar activePage="product" />

      <section
        className="bg-cover bg-center bg-no-repeat h-[90vh] relative flex justify-center items-center"
        style={{ backgroundImage: "linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg')" }}
      >
        <div className="bg-primary bg-opacity-60 p-8 text-center text-white rounded-lg backdrop-blur-sm animate-fade-in-up">
          <h2 className="text-2xl mb-4 animate-text-fade-in">Our Handwoven Masterpieces</h2>
          <p className="animate-text-fade-in">Explore our collection of African baskets — crafted with love, skill, and heritage.</p>
        </div>
      </section>

      <section className="py-12 px-8 md:px-32">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:-translate-y-2">
                <img
                  src={product.image?.startsWith('http') ? product.image : getImageUrl(product.image || 'basket8.jpg')}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <h3 className="text-primary mb-2 font-semibold text-lg">{product.name}</h3>
                  {product.description && <p className="text-sm text-gray-600 mb-2">{product.description}</p>}
                  <p className="text-secondary font-bold text-xl mb-4">₵{product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3 bg-primary text-white font-bold rounded-b-lg transition duration-300 hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-600">
            <h3 className="text-xl mb-2">Loading products...</h3>
            <p>Please wait while we load your products from the database.</p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}