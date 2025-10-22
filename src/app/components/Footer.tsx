import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2e7d32;
  color: #fff;
  text-align: center;
  padding: 2rem 8%;
  border-top: 2px solid #c99b44;

  @media (max-width: 768px) {
    padding: 1.5rem 4%;
  }

  h3 {
    color: #c99b44;
  }

  p {
    margin: 0.5rem 0;
    font-weight: 500;
    color: #fff;
  }

  small {
    color: #ccc;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <h3>Matts<span>Baskets</span></h3>
      <p>Crafting beauty, weaving stories, sharing Africa with the world.</p>
      <small>© 2025 Matts Baskets. All rights reserved.</small>
    </FooterContainer>
  );
}