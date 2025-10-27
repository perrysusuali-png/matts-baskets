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
  animation: slideDown 0.8s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 4%;
  }
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: #2e7d32;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 1s ease-out;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(201, 155, 68, 0.8), 0 0 20px rgba(201, 155, 68, 0.6);
  }

  span {
    color: #c99b44;
    transition: color 0.3s ease;

    &:hover {
      color: #2e7d32;
    }
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

  li {
    border-radius: 25px;
    background-color: #2e7d32;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    transform: scale(1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(201, 155, 68, 0.4), transparent);
      transition: left 0.5s;
    }

    &:hover {
      background-color: #1b5e20;
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3), 0 0 20px rgba(201, 155, 68, 0.5);

      &::before {
        left: 100%;
      }
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    transition: 0.3s;

    &:hover,
    &.active {
      color: #c99b44;
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
      </NavLinks>
      <MenuBtn onClick={() => setMenuActive(!menuActive)}>&#9776;</MenuBtn>
    </Nav>
  );
}