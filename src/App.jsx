import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import ScrollToTop from "./components/ScrollToTop";

import { allTreatments } from './data/treatments';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Treatments = lazy(() => import('./pages/Treatments'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Appointment = lazy(() => import('./pages/Appointment'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="treatments/:slug" element={<TreatmentDetail />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="appointment" element={<Appointment />} />

            {allTreatments.map((t) => (
              <Route
                key={t.slug}
                path={t.slug}
                element={<TreatmentDetail />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
