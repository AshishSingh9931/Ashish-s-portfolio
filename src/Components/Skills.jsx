import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Technical Skills</h2>

      {/* Paragraph */}
      <p className="skills-intro">
        I have a strong foundation in web development and programming, with
        experience in both frontend and backend technologies. My focus is on
        building clean, scalable, and user-friendly applications. Along with my
        MCA studies, I constantly learn and explore new tools and languages to
        improve my technical expertise.
      </p>

      <div className="skills-container">
        {/* Frontend */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <ul>
            <li>⚛️ React.js</li>
            <li>🎨 HTML5 & CSS3</li>
            <li>💡 JavaScript (ES6+)</li>
            <li>📱 Responsive Design</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skills-category">
          <h3>Backend</h3>
          <ul>
            <li>☕ Java (Spring Boot Basics)</li>
            <li>🔗 REST APIs</li>
            <li>⚙️ Node.js Basics</li>
          </ul>
        </div>

        {/* Database */}
        <div className="skills-category">
          <h3>Database</h3>
          <ul>
            <li>🗄️ MySQL</li>
            <li>📦 MongoDB (Basics)</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h3>Tools & Others</h3>
          <ul>
            <li>🖥️ Git & GitHub</li>
            <li>⚡ VS Code</li>
            <li>☁️ Basics of Cloud Concepts</li>
          </ul>
        </div>

        {/* Programming Languages */}
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>🔹 C</li>
            <li>🔹 C++</li>
            <li>🔹 Java</li>
            <li>🔹 Python</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
