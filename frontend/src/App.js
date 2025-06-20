
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from './pages/signup';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <>
                <Header />
                <Welcome />
                <Footer />
              </>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
