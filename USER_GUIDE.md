# BatchTrace User Guide

## Production Manager's Quick Start Guide

Welcome to BatchTrace! This guide will help you manage your essential oil batch records efficiently.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Adding Batches](#adding-batches)
3. [Viewing and Sorting](#viewing-and-sorting)
4. [Editing Batches](#editing-batches)
5. [Marking Dispatch](#marking-dispatch)
6. [Tips and Best Practices](#tips-and-best-practices)
7. [FAQ](#faq)

## Getting Started

### Accessing BatchTrace

1. Open your web browser
2. Navigate to the BatchTrace application URL (e.g., `http://localhost:3000`)
3. You should see the home page with the BatchTrace logo and "Go to Dashboard" button

### Navigation Menu

The top navigation bar contains:
- **BatchTrace Logo** - Click to return to home page
- **Home** - View application overview
- **Dashboard** - Access batch management
- **About** - Learn about BatchTrace
- **Help** - View FAQs and detailed guidance
- **Mobile Menu** (on small screens) - Tap to expand navigation

## Adding Batches

### Step-by-Step Instructions

1. **Go to Dashboard**
   - Click "Dashboard" in the navigation menu
   - You'll see the batch management interface

2. **Click "Add New Batch"**
   - Look for the blue button labeled "+ Add New Batch"
   - The batch entry form will appear

3. **Fill in Batch Information**

   **Required Fields:**
   - **Plant Variety**: Type the oil plant type (e.g., Lavender, Rose, Jasmine, Eucalyptus)
   - **Harvest Date**: Click the date picker and select the harvest date
   - **Distillation Date**: Select when the oil was distilled
   - **Yield (ml)**: Enter the amount of oil produced (in milliliters)

   **Optional Field:**
   - **Lab Certificate File Name**: If you have a lab certificate, enter its file name for reference (e.g., CERT-2024-001.pdf, LAV-BATCH-2024.pdf)

4. **Save the Batch**
   - Click the green "Save Batch" button
   - The form will close and your batch appears in the table below
   - A success notification should appear

### Example Batch Entry

```
Plant Variety: Lavender
Harvest Date: 2024-06-15
Distillation Date: 2024-06-16
Yield: 350 ml
Lab Certificate File Name: LAV-2024-001.pdf
```

## Viewing and Sorting

### Batch Table Overview

Once you've added batches, they appear in the table with the following columns:

- **Plant Variety** - Oil plant type
- **Harvest Date** - When plants were harvested
- **Yield (ml)** - Amount of oil produced
- **Certificate** - Lab certificate file name (if provided)
- **Status** - Either "Pending" or "Dispatched"
- **Buyer** - Buyer name (if dispatched)
- **Actions** - Edit or Delete buttons

### Sorting Batches

Click on any column header to sort the table:

- **Plant Variety** - Sort alphabetically
- **Harvest Date** - Sort by date (newest first by default)
- **Yield (ml)** - Sort by quantity

Click the column header again to reverse the sort order (ascending/descending).

**Note**: A small arrow (↑ or ↓) next to the column header indicates the current sort direction.

### Summary Statistics

Below the batch table, you'll see three summary boxes:

- **Total Batches** - Total number of all batches
- **Pending** - Batches not yet dispatched
- **Dispatched** - Batches sent to buyers

## Editing Batches

### To Edit a Batch

1. Find the batch in the table
2. Click the blue "Edit" button in the Actions column
3. The batch form will open with existing data
4. Modify any of the batch details
5. Click "Update Batch" to save changes

### What You Can Edit

You can modify:
- Plant Variety
- Harvest Date
- Distillation Date
- Yield
- Lab Certificate File Name
- Buyer Name (if already dispatched)

## Marking Dispatch

### When to Mark as Dispatched

When a batch is sent to a buyer, you should mark it as "Dispatched" to track inventory movement.

### How to Mark as Dispatched

1. Click the blue "Edit" button on the batch
2. In the form, click the orange "Mark as Dispatched" button
3. A dialog will appear asking for the **Buyer Name**
4. Type the buyer's company name or identifier (e.g., "Essential Oils Inc.", "Local Distributor")
5. Click OK
6. The batch status will change to "Dispatched" (shown in green)
7. The buyer name will appear in the table

### Status Color Coding

- **Yellow "Pending"** - Batch created but not yet sent
- **Green "Dispatched"** - Batch has been sent to a buyer

## Tips and Best Practices

### 1. Use Consistent Plant Variety Names
   - Decide on naming convention: "Lavender", "Rose", "Eucalyptus"
   - Be consistent to make sorting and filtering easier
   - Consider using standard botanical names for accuracy

### 2. Record Certificate Information Promptly
   - Add lab certificate file names immediately after receiving them
   - This keeps your records organized and complete
   - Use a naming convention: "PLANT-MONTH-YEAR.pdf" (e.g., "LAV-JUN-2024.pdf")

### 3. Update Dispatch Status Quickly
   - Mark batches as dispatched as soon as they leave your facility
   - This ensures accurate inventory tracking
   - Always record the buyer name for accountability

### 4. Regular Backup Reminder
   - Batch data is stored locally in your browser
   - Consider exporting your data periodically
   - Clear browser cache carefully to avoid data loss

### 5. Quality Checks
   - Review batch dates to ensure accuracy
   - Verify yield quantities match your production records
   - Cross-check lab certificate names with your files

## FAQ

### Q: Where is my data stored?
**A:** All batch data is stored locally in your browser's storage. Your data is not sent to any external server. It persists even after closing the browser.

### Q: What if I accidentally delete a batch?
**A:** The system asks for confirmation before deleting. If deleted, the batch is permanently removed (no undo). Maintain a separate backup if needed.

### Q: Can I sort by status (Pending/Dispatched)?
**A:** Currently, sorting is available for Plant Variety, Harvest Date, and Yield. You can view a visual summary of pending vs. dispatched batches in the statistics section.

### Q: What if I need to add more details about a batch?
**A:** Currently, BatchTrace stores: plant variety, harvest date, distillation date, yield, certificate file name, status, and buyer name. For additional details, maintain a supplementary document or spreadsheet.

### Q: Can I upload lab certificate files?
**A:** No, BatchTrace stores only the certificate file name as a reference. Store actual certificate files in a separate folder on your computer or cloud storage, and reference them by name in the system.

### Q: How do I export my batch data?
**A:** Currently, there's no built-in export feature. As a workaround, take screenshots of the table or open browser developer tools to copy the JSON data from local storage.

### Q: What happens if my browser cache is cleared?
**A:** If you clear browser cache and local storage, your batch data will be lost. We recommend regular backups or using cloud storage for important records.

### Q: Can multiple people access the same data?
**A:** BatchTrace is a single-user, browser-based application. Each browser/device has its own data. For shared team access, consider the cloud version or multi-user setup in the future.

### Q: Is there a way to print batch records?
**A:** You can use your browser's print function (Ctrl+P or Cmd+P) to print the batch table. Adjust print settings for best results.

### Q: What if I need to edit a batch that's already dispatched?
**A:** You can edit any batch at any time. Click Edit, make your changes, and click Update. The dispatch status and buyer information will be preserved.

## Troubleshooting

### Batch Not Saving
- **Issue**: Clicked "Save" but batch didn't appear
- **Solution**: Ensure all required fields (marked with *) are filled in. Check browser console for errors.

### Can't Find a Batch
- **Issue**: Just added a batch but can't find it in the table
- **Solution**: Check the sort order. Your new batch might be at the bottom. Try sorting by Harvest Date.

### Mobile Layout Issues
- **Issue**: Form fields look cramped on phone
- **Solution**: Try rotating your phone to landscape mode for better layout.

### Data Disappeared
- **Issue**: Refreshed page and batches are gone
- **Solution**: Check if you cleared browser cache. Batch data requires local storage to be enabled.

## Support

For additional help:
1. Review the "Help" page in the application
2. Check this user guide
3. Visit the "About" page for application information

## Version

BatchTrace v1.0.0 - Essential Oil Batch Traceability System

---

**Last Updated**: June 2024

**Happy Batch Tracking!** 🌿
