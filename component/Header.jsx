import React, { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    function handleScroll() {
      // Scroll event only true if more than 50px scrolled
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    // Clean
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function scrollToSection(href) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
    setActiveSection(href);
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    //{ name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScroll
          ? "bg-slate-900 backdrop-blur-lg shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-green-400">ALEX</span>
            <span className="text-white">PHAM</span>
            <span className="text-green-400">.</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={` hover:text-gray-400 font-medium relative group ${
                    activeSection === item.href
                      ? "text-green-600"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                  <span className="absolute w-0 h-0.5 bg-green-400 group-hover:w-full -bottom-2 left-0 transition-all duration-300 rounded-full"></span>
                </button>
              );
            })}
          </nav>
          {/* Download CV */}
          <a
            href="/Resume.docx"
            download
            className="hidden md:flex items-center bg-green-400/70 text-white 
            px-6 py-2 rounded-lg hover:bg-green-600 font-medium hover:scale-105 transition-all duration-400"
          >
            Download CV Now
          </a>

          {/* Mobile Menu */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4  bg-slate-800 rounded-lg">
            {navItems.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-4 text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-all duration-400 "
                >
                  {item.name}
                </button>
              );
            })}
            <a
              href="/Resume.docx"
              download
              className="flex items-center bg-green-400/70 text-white  justify-center
            px-6 py-2 rounded-lg hover:bg-green-600 font-medium hover:scale-105 transition-all duration-400"
            >
              Download CV Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
