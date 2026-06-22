'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">BatchTrace</h3>
            <p className="text-sm">
              A complete batch traceability solution for essential oil producers. Track, manage, and deliver with confidence.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                🔗 LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                📧 Email
              </a>
              <a href="#" className="hover:text-white transition">
                🌐 Website
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} BatchTrace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
