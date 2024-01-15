
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';

const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('.section');
  
        sections.forEach((section) => {
          const offsetTop = section.offsetTop - 50; // Adjust offset based on your design
          const offsetBottom = offsetTop + section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            console.log('====================================');
          console.log('Active');
          console.log('====================================');
          console.log('====================================');
          console.log(section);
          console.log('====================================');
            setActiveSection(section.textContent);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // const scrollToSection = (sectionId) => {
    //   scroller.scrollTo(sectionId, {
    //     duration: 800,
    //     delay: 0,
    //     smooth: 'easeInOutQuart',
    //   });
    // };
  
    return (
      <div>
        <nav>
          <ScrollLink to="section1" smooth={true} duration={800}>
            Section 1
          </ScrollLink>
          <ScrollLink to="section2" smooth={true} duration={800}>
            Section 2
          </ScrollLink>
          <ScrollLink to="section3" smooth={true} duration={800}>
            Section 3
          </ScrollLink>
          <ScrollLink to="section4" smooth={true} duration={800}>
            Section 4
          </ScrollLink>
        </nav>
  
        <Element name="section1" className="section">
          Section 1
        </Element>
        <Element name="section2" className="section">
          Section 2
        </Element>
        <Element name="section3" className="section">
          Section 3
        </Element>
        <Element name="section4" className="section">
          Section 4
        </Element>
  
        <div className="spacer"></div>
  
        <div className="active-section">{activeSection}</div>
      </div>
    );
}

export default NavigationBar