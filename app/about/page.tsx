'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About BatchTrace</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BatchTrace is designed to solve the critical problem of batch traceability for essential oil producers. We provide a simple, effective way to track every batch from harvest through distillation to dispatch, ensuring complete transparency and compliance with quality standards.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span><strong>Batch Management:</strong> Add and track batches with essential information including plant variety, harvest date, distillation date, and yield.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span><strong>Lab Certificate Tracking:</strong> Link lab test certificates to specific batches for complete quality documentation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span><strong>Dispatch Management:</strong> Record when batches are dispatched and which buyer received them.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span><strong>Data Persistence:</strong> All your records are safely stored and accessible anytime.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span><strong>Responsive Design:</strong> Access BatchTrace on any device - desktop, tablet, or mobile.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To start managing your batches:
          </p>
          <ol className="text-gray-700 space-y-2 list-decimal list-inside">
            <li>Navigate to the Dashboard</li>
            <li>Click "Add New Batch"</li>
            <li>Fill in the batch details (plant variety, dates, yield, certificate file name)</li>
            <li>Click "Save Batch"</li>
            <li>View all your batches in the sortable table below</li>
            <li>When ready to dispatch, click "Edit" and then "Mark as Dispatched"</li>
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  );
}
