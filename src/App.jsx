// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SocialIcons from "./components/SocialIcons";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Services"));
const GetInvolved = lazy(() => import("./pages/Contact"));
// const Contact = lazy(() => import("./pages/Contact"));
// const DonateNow = lazy(() => import("./pages/DonateNow"));
// const Signup = lazy(() => import("./components/Signup"));

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <SocialIcons /> */}

      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<GetInvolved />} />
          {/* <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Suspense>

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
