'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

const GalleryHero = styled.section`
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalleryHeroOverlay = styled.div`
  background-color: rgba(46, 125, 50, 0.6);
  padding: 2rem;
  text-align: center;
  color: #fff;
  border-radius: 12px;
  backdrop-filter: blur(3px);

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const GallerySection = styled.section`
  padding: 3rem 8%;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const BasketCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    padding: 1rem;
    text-align: center;

    h3 {
      margin: 0 0 0.5rem 0;
      color: #2e7d32;
      font-size: 1.1rem;
    }

    p {
      margin: 0 0 1rem 0;
      color: #c99b44;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  button {
    width: 100%;
    padding: 0.8rem;
    background-color: #2e7d32;
    color: #fff;
    border: none;
    border-radius: 0 0 12px 12px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #256828;
    }
  }
`;

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const defaultProducts: Product[] = [
  { id: 1, name: 'Large Woven Basket', price: 50, image: 'basket6.jpg' },
  { id: 2, name: 'Medium Storage Basket', price: 35, image: 'basket7.jpg' },
  { id: 3, name: 'Small Decorative Basket', price: 25, image: 'basket8.jpg' },
  { id: 4, name: 'Round Market Basket', price: 40, image: 'basket9.jpg' },
  { id: 5, name: 'Tall Laundry Basket', price: 60, image: 'basket10.jpg' },
  { id: 6, name: 'Square Picnic Basket', price: 45, image: 'basket11.jpg' },
  { id: 7, name: 'Oval Fruit Basket', price: 30, image: 'basket12.jpg' },
  { id: 8, name: 'Rectangular Bread Basket', price: 20, image: 'basket13.jpg' },
  { id: 9, name: 'Hexagonal Gift Basket', price: 55, image: 'basket14.jpg' },
  { id: 10, name: 'Circular Serving Basket', price: 38, image: 'basket15.jpg' },
  { id: 11, name: 'Deep Utility Basket', price: 42, image: 'basket16.jpg' },
  { id: 12, name: 'Shallow Display Basket', price: 28, image: 'basket17.jpg' },
  { id: 13, name: 'Wicker Storage Basket', price: 48, image: 'basket18.jpg' },
  { id: 14, name: 'Bamboo Style Basket', price: 52, image: 'basket19.jpg' },
  { id: 15, name: 'Traditional African Basket', price: 65, image: 'basket20.jpg' },
  { id: 16, name: 'Modern Design Basket', price: 58, image: 'basket24.jpg' },
  { id: 17, name: 'Compact Travel Basket', price: 32, image: 'basket25.jpg' },
  { id: 18, name: 'Elegant Dining Basket', price: 70, image: 'basket26.jpg' },
  { id: 19, name: 'Rustic Farm Basket', price: 45, image: 'basket28.jpg' },
  { id: 20, name: 'Artisan Craft Basket', price: 75, image: 'basket30.jpg' },
  { id: 21, name: 'Versatile Kitchen Basket', price: 40, image: 'basket31.jpg' },
  { id: 22, name: 'Decorative Wall Basket', price: 35, image: 'basket32.jpg' },
  { id: 23, name: 'Portable Shopping Basket', price: 25, image: 'basket33.jpg' },
  { id: 24, name: 'Luxury Gift Basket', price: 80, image: 'basket34.jpg' },
  { id: 25, name: 'Eco-Friendly Basket', price: 38, image: 'basket35.jpg' },
  { id: 26, name: 'Handmade Special Basket', price: 90, image: 'basket36.jpg' },
];

export default function Gallery() {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) setProducts(data);
      })
      .catch(() => {
        // Use default products if API fails
      });

    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...currentCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <Navbar activePage="gallery" />

      <GalleryHero>
        <GalleryHeroOverlay>
          <h2>Our Handwoven Masterpieces</h2>
          <p>Explore our collection of African baskets — crafted with love, skill, and heritage.</p>
        </GalleryHeroOverlay>
      </GalleryHero>

      <GallerySection>
        <GalleryGrid>
          {products.map((product) => (
            <BasketCard key={product.id}>
              <img src={getImageUrl(product.image)} alt={product.name} loading="lazy" />
              <div className="info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </BasketCard>
          ))}
        </GalleryGrid>
      </GallerySection>

      <Footer />
    </>
  );
}