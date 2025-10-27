'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 6%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem 4%;
  }
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: #2e7d32;

  span {
    color: #c99b44;
  }
`;

const NavLinks = styled.ul<{ $active: boolean }>`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  @media (max-width: 768px) {
    display: ${props => props.$active ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 70px;
    background: #fff;
    width: 200px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: #444;
    font-weight: 500;
    transition: 0.3s;

    &:hover,
    &.active {
      color: #2e7d32;
    }
  }
`;

const MenuBtn = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #2e7d32;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Nav>
      <Logo>Matts<span>Baskets</span></Logo>
      <NavLinks $active={menuActive}>
        <li><Link href="/" className={activePage === 'home' ? 'active' : ''}>Home</Link></li>
        <li><Link href="/about" className={activePage === 'about' ? 'active' : ''}>About</Link></li>
        <li><Link href="/product" className={activePage === 'product' ? 'active' : ''}>Product</Link></li>
        <li><Link href="/cart" className={activePage === 'cart' ? 'active' : ''}>Cart</Link></li>
        <li><Link href="/order" className={activePage === 'order' ? 'active' : ''}>Order</Link></li>
        <li><Link href="/feedback" className={activePage === 'feedback' ? 'active' : ''}>Feedback</Link></li>
        <li><Link href="/team" className={activePage === 'team' ? 'active' : ''}>Team</Link></li>
      </NavLinks>
      <MenuBtn onClick={() => setMenuActive(!menuActive)}>&#9776;</MenuBtn>
    </Nav>
  );
}