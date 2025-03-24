# Travel Trucks

A React application for browsing and booking camper vans. Users can view available campers, check their details, read reviews, and make bookings.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v19 or higher)
- npm (v10 or higher)

## Technologies

- React 18.3
- Redux Toolkit
- React Router v7
- Formik & Yup for form handling
- React Hot Toast for notifications
- Modern Normalize for CSS reset
- ESLint for code formatting
- React Helmet Async for SEO

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/VOSolyanik/travel-trucks
cd travel-trucks
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server with Vite
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code style

## Project Structure

```
travel-trucks/
├── src/
│   ├── assets/        # Static assets (images, icons, etc.)
│   ├── components/    # Reusable React components
│   ├── constants/     # Application constants
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── redux/         # Redux store, slices, and actions
│   └── utils/         # Utility functions
├── public/            # Public static files
└── index.html         # HTML entry point
```

## SEO Optimization

The project includes several SEO optimizations:

1. Meta Tags
   - Each page has specific meta descriptions and titles
   - OpenGraph tags for better social media sharing
   - Keywords relevant to camper van rentals

2. Search Engine Optimization
   - Semantic HTML structure
   - React Helmet for dynamic meta tag management

3. Performance
   - Code splitting for faster page loads
   - Image optimization
   - Efficient routing with React Router

## Features

- Browse available camper vans
- View detailed information about each camper
- Read and view camper reviews
- Book campers through a form
- Add/remove campers to favorites
- Filter campers by various criteria
- Responsive design
- Form validation
- Toast notifications
- Persistent favorites storage
