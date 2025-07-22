import "./Contact.css";

const Contact = () => {
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
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        ś{/* Contact Info */}
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
