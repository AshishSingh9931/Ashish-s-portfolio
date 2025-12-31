import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="projects-intro">
        Here are some of my featured projects that showcase my skills and
        passion for building modern and responsive web applications. Each
        project reflects my ability to solve real-world problems and create
        interactive solutions.
      </p>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="/Portfolio.jpg"
              alt="Portfolio Website"
              className="project-img"
            />
          </div>
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built using React.js showcasing my
            skills, education, and projects.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/AshishSingh9931/Ashish-s-portfolio"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href="https://portfolio-nu-liart-93.vercel.app"

              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image">
            <div className="image-placeholder">
              <img
              src="/logo2.png"
              alt="Grocery Website"
              className="project-img"
              />
           </div>
          </div>
          <h3>Grocery App</h3>
          <p>
           Fresh groceries delivered fast, easy shopping with smooth cheakout system.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/AshishSingh9931/my-grocery"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href="https://my-grocery-eight.vercel.app"

              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-image">
            <div className="image-placeholder">
              <img
              src="/Mybook.jpeg"
              alt="bookstore Website"
              className="project-img"
              />
           </div>
          </div>
          <h3>Book Store</h3>
          <p>
           We sell a wide range of books to inspire, educate, and entertain readers.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/AshishSingh9931/socialmedia"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href="https://ecommerce-site-flax.vercel.app"

              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-image">
            <div className="image-placeholder">
              <img
              src="/Mybook.jpeg"
              alt="Minisocial media Website"
              className="project-img"
              />
           </div>
          </div>
          <h3>Social media</h3>
          <p>
           We sell a wide range of books to inspire, educate, and entertain readers.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/AshishSingh9931/socialmedia"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href="https://socialmedia-nu-five.vercel.app/"

              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;













