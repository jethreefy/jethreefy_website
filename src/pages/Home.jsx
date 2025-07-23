import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img: "https://cdn.pixabay.com/photo/2019/02/10/09/21/lecture-3986809_1280.jpg",
    title: "Innovating Tomorrow's Technology",
    text: "We build smart, scalable solutions that power digital transformation.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/03/26/11/14/ai-generated-8656542_1280.jpg",
    title: "Empowering Startups & Enterprises Alike",
    text: "From MVPs to enterprise systems — we turn your ideas into reliable tech.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/09/21/02/13/global-business-9062781_1280.jpg",
    title: "End-to-End IT Solutions That Scale",
    text: "Your growth is our mission — we deliver cloud, AI, and web innovations.",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="hero-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                  position: "relative",
                  color: "#fff",
                }}
              >
                <div className="overlay"></div>
                <div className="hero-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                  {/* <div className="hero-buttons">
                    <Link to="/donate" className="btn primary">
                      Donate Now
                    </Link>
                    <Link to="/get-involved" className="btn secondary">
                      Join Us
                    </Link>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services / Features */}
      <section className="features">
        <h2>What We Do</h2>
        <div className="feature-cards">
          <div className="card fade-in">
            {/*  */}
            <img
              src="https://wallpaperbat.com/img/832177-full-stack-wallpaper.jpg"
              alt="Web Development"
            />
            <h3>Web Development</h3>
            <p>Custom, responsive websites using the latest technologies.</p>
          </div>
          <div className="card fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt="Cloud Solutions"
            />
            <h3>Cloud Solutions</h3>
            <p>Deploy scalable apps with AWS, Azure & Google Cloud.</p>
          </div>
          <div className="card fade-in" style={{ animationDelay: "0.4s" }}>
            <img
              src="https://img.freepik.com/premium-photo/3d-digital-marketing_870512-181.jpg?w=2000"
              alt="Digital Marketing"
            />
            <h3>Digital Marketing</h3>
            <p>
              Reach the right audience, boost traffic, and grow your brand with
              SEO, social media, and data-driven digital strategies.
            </p>
          </div>
          <div className="card fade-in" style={{ animationDelay: "0.4s" }}>
            <img
              src="https://adlatworld.com/wp-content/uploads/2020/11/solution-1.jpg"
              alt="Business Solutions"
            />
            <h3>Business Solutions</h3>
            <p>
              Optimize operations with custom ERP, CRM, and automation tools
              tailored to your business goals
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats">
          <div className="stat">
            <h2>100+</h2>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h2>50+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h2>10+</h2>
            <p>Industries Served</p>
          </div>
        </div>
      </section>

      {/* Clients / Partners */}
      <section className="clients">
        <h2>Trusted by Industry Leaders</h2>
        <div className="client-logos">
          <img
            src="https://www.wikidata.org/static/images/icons/wikidatawiki.svg"
            alt="Wikidata"
          />
          <img
            src="https://commons.wikimedia.org/static/images/icons/commonswiki.svg"
            alt="Client 2"
          />
          <img
            src="https://www.mediawiki.org/static/images/icons/mediawikiwiki.svg"
            alt="Client 3"
          />
          <img
            src="https://en.wikivoyage.org/static/images/icons/wikivoyage.svg"
            alt="Client 4"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="testimonial-slider"
        >
          <SwiperSlide>
            <div className="testimonial">
              <p>
                “The team delivered exactly what we needed, and ahead of
                schedule.”
              </p>
              {/* <h4>- Sarah, Product Manager at FintechX</h4> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <p>
                “Reliable, innovative, and professional. Highly recommend their
                services.”
              </p>
              {/* <h4>- Rahul, CTO at Startup India</h4> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Ready to bring your vision to life?</h2>
        <p>Let's build something amazing together.</p>
        <Link to="/contact" className="btn primary">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
