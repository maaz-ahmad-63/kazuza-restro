import React, { Suspense, lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Dishes = lazy(() => import('./components/Dishes'));
const About = lazy(() => import('./components/About'));
const LiveMusic = lazy(() => import('./components/LiveMusic'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));
const MobileCtaBar = lazy(() => import('./components/MobileCtaBar'));

function Loading() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', color: '#D4AF37', padding: '50px', textAlign: 'center' }}>
      <p>Loading...</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-luxury-black">
        <Navbar />
        <Hero />
        <Dishes />
        <About />
        <LiveMusic />
        <Testimonials />
        <Location />
        <Footer />
        <MobileCtaBar />
      </div>
    </Suspense>
  );
}

export default App;
