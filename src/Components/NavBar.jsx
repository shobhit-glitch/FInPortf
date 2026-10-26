import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { CONTACT } from '../constants';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-neutral-100 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1.5px] shadow-sm shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
              <span className="font-bold text-sm tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                SS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Shobhit Singh
            </span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-wider">
              SDE 1 @ CLAPPIA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/40 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-purple-600/20 text-purple-300 shadow-sm shadow-purple-900/30"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 pr-2 border-r border-neutral-800">
            <a 
              href={CONTACT.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900/80 rounded-lg transition-all"
            >
              <FaGithub className="text-lg" />
            </a>
            <a 
              href={CONTACT.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="p-2 text-neutral-400 hover:text-cyan-400 hover:bg-neutral-900/80 rounded-lg transition-all"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-purple-600/30 transition-all hover:shadow-purple-600/50 active:scale-95"
          >
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between px-2">
            <div className="flex items-center gap-3 text-xl text-neutral-400">
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaGithub />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                <FaLinkedin />
              </a>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 rounded-lg shadow-sm shadow-purple-700/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
