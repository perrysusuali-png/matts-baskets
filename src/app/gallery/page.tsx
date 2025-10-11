'use client';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getImageUrl } from '../lib/images';

const GalleryHero = styled.section`
  background: url('https://lbkzzugcazmoxutvmneq.supabase.co/storage/v1/object/public/matts-baskets-images/baskets-bg.jpg') center/cover no-repeat;
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

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
  }
`;

const images = [
  'basket6.jpg', 'basket7.jpg', 'basket8.jpg', 'basket9.jpg', 'basket10.jpg',
  'basket11.jpg', 'basket12.jpg', 'basket13.jpg', 'basket14.jpg', 'basket15.jpg',
  'basket16.jpg', 'basket17.jpg', 'basket18.jpg', 'basket19.jpg', 'basket20.jpg',
  'basket24.jpg', 'basket25.jpg', 'basket26.jpg', 'basket28.jpg', 'basket30.jpg',
  'basket31.jpg', 'basket32.jpg', 'basket33.jpg', 'basket34.jpg', 'basket35.jpg',
  'basket36.jpg'
];

export default function Gallery() {
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
          {images.map((img, index) => (
            <img key={index} src={getImageUrl(img)} alt="" loading="lazy" />
          ))}
        </GalleryGrid>
      </GallerySection>

      <Footer />
    </>
  );
}