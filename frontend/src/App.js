import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EventBlogSection from './components/EventBlogSection';
import DonationRoadmap from './components/DonationRoadmap';
import Highlights from './components/Highlights';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from './pages/signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <EventBlogSection />
              <DonationRoadmap />
              <Highlights />
              <ContactSection />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
