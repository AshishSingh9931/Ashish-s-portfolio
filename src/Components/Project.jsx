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
              href="portfolio-nu-liart-93.vercel.app"
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
            <div className="image-placeholder">Image</div>
          </div>
          <h3>Weather App</h3>
          <p>
            A weather forecasting app using APIs to show real-time weather
            updates.
          </p>
          <div className="project-buttons">
            <a href="#" className="btn">
              View Code
            </a>
            <a href="#" className="btn btn-secondary">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-image">
            <div className="image-placeholder">Image</div>
          </div>
          <h3>Todo App</h3>
          <p>
            A simple and responsive Todo app with CRUD features to manage daily
            tasks.
          </p>
          <div className="project-buttons">
            <a href="#" className="btn">
              View Code
            </a>
            <a href="#" className="btn btn-secondary">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

