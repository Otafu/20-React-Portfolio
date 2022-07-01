import React from "react";

function Navigation(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav className="header-menus">
      <ul className="flex-row mobile-view">
        <li
          title="About Me"
          className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}
        >
          <span onClick={() => setCurrentTab("about")}>About Me</span>
        </li>
        <li
          title="Portfolio"
          className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}
        >
          <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
        </li>
        <li
          title="Contact"
          className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}
        >
          <span onClick={() => setCurrentTab("contact")}>Contact</span>
        </li>
        <li
          title="Resume"
          className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}
        >
          <span onClick={() => setCurrentTab("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
