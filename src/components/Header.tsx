import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const sections = ["inicio", "sobre", "projetos", "contato"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-gradient-to-r from-black/80 via-[#151516]/90 to-black/80 shadow-md border-b border-yellow-400/10"
          : "bg-gradient-to-r from-black/60 via-[#151516]/70 to-black/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-yellow-400 font-bold text-lg tracking-wide">
          Gabriel Franco
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {sections.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth
              duration={500}
              offset={-80}
              className={`relative cursor-pointer transition-colors duration-300 group ${
                activeSection === item ? "text-yellow-400" : "text-white"
              }`}
            >
              <span className="relative">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </ScrollLink>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 group"
          aria-label="Abrir menu"
        >
          <span
            className={`h-0.5 w-6 bg-yellow-400 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-yellow-400 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-yellow-400 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden px-6 pb-4 pt-2 space-y-2 bg-black/90 border-t border-yellow-400/10 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 max-h-[300px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {sections.map((item) => (
          <ScrollLink
            key={item}
            to={item}
            smooth
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className={`block text-sm transition-colors duration-200 ${
              activeSection === item ? "text-yellow-400" : "text-white"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </ScrollLink>
        ))}
      </div>
    </header>
  );
}
