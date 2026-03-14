import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Page } from "../App";
import { WhatsAppIcon } from "./WhatsAppIcon";

type NavbarProps = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
};

const homeNavLinks = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "Plans", href: "#plans", ocid: "nav.plans.link" },
  { label: "How It Works", href: "#how-it-works", ocid: "nav.howitworks.link" },
  { label: "Results", href: "#testimonials", ocid: "nav.results.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggle = () => setMobileOpen((p) => !p);

  const goHome = () => {
    setCurrentPage("home");
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goRecipes = () => {
    setCurrentPage("recipes");
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={goHome}
          className="font-display text-xl font-bold text-gray-900 hover:text-primary transition-colors"
          data-ocid="nav.home.link"
        >
          Muscle Meals Indore
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {currentPage === "home" ? (
            homeNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={link.ocid}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))
          ) : (
            <li>
              <button
                type="button"
                onClick={goHome}
                data-ocid="nav.back.link"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
              >
                ← Back to Home
              </button>
            </li>
          )}
          <li>
            <button
              type="button"
              onClick={goRecipes}
              data-ocid="nav.recipes.link"
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === "recipes"
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Recipes
            </button>
          </li>
        </ul>

        <a
          href="https://wa.me/917724047283?text=Hi%20Muscle%20Meals%20Indore%2C%20I%20want%20a%20Free%20Trial!"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="nav.order.button"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          Order Now
        </a>

        <button
          type="button"
          className="md:hidden text-gray-900 p-2"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pb-4 shadow-sm"
          >
            <ul className="flex flex-col gap-4 pt-2">
              {currentPage === "home" ? (
                homeNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid={link.ocid}
                      className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))
              ) : (
                <li>
                  <button
                    type="button"
                    onClick={goHome}
                    data-ocid="nav.back.link"
                    className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
                  >
                    ← Back to Home
                  </button>
                </li>
              )}
              <li>
                <button
                  type="button"
                  onClick={goRecipes}
                  data-ocid="nav.recipes.link"
                  className={`text-sm font-medium transition-colors ${
                    currentPage === "recipes"
                      ? "text-primary font-semibold"
                      : "text-gray-800 hover:text-primary"
                  }`}
                >
                  Recipes
                </button>
              </li>
            </ul>
            <a
              href="https://wa.me/917724047283?text=Hi%20Muscle%20Meals%20Indore%2C%20I%20want%20a%20Free%20Trial!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-full text-sm font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              Start Free Trial
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
