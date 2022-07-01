import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/otafu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/github-logo.png")}
            alt="Github"
            title="Clinton Tarzia"
            className="logo"
          ></img>
        </a>
      </div>
      <div class="social-spacer"></div>
      <div>
        <a
          href="https://www.linkedin.com/in/clinton-tarzia-5272a322b//"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/linkedin-logo.png")}
            alt="LinkedIn"
            title="Clinton Tarzia"
            className="logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
