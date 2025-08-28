import React from "react";
import "./Contact.css";
import { IoMdContact } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Have a question, want to work together, or just say hello? Fill the form
        below or connect with me through my social links.
      </p>

      <div className="contact-container">
        {/* Left side - Social links */}
        <div className="contact-info">
          <p>
            <strong>Mobile No:</strong>{" "}
            <a href="tel:+919931343026">+919931343026</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ashishhktr9576@gmail.com">mail@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/ashish-kumar-05912930b"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/AshishSingh9931e"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com
            </a>
          </p>

          <div className="icon-click">
            <a href="tel:+919931343026">
              <IoMdContact className="icon" />
            </a>
            <a href="mailto:ashishhktr9576@gmail.com">
              <MdMarkEmailRead className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/ashish-kumar-05912930b">
              <FiLinkedin className="icon" />
            </a>
            <a href="https://github.com/AshishSingh9931">
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
