import { Suspense, lazy } from 'react';

import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Header from '@components/Header/Header';
import Loader from '@components/Loader/Loader';

import './App.module.css';

// Lazy loading for pages
const HomePage = lazy(() => import('@pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('@pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() => import('@pages/CamperDetailsPage/CamperDetailsPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/NotFoundPage'));

// Components that are rendered within CamperDetailsPage
const CamperFeatures = lazy(() => import('@components/CamperFeatures/CamperFeatures'));
const CamperReviews = lazy(() => import('@components/CamperReviews/CamperReviews'));


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
            <Route path="/" element={
              <Suspense fallback={<Loader />}><HomePage /></Suspense>
            } />
            <Route path="/catalog" element={
              <Suspense fallback={<Loader />}><CatalogPage /></Suspense>
            } />
            <Route path="/catalog/:camperId" element={
              <Suspense fallback={<Loader />}><CamperDetailsPage /></Suspense>
            }>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={
                <Suspense fallback={<Loader />}><CamperFeatures /></Suspense>
              } />
              <Route path="reviews" element={
                <Suspense fallback={<Loader />}><CamperReviews /></Suspense>
              } />
            </Route>
            <Route path="*" element={
              <Suspense fallback={<Loader />}><NotFoundPage /></Suspense>
            } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
