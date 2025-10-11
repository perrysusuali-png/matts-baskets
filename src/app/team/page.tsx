'use client';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

const TeamHero = styled.section`
  background: url('https://lbkzzugcazmoxutvmneq.supabase.co/storage/v1/object/public/matts-baskets-images/team-bg.jpg') center/cover no-repeat;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TeamHeroOverlay = styled.div`
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
    font-size: 1.1rem;
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

export default function Team() {
  return (
    <>
      <Navbar activePage="team" />

      <TeamHero>
        <TeamHeroOverlay>
          <h2>Meet Our Team</h2>
          <p>Passionate, skilled, and dedicated to bringing you the best handcrafted baskets from Ghana.</p>
        </TeamHeroOverlay>
      </TeamHero>

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

      <Footer />
    </>
  );
}