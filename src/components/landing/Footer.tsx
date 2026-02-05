import { motion } from "framer-motion";
import { Flower, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Flower className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl">Gustafson Floral</h3>
                <p className="text-primary-foreground/60 text-sm">
                  Since 2003
                </p>
              </div>
            </div>
            <p className="font-body text-primary-foreground/70 max-w-md mb-6 leading-relaxed">
              Bringing beauty and joy through handcrafted floral arrangements. 
              Every bouquet tells a story of love, care, and the timeless elegance of nature.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 font-body">
              {["Shop All", "Bouquets", "Weddings", "Events", "Gift Cards", "About Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Blossom Lane<br />
                  Garden City, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@gustafsonfloral.com"
                  className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  hello@gustafsonfloral.com
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/50 mb-2">Hours</p>
              <p className="text-primary-foreground/70 text-sm">
                Mon-Sat: 8am - 7pm<br />
                Sun: 10am - 5pm
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p className="font-body">
              © {currentYear} Gustafson Floral. All rights reserved.
            </p>
            <div className="flex gap-6 font-body">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;