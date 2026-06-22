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
