'use client';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutHero = styled.section`
  background: url('https://lbkzzugcazmoxutvmneq.supabase.co/storage/v1/object/public/matts-baskets-images/baskets-bg.jpg') center/cover no-repeat;
  height: 60vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutHeroOverlay = styled.div`
  background-color: rgba(46, 125, 50, 0.55);
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

const Container = styled.div`
  padding: 3rem 10%;
  line-height: 1.8;

  h2 {
    text-align: center;
    color: #2e7d32;
    margin-bottom: 1.5rem;
  }

  p {
    color: #444;
  }
`;

const Mission = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0;

  div {
    flex: 1 1 45%;
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border-left: 5px solid #2e7d32;
  }

  h3 {
    color: #2e7d32;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Values = styled.div`
  text-align: center;
  margin-top: 2.5rem;

  h3 {
    color: #2e7d32;
  }

  ul {
    list-style: none;
    margin-top: 1rem;
  }

  li {
    padding: 0.5rem 0;
    font-weight: 500;
    color: #c99b44;
  }
`;

export default function About() {
  return (
    <>
      <Navbar activePage="about" />

      <AboutHero>
        <AboutHeroOverlay>
          <h2>We Weave Culture Into Every Basket</h2>
          <p>Rirosa Global Ltd is proudly Ghanaian, sharing authentic African craftsmanship with the world.</p>
        </AboutHeroOverlay>
      </AboutHero>

      <Container>
        <h2>Our Story</h2>
        <p>
          Matts Baskets began with a simple dream — to showcase the beauty and skill of African artisans to a global audience.
          Our baskets are 100% handwoven in Ghana using eco-friendly materials, blending traditional artistry with modern design.
        </p>

        <Mission>
          <div>
            <h3>🌿 Our Mission</h3>
            <p>
              To empower local weavers and promote sustainable craftsmanship that tells Africa&#39;s story — one basket at a time.
            </p>
          </div>
          <div>
            <h3>🌍 Our Vision</h3>
            <p>
              To become a leading name in authentic African home decor and lifestyle products worldwide.
            </p>
          </div>
        </Mission>

        <Values>
          <h3>Our Core Values</h3>
          <ul>
            <li>✨ Authentic Craftsmanship</li>
            <li>💪 Empowering Local Communities</li>
            <li>🌱 Sustainability</li>
            <li>💖 Integrity & Fair Trade</li>
          </ul>
        </Values>
      </Container>

      <Footer />
    </>
  );
}