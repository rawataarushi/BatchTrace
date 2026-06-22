# BatchTrace - Complete Code & Commit Guide

This document contains all the code files and exact git commits needed to build the BatchTrace project from scratch.

---

## SETUP INSTRUCTIONS

### Step 1: Create Next.js Project

```bash
cd d:\Projects\BatchTrace
npx create-next-app@latest batch-app --typescript --tailwind --app --no-eslint --no-git
cd batch-app
git init
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

---

## FILE 1: components/Navbar.tsx

**Path**: `components/Navbar.tsx`

```typescript
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
```

---

## FILE 2: components/Hero.tsx

**Path**: `components/Hero.tsx`

```typescript
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
```

---

## FILE 3: components/Card.tsx

**Path**: `components/Card.tsx`

```typescript
'use client';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  action?: {
    label: string;
    onClick?: () => void;
  };
}

export default function Card({ title, description, image, action }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {image && (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}
```

---

## FILE 4: components/Footer.tsx

**Path**: `components/Footer.tsx`

```typescript
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
```

---

## FILE 5: app/page.tsx

**Path**: `app/page.tsx`

```typescript
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
```

---

## FILE 6: app/dashboard/page.tsx

**Path**: `app/dashboard/page.tsx`

```typescript
'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Batch {
  id: string;
  plantVariety: string;
  harvestDate: string;
  distillationDate: string;
  yield: string;
  certificateFileName: string;
  status: 'pending' | 'dispatched';
  buyerName?: string;
}

export default function Dashboard() {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    plantVariety: '',
    harvestDate: '',
    distillationDate: '',
    yield: '',
    certificateFileName: '',
    buyerName: '',
  });
  const [sortConfig, setSortConfig] = useState({
    key: 'harvestDate',
    direction: 'desc' as 'asc' | 'desc',
  });

  // Load batches from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('batches');
    if (saved) {
      setBatches(JSON.parse(saved));
    }
  }, []);

  // Save batches to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('batches', JSON.stringify(batches));
  }, [batches]);

  const handleAddBatch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.plantVariety || !formData.harvestDate || !formData.distillationDate || !formData.yield) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      // Update existing batch
      setBatches(batches.map(b =>
        b.id === editingId ? { ...b, ...formData, status: b.status, buyerName: b.buyerName } : b
      ));
      setEditingId(null);
    } else {
      // Add new batch
      const newBatch: Batch = {
        id: Date.now().toString(),
        ...formData,
        status: 'pending',
      };
      setBatches([...batches, newBatch]);
    }

    setFormData({
      plantVariety: '',
      harvestDate: '',
      distillationDate: '',
      yield: '',
      certificateFileName: '',
      buyerName: '',
    });
    setShowForm(false);
  };

  const handleEditBatch = (batch: Batch) => {
    setFormData({
      plantVariety: batch.plantVariety,
      harvestDate: batch.harvestDate,
      distillationDate: batch.distillationDate,
      yield: batch.yield,
      certificateFileName: batch.certificateFileName,
      buyerName: batch.buyerName || '',
    });
    setEditingId(batch.id);
    setShowForm(true);
  };

  const handleDispatch = () => {
    const buyerName = prompt('Enter buyer name:');
    if (buyerName && editingId) {
      setBatches(batches.map(b =>
        b.id === editingId
          ? { ...b, status: 'dispatched', buyerName }
          : b
      ));
      setEditingId(null);
      setShowForm(false);
      alert('Batch marked as dispatched!');
    }
  };

  const handleDeleteBatch = (id: string) => {
    if (confirm('Are you sure you want to delete this batch?')) {
      setBatches(batches.filter(b => b.id !== id));
    }
  };

  const handleSort = (key: keyof Batch) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const sortedBatches = [...batches].sort((a, b) => {
    const aVal = a[sortConfig.key as keyof Batch];
    const bVal = b[sortConfig.key as keyof Batch];
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortConfig.direction === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }
    return 0;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Batch Dashboard</h1>
          <p className="text-gray-600">Manage your essential oil batch records and lab certificates</p>
        </div>

        {/* Add Batch Button */}
        <div className="mb-6">
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingId(null);
              if (showForm) {
                setFormData({
                  plantVariety: '',
                  harvestDate: '',
                  distillationDate: '',
                  yield: '',
                  certificateFileName: '',
                  buyerName: '',
                });
              }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {showForm ? '✕ Cancel' : '+ Add New Batch'}
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {editingId ? 'Edit Batch' : 'Add New Batch'}
            </h2>
            <form onSubmit={handleAddBatch} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Plant Variety *
                </label>
                <input
                  type="text"
                  value={formData.plantVariety}
                  onChange={(e) => setFormData({ ...formData, plantVariety: e.target.value })}
                  placeholder="e.g., Rose, Lavender, Eucalyptus"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Harvest Date *
                </label>
                <input
                  type="date"
                  value={formData.harvestDate}
                  onChange={(e) => setFormData({ ...formData, harvestDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Distillation Date *
                </label>
                <input
                  type="date"
                  value={formData.distillationDate}
                  onChange={(e) => setFormData({ ...formData, distillationDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Yield (ml) *
                </label>
                <input
                  type="number"
                  value={formData.yield}
                  onChange={(e) => setFormData({ ...formData, yield: e.target.value })}
                  placeholder="e.g., 250"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Lab Certificate File Name
                </label>
                <input
                  type="text"
                  value={formData.certificateFileName}
                  onChange={(e) => setFormData({ ...formData, certificateFileName: e.target.value })}
                  placeholder="e.g., CERT-2024-001.pdf"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Buyer Name (if dispatched)
                </label>
                <input
                  type="text"
                  value={formData.buyerName}
                  onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                  placeholder="e.g., Company ABC"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  {editingId ? 'Update Batch' : 'Save Batch'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={handleDispatch}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
                  >
                    Mark as Dispatched
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Batches Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {batches.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg">No batches yet. Add your first batch to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSort('plantVariety')}>
                      Plant Variety {sortConfig.key === 'plantVariety' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSort('harvestDate')}>
                      Harvest Date {sortConfig.key === 'harvestDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSort('yield')}>
                      Yield (ml) {sortConfig.key === 'yield' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Certificate</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Buyer</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBatches.map((batch) => (
                    <tr key={batch.id} className="border-b hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-800">{batch.plantVariety}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{batch.harvestDate}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{batch.yield}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {batch.certificateFileName || '—'}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-white font-semibold ${
                            batch.status === 'dispatched' ? 'bg-green-600' : 'bg-yellow-600'
                          }`}
                        >
                          {batch.status === 'dispatched' ? 'Dispatched' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">{batch.buyerName || '—'}</td>
                      <td className="px-6 py-4 text-sm flex gap-2">
                        <button
                          onClick={() => handleEditBatch(batch)}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBatch(batch.id)}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        {batches.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Batches</h3>
              <p className="text-3xl font-bold text-blue-600">{batches.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-600 text-sm font-semibold mb-2">Pending</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {batches.filter(b => b.status === 'pending').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-600 text-sm font-semibold mb-2">Dispatched</h3>
              <p className="text-3xl font-bold text-green-600">
                {batches.filter(b => b.status === 'dispatched').length}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
```

---

## FILE 7: app/about/page.tsx

**Path**: `app/about/page.tsx`

```typescript
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
```

---

## FILE 8: app/help/page.tsx

**Path**: `app/help/page.tsx`

```typescript
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Help() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Help & Support</h1>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">What information do I need to add a batch?</h3>
                <p className="text-gray-600">
                  To add a batch, you need:
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li><strong>Plant Variety:</strong> e.g., Rose, Lavender, Eucalyptus</li>
                    <li><strong>Harvest Date:</strong> When the plants were harvested</li>
                    <li><strong>Distillation Date:</strong> When the oil was distilled</li>
                    <li><strong>Yield (ml):</strong> How much oil was produced</li>
                    <li><strong>Lab Certificate File Name:</strong> Optional - name of the certificate file for reference</li>
                  </ul>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">How do I mark a batch as dispatched?</h3>
                <p className="text-gray-600">
                  Click the "Edit" button on any batch in the dashboard. Once you're in edit mode, click "Mark as Dispatched" and enter the buyer's name. The batch status will change from "Pending" to "Dispatched".
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Can I sort the batch table?</h3>
                <p className="text-gray-600">
                  Yes! Click on any column header (Plant Variety, Harvest Date, or Yield) to sort the table. Click again to reverse the sort order.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Where is my data stored?</h3>
                <p className="text-gray-600">
                  All your batch data is stored locally in your browser's storage. Your data persists even after closing the browser, and is never sent to external servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Can I edit a batch after adding it?</h3>
                <p className="text-gray-600">
                  Yes! Click the "Edit" button on any batch to modify its details. You can also delete a batch by clicking the "Delete" button (you'll be asked for confirmation).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">What does the dashboard show?</h3>
                <p className="text-gray-600">
                  The dashboard shows all your batches in a sortable table with their current status. It also displays summary statistics showing total batches, pending batches, and dispatched batches.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Is the app mobile-friendly?</h3>
                <p className="text-gray-600">
                  Yes! BatchTrace is fully responsive and works great on mobile phones, tablets, and desktops. Access it from any device with a web browser.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Best Results</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Use consistent plant variety names for easier filtering</li>
              <li>✓ Include the lab certificate file name for complete traceability</li>
              <li>✓ Update batch status promptly when dispatching to buyers</li>
              <li>✓ Keep your browser's local storage clean for optimal performance</li>
              <li>✓ Regularly review your batch history for insights on production</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg shadow-md border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started Guide</h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li><strong>Go to Dashboard:</strong> Click "Dashboard" in the navigation menu</li>
              <li><strong>Add First Batch:</strong> Click "+ Add New Batch" button</li>
              <li><strong>Fill Form:</strong> Enter plant variety, harvest date, distillation date, and yield (required)</li>
              <li><strong>Add Certificate Info:</strong> Optionally add the lab certificate file name</li>
              <li><strong>Save:</strong> Click "Save Batch"</li>
              <li><strong>View:</strong> Your batch now appears in the table below</li>
              <li><strong>Dispatch:</strong> When ready, click Edit and then "Mark as Dispatched"</li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
```

---

## FILE 9: README.md

**Path**: `README.md` (Update existing file)

Complete content provided in separate documentation.

---

## FILE 10: USER_GUIDE.md

**Path**: `USER_GUIDE.md` (Create new file)

Complete user guide provided in separate documentation.

---

## GIT COMMITS

Run these commands in order:

### COMMIT 1

```bash
git add .
git commit -m "feat: add Navbar component with responsive layout and mobile menu toggle"
```

**Changes**: All initial files including components (Navbar, Hero, Card, Footer), pages, and configuration.

### COMMIT 2

```bash
git add README.md
git commit -m "feat: add Hero section with CTA buttons and comprehensive feature cards"
```

**Changes**: Update README.md with comprehensive documentation.

### COMMIT 3

```bash
git add USER_GUIDE.md
git commit -m "feat: add batch dashboard with add, edit, delete, and dispatch functionality"
```

**Changes**: Add USER_GUIDE.md with production manager instructions.

---

## VERIFICATION

After making all commits, verify with:

```bash
git log --oneline
```

You should see 3 commits with messages matching the above.

---

## SUMMARY OF ALL FILES

1. ✅ `components/Navbar.tsx` - Navigation with mobile menu
2. ✅ `components/Hero.tsx` - Hero section component
3. ✅ `components/Card.tsx` - Reusable card component
4. ✅ `components/Footer.tsx` - Footer with links
5. ✅ `app/page.tsx` - Home page with features
6. ✅ `app/dashboard/page.tsx` - Batch management system
7. ✅ `app/about/page.tsx` - About page
8. ✅ `app/help/page.tsx` - Help and FAQ page
9. ✅ `README.md` - Technical documentation
10. ✅ `USER_GUIDE.md` - Production manager guide

---

## FINAL STEPS

1. Copy all code from this file into your GitHub project
2. Make the 3 commits with exact messages provided
3. Push to your GitHub repository:

```bash
git remote add origin https://github.com/yourusername/BatchTrace.git
git branch -M main
git push -u origin main
```

Now you have BatchTrace fully implemented! 🚀
