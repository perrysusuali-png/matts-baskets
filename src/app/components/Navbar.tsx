'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/app/lib/supabaseClient';

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [menuActive, setMenuActive] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="flex justify-between items-center py-5 px-6 md:px-24 bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 cursor-pointer transition duration-300 hover:scale-105">
        <img
          src="/Fresh Green and White Logo for Matts Basket.png"
          alt="Matts Basket Logo"
          className="h-10 md:h-8 w-auto object-contain"
        />
        <h1 className="text-xl md:text-lg font-bold text-primary transition duration-300 hover:drop-shadow-lg">
          Matts<span className="text-secondary transition duration-300 hover:text-blue-300">Baskets</span>
        </h1>
      </Link>

      <ul className={`flex gap-6 list-none ${menuActive ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative right-0 top-16 md:top-0 bg-white md:bg-transparent w-48 md:w-auto shadow-lg md:shadow-none`}>
        <li className="rounded-full bg-primary px-4 py-2 transition duration-300 hover:bg-blue-800 hover:scale-105 relative overflow-hidden">
          <Link href="/" className={`no-underline text-white font-medium transition duration-300 ${activePage === 'home' ? 'text-secondary' : 'hover:text-secondary'}`}>
            Home
          </Link>
        </li>
        <li className="rounded-full bg-primary px-4 py-2 transition duration-300 hover:bg-blue-800 hover:scale-105 relative overflow-hidden">
          <Link href="/about" className={`no-underline text-white font-medium transition duration-300 ${activePage === 'about' ? 'text-secondary' : 'hover:text-secondary'}`}>
            About
          </Link>
        </li>
        <li className="rounded-full bg-primary px-4 py-2 transition duration-300 hover:bg-blue-800 hover:scale-105 relative overflow-hidden">
          <Link href="/product" className={`no-underline text-white font-medium transition duration-300 ${activePage === 'product' ? 'text-secondary' : 'hover:text-secondary'}`}>
            Products
          </Link>
        </li>
        <li className="rounded-full bg-primary px-4 py-2 transition duration-300 hover:bg-blue-800 hover:scale-105 relative overflow-hidden">
          <Link href="/cart" className={`no-underline text-white font-medium transition duration-300 ${activePage === 'cart' ? 'text-secondary' : 'hover:text-secondary'}`}>
            Cart
          </Link>
        </li>
        <li className="rounded-full bg-primary px-4 py-2 transition duration-300 hover:bg-blue-800 hover:scale-105 relative overflow-hidden">
          <Link href="/order" className={`no-underline text-white font-medium transition duration-300 ${activePage === 'order' ? 'text-secondary' : 'hover:text-secondary'}`}>
            Order
          </Link>
        </li>
        <li className="rounded-full bg-primary px-4 py-2 transition duration-300 hover:bg-blue-800 hover:scale-105 relative overflow-hidden">
          <Link href="/feedback" className={`no-underline text-white font-medium transition duration-300 ${activePage === 'feedback' ? 'text-secondary' : 'hover:text-secondary'}`}>
            Contact
          </Link>
        </li>
        {user && (
          <li className="rounded-full bg-secondary px-4 py-2 mt-2 transition duration-300 hover:bg-gray-800 hover:scale-105">
            <Link href="/admin" className={`no-underline text-primary font-bold transition duration-300 ${activePage === 'admin' ? 'text-white' : 'hover:text-white'}`}>
              Admin Panel
            </Link>
          </li>
        )}
      </ul>

      <div
        className="md:hidden text-2xl cursor-pointer text-primary"
        onClick={() => setMenuActive(!menuActive)}
      >
        &#9776;
      </div>
    </nav>
  );
}