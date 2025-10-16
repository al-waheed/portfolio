import { Menu, X, Home } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentPage: string;
}

export default function Navigation({
  onNavigate,
  currentPage,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate("home")}
            className="hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="portfolio/profile_pic.PNG"
                alt="profile_pic"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </button>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-center gap-2 transition-colors duration-300 font-medium relative group ${
                  currentPage === item.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item.icon && item.icon}
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    currentPage === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-center gap-2 w-full text-left transition-colors duration-300 font-medium py-2 ${
                  currentPage === item.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item.icon && item.icon}
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
