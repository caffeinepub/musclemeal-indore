import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
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
  const goCalculator = () => {
    setCurrentPage("calculator");
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          data-ocid="nav.home.link"
        >
          <img
            src="/assets/uploads/076f7670-1bb2-11f1-b556-0d2041fa1b6f-1.png"
            alt="Muscle Meals Indore"
            className="h-9 w-auto object-contain"
          />
          <span className="font-display text-base font-black text-gray-900 hidden sm:inline">
            Muscle Meals Indore
          </span>
        </button>

        {/* Desktop nav links (center) */}
        <ul className="hidden md:flex items-center gap-6">
          {currentPage === "home" ? (
            homeNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={link.ocid}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
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
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                ← Home
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
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Recipes
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={goCalculator}
              data-ocid="nav.calculator.link"
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === "calculator"
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Diet Calculator
            </button>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/917724047283?text=Hi%20Muscle%20Meals%20Indore%2C%20I%20want%20to%20order%20a%20meal%20plan!"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="nav.order.button"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          Order Now
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-gray-900 p-2"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu — full-width green overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-primary px-6 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-4">
              {currentPage === "home" ? (
                homeNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid={link.ocid}
                      className="text-base font-semibold text-white hover:text-white/80 transition-colors"
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
                    className="text-base font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    ← Home
                  </button>
                </li>
              )}
              <li>
                <button
                  type="button"
                  onClick={goRecipes}
                  data-ocid="nav.recipes.link"
                  className="text-base font-semibold text-white hover:text-white/80 transition-colors"
                >
                  Recipes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={goCalculator}
                  data-ocid="nav.calculator.link"
                  className="text-base font-semibold text-white hover:text-white/80 transition-colors"
                >
                  Diet Calculator
                </button>
              </li>
            </ul>
            <a
              href="https://wa.me/917724047283?text=Hi%20Muscle%20Meals%20Indore%2C%20I%20want%20to%20order%20a%20meal%20plan!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-lg text-sm font-bold hover:bg-white/90 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              Order Now on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
