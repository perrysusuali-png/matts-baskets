'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderHero = styled.section`
  background: linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg') center/cover no-repeat;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderHeroOverlay = styled.div`
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
    font-size: 2.2rem;
    color: #ffd600;
    text-shadow: 1px 1px 8px #2e7d32;
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
    font-size: 1.15rem;
    color: #fffde7;
    animation: textFadeIn 2s ease-out 1s both;
  }
`;

const OrderFormSection = styled.section`
  padding: 4rem 10%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }

  h3 {
    color: #2e7d32;
    margin-bottom: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2e7d32;
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #2e7d32;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
  }
`;

const Button = styled.button`
  background-color: #2e7d32;
  color: #fff;
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #256828;
  }
`;

export default function Order() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const basket = (form.elements.namedItem('basket') as HTMLInputElement).value;
    const price = parseFloat((form.elements.namedItem('price') as HTMLInputElement).value);
    const quantity = parseInt((form.elements.namedItem('quantity') as HTMLInputElement).value);
    const location = (form.elements.namedItem('location') as HTMLInputElement).value;
    const paymentMethod = (form.elements.namedItem('paymentMethod') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const total = price * quantity;

    const text = `🧺 *New Basket Order!*%0A
👤 Name: ${name}%0A
📞 Phone: ${phone}%0A
🧺 Basket Type: ${basket}%0A
💰 Price per Basket: ₵${price.toFixed(2)}%0A
� Quantity: ${quantity}%0A
💵 Total: ₵${total.toFixed(2)}%0A
📍 Location: ${location}%0A
💳 Payment Method: ${paymentMethod}%0A
� Message: ${message || "None"}`;

    const whatsappNumber = "233247838767";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Navbar activePage="order" />

      <OrderHero>
        <OrderHeroOverlay>
          <h2>🧺 Place Your Order</h2>
          <p>Fill out the form below to place your order easily.</p>
        </OrderHeroOverlay>
      </OrderHero>

      <OrderFormSection>
        <Form onSubmit={handleSubmit}>
          <h3>Order Form</h3>
          <FormGroup>
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Enter your full name" required />
          </FormGroup>

          <FormGroup>
            <label>Phone Number / WhatsApp</label>
            <input type="tel" name="phone" placeholder="e.g. +233 24 123 4567" required />
          </FormGroup>

          <FormGroup>
            <label>Basket Name or Type</label>
            <input type="text" name="basket" placeholder="e.g. Large Woven Basket" required />
          </FormGroup>

          <FormGroup>
            <label>Price per Basket (₵)</label>
            <input type="number" name="price" min="0" step="0.01" placeholder="e.g. 50.00" required />
          </FormGroup>

          <FormGroup>
            <label>Quantity</label>
            <input type="number" name="quantity" min="1" defaultValue="1" required />
          </FormGroup>

          <FormGroup>
            <label>Location</label>
            <input type="text" name="location" placeholder="Your delivery address or city" required />
          </FormGroup>

          <FormGroup>
            <label>Payment Method</label>
            <select name="paymentMethod" required>
              <option value="">Select Payment Method</option>
              <option value="MTN Mobile Money">MTN Mobile Money</option>
              <option value="Vodafone Cash">Vodafone Cash</option>
              <option value="Airtel Money">Airtel Money</option>
              <option value="Tigo Cash">Tigo Cash</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label>Additional Message (Optional)</label>
            <textarea name="message" placeholder="Any special notes?" />
          </FormGroup>

          <Button type="submit">Submit Order</Button>
        </Form>
      </OrderFormSection>

      <Footer />
    </>
  );
}