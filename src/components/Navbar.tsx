import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
        >
          <Coffee
            className={`w-8 h-8 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            } transition-colors`}
          />
          <span
            className={`font-serif text-2xl font-bold tracking-wider ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            } transition-colors`}
          >
            The Roasted Bean
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Menu", "Reviews", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-sm font-medium tracking-wide hover:text-accent transition-colors ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              {item}
            </button>
          ))}
          <Button
            variant={isScrolled ? "default" : "secondary"}
            className="rounded-full px-6 font-semibold"
            onClick={() => scrollTo("contact")}
          >
            Reserve a Table
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={`w-6 h-6 ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t shadow-lg py-4 px-4 flex flex-col gap-4">
          {["Home", "About", "Menu", "Reviews", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left py-2 text-primary font-medium border-b border-border/50"
            >
              {item}
            </button>
          ))}
          <Button
            className="w-full mt-2 rounded-full"
            onClick={() => scrollTo("contact")}
          >
            Reserve a Table
          </Button>
        </div>
      )}
    </nav>
  );
}
