import React from 'react';
import '../styles/eventblog.css';
import eventImg from '../asset/gettyimages-.jpg';
import blogImg from '../asset/gettyimages- (2).jpg';

const cards = [
  {
    type: 'event',
    title: 'Blood Donation Camp – Patna',
    date: '15 June',
    img: eventImg,
    desc: 'Join our upcoming camp and help save lives in Patna.',
    link: '#',
  },
  // {
  //   type: 'event',
  //   title: 'Blood Donation Camp – Delhi',
  //   date: '20 June',
  //   img: eventImg,
  //   desc: 'Be a hero in Delhi! Register for our next camp.',
  //   link: '#',
  // },
  {
    type: 'blog',
    title: 'Benefits of Regular Donation',
    img: blogImg,
    desc: 'Discover the health and social benefits of donating blood regularly.',
    link: '#',
  },
  {
    type: 'blog',
    title: 'Preparing for Your First Donation',
    img: blogImg,
    desc: 'Tips and advice for first-time blood donors.',
    link: '#',
  },
];

export default function EventBlogSection() {
  return (
    <section className="eventblog-section" id="events">
      <h2>Latest Events & Blogs</h2>
      <div className="eventblog-cards">
        {cards.map((card, i) => (
          <div className="eventblog-card" key={i}>
            <img src={card.img} alt={card.title} className="eventblog-img" />
            <div className="eventblog-content">
              <h3>{card.title}</h3>
              {card.date && <span className="eventblog-date">{card.date}</span>}
              <p>{card.desc}</p>
              <a href={card.link} className="btn btn-readmore" aria-label={`Read more about ${card.title}`}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 