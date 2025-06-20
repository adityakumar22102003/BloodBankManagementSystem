
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
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
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/camps" element={<BloodCamp />} />
        
        <Route
          path="/"
          element={
              <>
                <Header />
                <Welcome />
                <Footer />
              </>
          }
        />
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
