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
