import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Media from "./components/Media";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CTA from "./components/CTA";
import BookDemoPage from "./pages/BookDemoPage";
import Bipul from "./pages/Bipul";

<Route path="/bipul" element={<Bipul />} />


// import "./styles/custom.css";

// Main Landing Page Component
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Media />
        <Stats />
        <FAQ />
         <CTA />   {/* 👈 ADD HERE */}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Authentication Pages */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bipul" element={<Bipul />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/book-demo" element={<BookDemoPage />} />

      </Routes>
    </Router>
  );
}