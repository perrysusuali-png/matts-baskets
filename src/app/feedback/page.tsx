'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeedbackHero = styled.section`
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedbackHeroOverlay = styled.div`
  background-color: rgba(46, 125, 50, 0.6);
  padding: 2rem;
  text-align: center;
  color: #fff;
  border-radius: 12px;
  backdrop-filter: blur(3px);

  h2 {
    font-size: 2.2rem;
    color: #ffd600;
    text-shadow: 1px 1px 8px #2e7d32;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.15rem;
    color: #fffde7;
  }
`;

const FeedbackFormSection = styled.section`
  padding: 3rem 10%;
  text-align: center;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);

  h3 {
    color: #2e7d32;
    margin-bottom: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.4rem;
    color: #2e7d32;
    font-weight: 600;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #c99b44;
    }
  }

  textarea {
    resize: vertical;
  }
`;

const Button = styled.button`
  background: #2e7d32;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;

  &:hover {
    background: #c99b44;
  }
`;

const FormStatus = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #2e7d32;
  font-weight: 500;
`;

export default function Feedback() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as unknown as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as unknown as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as unknown as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setStatus('Please fill in all required fields.');
      return;
    }

    setStatus('Thank you for your feedback!');
    form.reset();
  };

  return (
    <>
      <Navbar activePage="feedback" />

      <FeedbackHero>
        <FeedbackHeroOverlay>
          <h2>We Value Your Feedback</h2>
          <p>Your thoughts help us grow and make our craftsmanship even better.</p>
        </FeedbackHeroOverlay>
      </FeedbackHero>

      <FeedbackFormSection>
        <Form onSubmit={handleSubmit}>
          <h3>Share Your Experience</h3>
          <FormGroup>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" placeholder="Where are you from?" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="rating">Rate Our Products</label>
            <select id="rating" name="rating" required>
              <option value="">Select a rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Very Poor</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Your Feedback</label>
            <textarea id="message" name="message" rows={5} placeholder="Tell us what you think..." required />
          </FormGroup>

          <Button type="submit">Submit Feedback</Button>
          <FormStatus>{status}</FormStatus>
        </Form>
      </FeedbackFormSection>

      <Footer />
    </>
  );
}