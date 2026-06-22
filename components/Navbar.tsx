'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              🌿 BatchTrace
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:bg-blue-500 px-3 py-2 rounded">
              Home
            </Link>
            <Link href="/dashboard" className="hover:bg-blue-500 px-3 py-2 rounded">
              Dashboard
            </Link>
            <Link href="/about" className="hover:bg-blue-500 px-3 py-2 rounded">
              About
            </Link>
            <Link href="/help" className="hover:bg-blue-500 px-3 py-2 rounded">
              Help
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white hover:bg-blue-500 block px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-white hover:bg-blue-500 block px-3 py-2 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="text-white hover:bg-blue-500 block px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/help"
              className="text-white hover:bg-blue-500 block px-3 py-2 rounded-md"
            >
              Help
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
