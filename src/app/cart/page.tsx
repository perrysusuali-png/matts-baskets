'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

const CartHero = styled.section`
  background: linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg') center/cover no-repeat;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartHeroOverlay = styled.div`
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

const CartSection = styled.section`
  padding: 3rem 8%;

  @media (max-width: 768px) {
    padding: 2rem 4%;
  }
`;

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 1rem;
  }

  .info {
    flex: 1;

    h3 {
      margin: 0 0 0.5rem 0;
      color: #2e7d32;
    }

    p {
      margin: 0;
      color: #c99b44;
      font-weight: bold;
    }
  }

  button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const CartSummary = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-top: 2rem;

  h3 {
    color: #2e7d32;
    margin-bottom: 1rem;
  }

  .total {
    font-size: 1.5rem;
    font-weight: bold;
    color: #c99b44;
    margin-bottom: 2rem;
  }
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PaymentButton = styled.button`
  background-color: #2e7d32;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #256828;
  }
`;

const CheckoutButton = styled.button`
  background-color: #ffd600;
  color: #2e7d32;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  width: 100%;

  &:hover {
    background-color: #ffc107;
  }
`;

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (method: string) => {
    const message = `🛒 *Cart Checkout*%0A%0A${cart.map(item => `• ${item.name} - ₵${item.price}`).join('%0A')}%0A%0ATotal: ₵${total}%0APayment Method: ${method}`;

    const whatsappNumber = "233247838767";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      // Could show a toast notification instead
      return;
    }
    // Payment method selection is now automatic
  };

  return (
    <>
      <Navbar activePage="cart" />

      <CartHero>
        <CartHeroOverlay>
          <h2>Your Shopping Cart</h2>
          <p>Review your items and proceed to checkout.</p>
        </CartHeroOverlay>
      </CartHero>

      <CartSection>
        <CartContainer>
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>
              Your cart is empty. Visit our product to add some beautiful baskets!
            </p>
          ) : (
            <>
              {cart.map((item, index) => (
                <CartItem key={index}>
                  <img src={getImageUrl(item.image)} alt={item.name} />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <p>₵{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </CartItem>
              ))}

              <CartSummary>
                <h3>Order Summary</h3>
                <p className="total">Total: ₵{total}</p>

                <PaymentOptions>
                  <PaymentButton onClick={() => handlePayment('Mobile Money')}>
                    📱 Mobile Money
                  </PaymentButton>
                </PaymentOptions>

                <CheckoutButton onClick={handleCheckout}>
                  Proceed to Checkout
                </CheckoutButton>
              </CartSummary>
            </>
          )}
        </CartContainer>
      </CartSection>

      <Footer />
    </>
  );
}