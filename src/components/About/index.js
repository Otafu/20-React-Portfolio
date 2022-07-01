import React from "react";

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="photo-quote-wrapper">
        <img
          src={require("../../assets/images/recent-photo.jpg")}
          alt="about-me"
          className="photo"
        />
        <div className="quote-wrapper">
          <p className="quote">
            Whether you think you can, or you think you can't – you're right.
            <p className="author">~ Henry Ford</p>
          </p>
        </div>
      </div>

      <div className="about-me-details">
        <p>
          My name is <span className="author-name">Clinton Tarzia</span> and I
          am currently employed as a E-commerce photogrpaher/video editor for
          SalesOne International LLC. SalesOne is a wholesales distributor that
          creates and sells various kinds of jewelry to many retailers. The
          range of jewelry range from high end gold body jewelry to licensed
          pins. I am currently learning how to become a full stack developer and
          will update this portfolio when all my projects are complete, but in
          the meantime please view the current sites I photograph for.
        </p>
      </div>
    </section>
  );
}

export default About;
