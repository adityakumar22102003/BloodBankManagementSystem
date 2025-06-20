// src/components/Welcome.js
import React from 'react';
import '../styles/welcome.css';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



export default function Welcome (){


    const navigate = useNavigate();

    
    return (
      <div className="welcome-container">
        <div className="overlay"></div>
        <div className="welcome-content">
          <h1>Donate Blood, Save Lives</h1>
          <p>Your small act today can be someone’s hope tomorrow.</p>
          <div className="btn-group">
            <button
              className="btn login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="btn register-btn"
              onClick={() => navigate("/signup")}
            >
              Register
            </button>
          </div>

          <img
            src="Screenshot 2025-06-18 at 9.35.48 PM.png"
            alt="blood donation"
            className="welcome-image"
          />

          <section className="section">
            <h2>💬 Donor Reviews</h2>
            <div className="reviews">
              {[1, 2, 3].map((card, i) => (
                <div className="review-card" key={i}>
                  <p>"This platform made donating blood easy and impactful!"</p>
                  <div className="review-footer">
                    <span>- User {i + 1}</span>
                    <div className="stars">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar key={idx} color="#FFD700" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>📝 Latest Blogs</h2>
            <div className="blogs">
              <div className="blog-card">💉 Benefits of Regular Donation</div>
              <div className="blog-card">
                🏥 Preparing for Your First Donation
              </div>
              <div className="blog-card">👨‍⚕️ Who Can & Can’t Donate?</div>
            </div>
          </section>

          <section className="section">
            <h2>📍 Upcoming Blood Camps</h2>
            <div className="camps">
              <div className="camp-card">📅 Patna – 15 June</div>
              <div className="camp-card">📅 Delhi – 20 June</div>
              <div className="camp-card">📅 Mumbai – 25 June</div>
            </div>
          </section>
        </div>
      </div>
    );
};


