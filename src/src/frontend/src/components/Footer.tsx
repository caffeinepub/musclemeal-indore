import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "musclemeal.in";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer id="contact" className="bg-hf-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-2xl font-black text-white mb-2">
              MuscleMeal
            </div>
            <p className="text-sm font-bold mb-1" style={{ color: "#6ee8a0" }}>
              Indore
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Fresh Food. Real Results. Only Indore.
            </p>
          </div>
          <div>
            <h4 className="font-display font-black text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Delivery Areas", href: "#delivery" },
                { label: "Plans", href: "#plans" },
                { label: "Recipes", href: "#recipes" },
                { label: "Articles", href: "#articles" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-black text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-white font-bold">Ayush Manik</p>
              <a
                href="tel:7724047283"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Phone size={14} />
                7724047283
              </a>
              <a
                href="mailto:Manikayush07@gmail.com"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Mail size={14} />
                Manikayush07@gmail.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Instagram size={14} />
                @musclemeal_indore
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {year} MuscleMeal Indore. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white hover:underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
