import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Jewelry Brands",
      description: "Licensed Jewelry",
      image: "jewelrybrands.png",
      technologies: [
        "Adobe Creative Products",
        "HTML5/CSS",
        "JavaScript",
        "Jquery",
        "PHP",
        "Magento",
        "Wordpress 4.9.5",
        "Cloudflare",
      ],
      deployed: "https://jewelrybrands.shop",
    },
    {
      name: "Invictus",
      description: "High End Body Jewelry",
      image: "invictus.png",
      technologies: [
        "Adobe Creative Products",
        "HTML5/CSS",
        "JavaScript",
        "Jquery",
        "PHP",
        "Magento",
        "Wordpress 4.9.5",
        "Cloudflare",
      ],
      deployed: "https://invictusbodyjewelry.com/en/",
    },
    {
      name: "Inox",
      description: "Men's Jewelry",
      image: "inox.png",
      technologies: [
        "Adobe Creative Products",
        "HTML5/CSS",
        "JavaScript",
        "Jquery",
        "PHP",
        "Magento",
        "Wordpress 4.9.5",
        "Cloudflare",
      ],
      deployed: "https://www.inox-us.com",
    },
    {
      name: "Bodyvibe",
      description: "Salesone Wholesaler Jewelry",
      image: "bodyvibe.png",
      technologies: [
        "Adobe Creative Products",
        "HTML5/CSS",
        "JavaScript",
        "Jquery",
        "PHP",
        "Magento",
        "Cloudflare",
      ],
      deployed: "https://www.bodyvibe.com/",
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
