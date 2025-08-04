import { Link } from "react-router-dom";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("myzpdegj");
  if (state.succeeded) {
    return (
      <div className="success-message">
        <h2>✅ Thank you for contacting us!</h2>
        <p>We’ve received your message and will get back to you shortly.</p>
        <Link to="/" className="back-home-button">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="about-hero">
        <h1>Get in Touch</h1>
        <p>Have a question or project in mind? We'd love to hear from you!</p>
      </header>

      {/* Main Contact Section */}
      <section className="contact-section">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/myzpdegj"
            method="POST"
          >
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="mission-box ">
            <h2>Contact Info</h2>
            {/* <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Startup Lane, Tech City, World</p>
            </div> */}
            <div className="info-box">
              <i className="fas fa-phone-alt"></i>
              <p>0866-2945772</p>
            </div>
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <p>info@jethreefy.com</p>
            </div>
          </div>
          <br />
          <div className="mission-box ">
            <h2>Address</h2>
            <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <p>#202,Saloni Towers,Balaji Avenue</p>
            </div>
            <div className="info-box">
              <i className="fas fa-phone-alt"></i>
              <p>Near DonBoscoSchool, Guntupalli,Vijayawada</p>
            </div>
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <p>Andhra Pradesh,521241</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
