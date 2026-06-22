'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Essential Oil Batch Traceability
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Track every batch from harvest to delivery. Manage lab certificates, mark dispatches, and maintain complete records of your essential oil production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/about"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
