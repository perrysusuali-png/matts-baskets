'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

const GalleryHero = styled.section`
  background: linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg') center/cover no-repeat;
  height: 90vh;
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
  animation: fadeInUp 1.2s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  .logo {
    width: 120px;
    height: auto;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      width: 80px;
    }
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    animation: textFadeIn 2s ease-out 0.5s both;

    @keyframes textFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  p {
    animation: textFadeIn 2s ease-out 1s both;
  }
`;

const GallerySection = styled.section`
  padding: 3rem 8%;

  @media (max-width: 768px) {
    padding: 2rem 4%;
  }
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
  description?: string;
  image?: string;
}

const defaultProducts: Product[] = [];

export default function Gallery() {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
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
    // Removed alert for better UX
  };

  return (
    <>
      <Navbar activePage="product" />

      <GalleryHero>
        <GalleryHeroOverlay>
          <h2>Our Handwoven Masterpieces</h2>
          <p>Explore our collection of African baskets — crafted with love, skill, and heritage.</p>
        </GalleryHeroOverlay>
      </GalleryHero>

      <GallerySection>
        {products.length > 0 ? (
          <GalleryGrid>
            {products.map((product) => (
              <BasketCard key={product.id}>
                <img src={product.image?.startsWith('http') ? product.image : getImageUrl(product.image || 'basket8.jpg')} alt={product.name} loading="lazy" />
                <div className="info">
                  <h3>{product.name}</h3>
                  {product.description && <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.5rem 0' }}>{product.description}</p>}
                  <p>₵{product.price}</p>
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </BasketCard>
            ))}
          </GalleryGrid>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <h3>Loading products...</h3>
            <p>Please wait while we load your products from the database.</p>
          </div>
        )}
      </GallerySection>

      <Footer />
    </>
  );
}