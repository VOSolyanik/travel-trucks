import { Suspense } from 'react';

import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import CamperDetailsPage from '@pages/CamperDetailsPage/CamperDetailsPage';
import CatalogPage from '@pages/CatalogPage/CatalogPage';
import HomePage from '@pages/HomePage/HomePage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';

import CamperFeatures from '@components/CamperFeatures/CamperFeatures';
import CamperReviews from '@components/CamperReviews/CamperReviews';
import Header from '@components/Header/Header';
import Loader from '@components/Loader/Loader';

import './App.module.css';

const App = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Find and book the perfect camper van for your next adventure. Browse our selection of fully-equipped campers, read reviews, and book your dream vacation vehicle." />
        <meta name="keywords" content="camper van, RV rental, travel trucks, camping, outdoor adventure, van life" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://travel-trucks.com" />
      </Helmet>
      <BrowserRouter>
        <Header />
        <Toaster position="top-right" />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:camperId" element={<CamperDetailsPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
