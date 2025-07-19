import React from "react";
import "./Service.css";

const Services = () => {
  return (
    <div className="services-page">
      <header className="about-hero">
        <h1>Our Services</h1>
        <p>Delivering innovative solutions to help you scale your business.</p>
      </header>

      <section className="services-grid">
        <div className="service-card">
          <img
            src="https://img.freepik.com/premium-photo/3d-digital-marketing_870512-181.jpg?w=2000"
            alt="Digital Marketing"
          />
          <h3>Digital Marketing</h3>
          <p>
            Boost your brand visibility with result-driven strategies in SEO,
            social media, paid ads, and content marketing.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://wallpaperbat.com/img/832177-full-stack-wallpaper.jpg"
            alt="Web Development"
          />
          <h3>Web Development</h3>
          <p>
            Build high-performance, responsive websites and web apps with React,
            Node.js, and modern frameworks.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.piZObBi87zmARlr29uQ23AHaGV?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Cloud Solutions"
          />
          <h3>Cloud Solutions</h3>
          <p>
            Scale efficiently with secure, reliable cloud infrastructure using
            AWS, Azure, or Google Cloud.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://adlatworld.com/wp-content/uploads/2020/11/solution-1.jpg"
            alt="Business Solutions"
          />
          <h3>Business Solutions</h3>
          <p>
            Optimize operations with custom ERP, CRM, and automation tools
            tailored to your business goals.
          </p>
        </div>
      </section>

      {/* <section className="ai-section">
        <h2>Meet Our AI Partner</h2>
        <div className="ai-card">
          <img src="/images/chatgpt.png" alt="ChatGPT" />
          <div>
            <h3>ChatGPT – Your Friendly AI Assistant</h3>
            <p>
              I'm ChatGPT, built by OpenAI. I help startups generate content,
              write code, brainstorm features, automate workflows, and more. If
              you're integrating AI into your product or just want some tech
              magic — I'm here to help!
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
