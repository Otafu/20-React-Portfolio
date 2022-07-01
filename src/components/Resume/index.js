import React from "react";

function Resume() {
  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Resume</h1>
      </div>
      <div className="resume-section">
        <a
          href={require("../../assets/files/resume.jpg")}
          download
          title="Downloadable resume"
        >
          Download my Resume
        </a>
      </div>
      <div>
        <h5>Front-End Proficiencies</h5>
        <ol>
          <li>Bootstrap</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Responsive design</li>
          <li>JQuery</li>
          <li>Version control</li>
        </ol>
        <br></br>
        <h5>Back-End Proficiencies</h5>
        <ol>
          <li>APIs</li>
          <li>Express</li>
          <li>Model View Controller (MVC)</li>
          <li>NodeJS</li>
          <li>Progressive Web Applications (PWA)</li>
          <li>REST</li>
        </ol>
        <br></br>
        <h5>Dev Tool Proficiencies</h5>
        <ol>
          <li>Git</li>
          <li>Jest</li>
          <li>Webpack</li>
          <li>npm</li>
        </ol>
        <br></br>
        <h5>Database Proficiencies</h5>
        <ol>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>NoSQL</li>
          <li>Sequelize</li>
        </ol>
        <br></br>
        <h5>Graphics Proficiencies</h5>
        <ol>
          <li>Photoshop</li>
          <li>Jewelry Photography</li>
          <li>Adobe Indesign</li>
        </ol>
        <br></br>
      </div>
    </section>
  );
}

export default Resume;
