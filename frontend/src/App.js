import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EventBlogSection from './components/EventBlogSection';
import DonationRoadmap from './components/DonationRoadmap';
import Highlights from './components/Highlights';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/Login';
import BloodCamp from './pages/BloodCamp'

function App() {
  return (
   
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/camps" element={<BloodCamp />} />
        
        <Route
          path="/"
          element={
          HEAD
             <>
                 <HeroSection />
                  <EventBlogSection />
                 <DonationRoadmap />
                 <Highlights />
                 <ContactSection />
              </>

              <>
                <Header />
                <Welcome />
                <Footer />
              </>

          }
        />
      </Routes>
      <Footer />
    </Router>
    </>
   
  );
}

export default App;
