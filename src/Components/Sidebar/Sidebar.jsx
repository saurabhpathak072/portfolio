import React, { useContext, useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { AppContext } from "../../Context/Context";
import "./Sidebar.css";
// import { Link } from 'react-router-dom'; // If using React Router

const Sidebar = () => {
    const {isOpen} = useContext(AppContext);
//   const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('aboutMe');

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
       
      scroller.scrollTo(sectionId, {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    };

  return (
    <>
    <div className="navbarHeaderBar">

      {/* <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button> */}
    </div>
      <div className={`sidebar panel ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            {/* <li>
              <ScrollLink className={`${activeSection === 'home' ? 'active':""}`} onClick={scrollToSection.bind(this,'home')} href="#home" to="section1" smooth={true} duration={800}>
                Home
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink className={`${activeSection === 'aboutMe' ? 'active':""}`} onClick={scrollToSection.bind(this,'aboutMe')} href="#aboutMe" to="section2" smooth={true} duration={800}>
                About Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink className={`${activeSection === 'skills' ? 'active':""}`}  onClick={scrollToSection.bind(this,'skills')} href="#skills" to="skills" smooth={true} duration={800}>
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink className={`${activeSection === 'contactMe' ? 'active':""}`}  onClick={scrollToSection.bind(this,'contactMe')} href="#contactMe" to="section3" smooth={true} duration={800}>
                Contact Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink className={`${activeSection === 'section4' ? 'active':""}`}  onClick={scrollToSection.bind(this,'section4')} href="#section4" to="section4" smooth={true} duration={800}>
              section4 
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
