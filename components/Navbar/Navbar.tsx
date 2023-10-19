import React from 'react';
import Link from 'next/link';
import { DarkToggle } from '../index';

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link href="/">Home</Link>
      <DarkToggle />
    </nav>
  );
};
