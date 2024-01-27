import React, { useContext, useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { AppContext } from "../../../Context/Context";
import "./Sidebar.css";
// import { Link } from 'react-router-dom'; // If using React Router

const Sidebar = ({user}) => {
  const { isOpen, isMobile, toggleSidebar } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("aboutMe");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 250; // Adjust offset based on your design
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    toggleSidebar();
    scroller.scrollTo(sectionId, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      {(isMobile && isOpen) && <div onClick={toggleSidebar} className="navbarHeaderBar"></div>}
      <div className={`sidebar panel ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <ScrollLink
                className={`${activeSection === "aboutMe" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "aboutMe")}
                href="#aboutMe"
                to="section2"
                smooth={true}
                duration={800}
              >
                About Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "skills" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "skills")}
                href="#skills"
                to="skills"
                smooth={true}
                duration={800}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "experience" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "experience")}
                href="#experience"
                to="experience"
                smooth={true}
                duration={800}
              >
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "education" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "education")}
                href="#education"
                to="education"
                smooth={true}
                duration={800}
              >
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "feedback" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "feedback")}
                href="#feedback"
                to="feedback"
                smooth={true}
                duration={800}
              >
                Feedback
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "contactMe" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "contactMe")}
                href="#contactMe"
                to="section3"
                smooth={true}
                duration={800}
              >
                Contact Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "projects" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "projects")}
                href="#projects"
                to="projects"
                smooth={true}
                duration={800}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "certifications" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "certifications")}
                href="#certifications"
                to="certifications"
                smooth={true}
                duration={800}
              >
                Certifications
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className={`${activeSection === "otherwork" ? "active" : ""}`}
                onClick={scrollToSection.bind(this, "otherwork")}
                href="#otherwork"
                to="otherwork"
                smooth={true}
                duration={800}
              >
                Other Works
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
