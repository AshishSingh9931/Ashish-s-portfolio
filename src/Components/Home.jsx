import React from "react";
import "./Home.css";
// import profilePic from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <h2>Hello, I'm</h2>
        <h1>Ashish Kumar</h1>

        <ReactTyped
          strings={[
            "Software Developer",
            "Programmer",
            "Full Stack Web Developer",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />

        <p>
          I am a passionate Full Stack Web Developer with a strong interest in
          building modern, user-friendly, and scalable web applications.
          Currently, I am pursuing my Master of Computer Applications (MCA) in
          online mode and actively looking for internship or job opportunities
          to enhance my skills and contribute to innovative projects.
        </p>

        <div className="buttons">
          <a href="/Resume.pdf" download className="btn">
            <FaCloudDownloadAlt className="btn-icon" />
            Download Resume
          </a>

          <a
            href="https://github.com/AshishSingh9931"
            download
            className=" btn btn-secondary"
          >
            <FaGithubAlt className="btn-icon" />
            GitHub
          </a>
        </div>
      </div>

      <div className="home-right">
        <img src="/MyImg.jpeg" alt="Ashishh Kumar" />
      </div>
    </section>
  );
};

export default Home;
