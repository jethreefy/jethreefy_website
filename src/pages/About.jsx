// src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are a passionate team of innovators building next-gen digital
          solutions to empower businesses worldwide.
        </p>
      </section>

      {/* Company Info */}
      <section className="about-company">
        <h2>Who We Are</h2>
        <p>
          Founded in 2024, StartupTech is a fast-growing tech company focused on
          delivering modern web, cloud, and AI solutions. We believe in
          technology that transforms industries and improves lives. With a
          global mindset and user-centric design, we aim to build products that
          are powerful, scalable, and future-proof.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="about-mission">
        <div className="mission-box">
          <h3>🚀 Our Mission</h3>
          <p>
            To empower startups and enterprises through intuitive, intelligent,
            and impactful digital experiences.
          </p>
        </div>
        <div className="mission-box">
          <h3>🌍 Our Vision</h3>
          <p>
            To be a global leader in technology innovation, delivering solutions
            that shape the future.
          </p>
        </div>
      </section>

      {/* Our Team (Dummy Members) */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            {/* <img src="/images/team2.j pg" alt="Raj" /> */}
            <h4>Manohar</h4>
            <p>Lead Engineer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team3.jpg" alt="Maria" /> */}
            <h4>Ramesh</h4>
            <p>UX Designer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Kalyan</h4>
            <p>UI Developer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Nitya</h4>
            <p>BE Developer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Ravikanth</h4>
            <p>Software Engineer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Krishna V</h4>
            <p>Software Engineer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Lakshman V</h4>
            <p>Software Engineer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Swathi G</h4>
            <p>Software Engineer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Sudhakar N</h4>
            <p>Administrative officer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Vasantha G</h4>
            <p>FE Developer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Rahaman SK</h4>
            <p>FE Developer</p>
          </div>
          <div className="team-card">
            {/* <img src="/images/team4.jpg" alt="David" /> */}
            <h4>Rajesh N</h4>
            <p>Database Administrator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
