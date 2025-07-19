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
            <img
              src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076533_1280.jpg"
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
              src="https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg"
              alt="Digital"
            />
            <h3>Digital Marketing</h3>
            <p>
              Reach the right audience, boost traffic, and grow your brand with
              SEO, social media, and data-driven digital strategies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
