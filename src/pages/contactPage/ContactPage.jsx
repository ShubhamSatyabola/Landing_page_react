import { Icon } from "@iconify/react";

import Contact from "../../components/contactForm/Contact";
import { Footer } from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar"
import "./contactPage.css"


const ContactPage = () => {
  return (
    <>
      <nav className="navbarContainer">
        <Navbar />
      </nav>
      <section className="formContainer">
        <Contact />
      </section>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-left-content">
              <div className="contact-left-text">
                <h1>Get in touch with Upwealth magazine</h1>
              </div>
              <div className="contact-left-description">
                <p>
                  If you have any questions regarding subscriptions, or how to
                  feature or advertise in our magazine, don't hesitate to get in
                  touch
                </p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-buttons">
              <div className="card">
                <Icon icon="mingcute:chat-1-line" />
                <p>Chat With Us</p>
              </div>
              <div className="card">
                <Icon icon="mage:phone-call-fill" />
                <p>Call Us</p>
              </div>
              <div className="card">
                <Icon icon="line-md:email" />
                <p>Send an Email</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default ContactPage