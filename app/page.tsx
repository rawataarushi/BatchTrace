'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Add Batches"
              description="Quickly add new batch records with plant variety, harvest date, distillation date, yield, and lab certificate file names."
            />
            <Card
              title="Track Certificates"
              description="Link lab test certificates to specific batches. Maintain complete documentation for quality assurance and compliance."
            />
            <Card
              title="Manage Dispatch"
              description="Mark batches as dispatched and record buyer information. Keep a complete history of your distribution."
            />
            <Card
              title="View All Records"
              description="Access a sortable table view of all batches with complete details. Sort by date, plant variety, or dispatch status."
            />
            <Card
              title="Responsive Design"
              description="Access BatchTrace on any device - desktop, tablet, or mobile. Works seamlessly everywhere."
            />
            <Card
              title="Data Persistence"
              description="All your batch records are saved securely. Your data stays with you throughout the lifetime of the application."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
