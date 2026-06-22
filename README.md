# BatchTrace - Essential Oil Batch Traceability System

## Overview

BatchTrace is a minimal web-based batch traceability management system designed for essential oil producers. It helps track oil batches from harvest through distillation to dispatch, with integrated lab certificate management.

## Features

- **Batch Management**: Add, edit, and delete batch records
- **Batch Tracking**: Track each batch with harvest date, distillation date, plant variety, and yield
- **Lab Certificate Linking**: Associate lab test certificate file names with batches
- **Dispatch Management**: Mark batches as dispatched and record buyer information
- **Sortable Records**: Sort batches by plant variety, harvest date, or yield
- **Summary Statistics**: View total, pending, and dispatched batch counts
- **Responsive Design**: Fully responsive interface works on desktop, tablet, and mobile
- **Data Persistence**: All records stored in browser's local storage

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Storage**: Browser Local Storage (JSON)
- **No Backend Required**: Standalone web application

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Navigate to the project directory
cd batch-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## Usage Guide

### Adding a Batch

1. Navigate to **Dashboard** from the navigation menu
2. Click **+ Add New Batch**
3. Fill in the required fields:
   - **Plant Variety**: e.g., Lavender, Rose, Eucalyptus
   - **Harvest Date**: Date when plants were harvested
   - **Distillation Date**: Date when oil was distilled
   - **Yield (ml)**: Amount of oil produced
   - **Lab Certificate File Name** (optional): Reference name for certificate file
4. Click **Save Batch**

### Viewing Batches

- All batches appear in a sortable table on the Dashboard
- Click on column headers to sort by Plant Variety, Harvest Date, or Yield
- View batch status (Pending or Dispatched) at a glance
- Summary statistics shown below the table

### Editing a Batch

1. Click the **Edit** button on any batch row
2. Modify the batch details
3. Click **Update Batch** to save changes

### Marking Batch as Dispatched

1. Click the **Edit** button on a batch
2. Click **Mark as Dispatched**
3. Enter the buyer name in the prompt
4. The batch status changes to "Dispatched"

### Deleting a Batch

1. Click the **Delete** button on any batch row
2. Confirm deletion when prompted

## Project Structure

```
batch-app/
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── dashboard/
│   │   └── page.tsx       # Dashboard page
│   ├── about/
│   │   └── page.tsx       # About page
│   └── help/
│       └── page.tsx       # Help page
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section component
│   ├── Card.tsx           # Card component
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind configuration
└── next.config.ts         # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Any modern browser supporting ES2020

## License

MIT
