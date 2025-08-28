import React from "react";
import "./Education.css";
import { FaUserGraduate } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      {/* Academic Journey Section */}
      <div className="academic-journey">
        <h2 className="section-title">Academic Journey</h2>
        <p>
          I recently completed my Bachelor's in Computer Applications (BCA),
          where I built a strong foundation in programming and web technologies.
          Currently, I have enrolled in an MCA program in online mode to further
          enhance my skills and stay updated with the latest trends in full
          stack development. My goal is to apply this knowledge to real-world
          projects and grow as a professional in the IT industry.
        </p>
      </div>
      <div className="education-container">
        <div className="education-item">
          <h3>
            <FaUserGraduate />
            MCA (Master of Computer Applications)
          </h3>
          <h4 className="university">Sikkim Manipal University</h4>
          <span className="year">2025 - 2027</span>
          <span className="cgpa">CGPA: Present</span>
          <p>
            I have enrolled in the Master of Computer Applications (MCA) program
            at Sikkim Manipal University to further deepen my knowledge in
            computer science and advanced software development. This program is
            helping me strengthen my understanding of core subjects such as data
            structures, algorithms, software engineering, and emerging
            technologies. Pursuing MCA is a strategic step in my academic and
            professional journey, as it allows me to enhance both my technical
            and problem-solving skills while staying updated with the latest
            trends in the IT industry..
          </p>
        </div>

        <div className="education-item">
          <h3>
            <FaUserGraduate />
            Bachelor’s Degree in Computer Applications (BCA)
          </h3>
          <h4 className="university">D.S. college , Purnea University</h4>
          <span className="year">2021 - 2024</span>
          <span className="cgpa">CGPA: 8.6/10</span>
          <p>
            I have successfully completed my Bachelor of Computer Applications
            (BCA), which provided me with a strong foundation in computer
            science and programming. Throughout the course, I gained hands-on
            experience in various technologies such as web development, database
            management, data structures, and object-oriented programming. This
            academic journey not only enhanced my technical skills but also
            improved my problem-solving abilities and logical thinking. My BCA
            degree has played a crucial role in shaping my interest in full
            stack development and prepared me for advanced studies and
            real-world software development challenges.
          </p>
        </div>

        <div className="education-item">
          <h3>
            <FaGraduationCap />
            Senior Secondary (XII)
          </h3>
          <h4 className="university">+2 High School Sujapur Katihar (BSEB)</h4>
          <span className="year">2019 - 2021</span>
          <span className="cgpa">CGPA: 7.5/10</span>
          <p>
            I completed my Senior Secondary education (Class 12th) with a focus
            on the Science stream, which included subjects like Physics,
            Chemistry, and Mathematics. This academic foundation not only
            enhanced my analytical and problem-solving abilities but also
            sparked my curiosity for technology and innovation. Studying science
            helped me develop a structured approach to learning, and it played a
            key role in shaping my interest in the field of computer
            applications and software development.
          </p>
        </div>

        <div className="education-item">
          <h3>
            <FaGraduationCap />
            Secondary (X)
          </h3>
          <h4 className="university">
            Jageshwar High School guruBazar Katihar (BSEB)
          </h4>
          <span className="year">2017 - 2019</span>
          <span className="cgpa">CGPA: 6.8/10</span>
          <p>
            I completed my Secondary Education (Class 10th) with a strong
            academic performance, which laid the foundation for my further
            studies. During this phase, I developed essential skills such as
            discipline, time management, and a strong work ethic. It was also
            the stage where I began exploring my interests in technology and
            logical reasoning, which later guided my decision to pursue the
            Science stream in higher secondary education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
