'use client';

import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { getImageUrl } from './lib/images';

const Hero = styled.section`
  background: linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg') center/cover no-repeat;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  .logo {
    width: 150px;
    height: auto;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      width: 100px;
    }
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const CtaBtn = styled.a`
  display: inline-block;
  padding: 0.9rem 2rem;
  background-color: #c99b44;
  color: #fff;
  border-radius: 30px;
  font-weight: 600;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #2e7d32;
  }
`;

const Highlights = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 4rem 8%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 2rem 4%;
    gap: 1rem;
  }
`;

const Highlight = styled.div`
  background: #fff;
  border-radius: 12px;
  text-align: center;
  padding: 2rem 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 320px;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  img {
    width: 100%;
    border-radius: 10px;
    height: 220px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2e7d32;
    margin-bottom: 0.5rem;
  }
`;

const CtaSection = styled.section`
  text-align: center;
  background: #2e7d32;
  color: #fff;
  padding: 3rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  ${CtaBtn} {
    background-color: #c99b44;

    &:hover {
      background-color: #fff;
      color: #2e7d32;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Navbar activePage="home" />

      <Hero>
        <HeroOverlay>
          <h1>Authentic African Woven Art</h1>
          <p>Handcrafted baskets that carry stories, culture, and craftsmanship.</p>
          <CtaBtn href="/product">Explore Our Collection</CtaBtn>
        </HeroOverlay>
      </Hero>

      <Highlights>
        <Highlight>
          <img src={getImageUrl('basket8.jpg')} alt="Small Decorative Basket" />
          <h3>Small Decorative Basket</h3>
          <p>Each basket is carefully handmade with love, patience, and precision.</p>
        </Highlight>

        <Highlight>
          <img src={getImageUrl('basket20.jpg')} alt="Traditional African Basket" />
          <h3>Traditional African Basket</h3>
          <p>Made from 100% natural fibers and eco-friendly materials.</p>
        </Highlight>

        <Highlight>
          <img src={getImageUrl('basket25.jpg')} alt="Compact Travel Basket" />
          <h3>Compact Travel Basket</h3>
          <p>Beautiful designs for homes, stores, and cultural spaces worldwide.</p>
        </Highlight>
      </Highlights>

      <CtaSection>
        <h2>Want to See More?</h2>
        <p>Step into our product and explore the beauty of African weaving.</p>
        <CtaBtn href="/product">Visit Product</CtaBtn>
      </CtaSection>

      <Footer />
    </>
  );
}
