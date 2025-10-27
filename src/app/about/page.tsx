'use client';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

const AboutHero = styled.section`
  background: linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.3)), url('/logo_matts_basket.jpg') center/cover no-repeat;
  height: 90vh;
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

const TeamSection = styled.section`
  padding: 3rem 8%;
  text-align: center;

  h3 {
    color: #2e7d32;
    margin-bottom: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
  padding: 2rem 1rem;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-8px);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 3px solid #c99b44;
  }

  h3 {
    color: #2e7d32;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: #444;
    font-size: 0.98rem;
    margin-bottom: 0.5rem;
  }

  .role {
    color: #c99b44;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const teamMembers = [
  {
    name: 'Kwame Mensah',
    role: 'Founder & Master Weaver',
    description: 'With 20+ years of weaving experience, Kwame leads the team with vision and skill.',
    image: 'basket4.jpg'
  },
  {
    name: 'Akosua Boateng',
    role: 'Operations Manager',
    description: 'Akosua ensures every basket meets our high standards and coordinates global shipments.',
    image: 'basket1.jpg'
  },
  {
    name: 'Yaw Owusu',
    role: 'Lead Designer',
    description: 'Yaw brings creativity and innovation to our basket designs, blending tradition with modern style.',
    image: 'basket31.jpg'
  }
];

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
              To empower local weavers and promote sustainable craftsmanship that tells Africa story — one basket at a time.
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

      <TeamSection>
        <h3>Our Team Members</h3>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <img src={getImageUrl(member.image)} alt={member.name} />
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
              <p>{member.description}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>

      <Container>
        <h2>Contact Information</h2>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Get In Touch</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            <strong>Email:</strong> info@mattsbaskets.com
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            <strong>Social Media:</strong>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="https://facebook.com/mattsbaskets" target="_blank" rel="noopener noreferrer" style={{ color: '#2e7d32', textDecoration: 'none', fontWeight: '500' }}>
              Facebook: @mattsbaskets
            </a>
            <a href="https://instagram.com/mattsbaskets" target="_blank" rel="noopener noreferrer" style={{ color: '#2e7d32', textDecoration: 'none', fontWeight: '500' }}>
              Instagram: @mattsbaskets
            </a>
            <a href="https://twitter.com/mattsbaskets" target="_blank" rel="noopener noreferrer" style={{ color: '#2e7d32', textDecoration: 'none', fontWeight: '500' }}>
              Twitter: @mattsbaskets
            </a>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}