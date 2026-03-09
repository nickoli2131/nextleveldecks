import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground px-6 py-12 text-primary-foreground/70">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div>
            <img src={logo} alt="Next Level Decks and Fences" className="h-10" />
            <p className="mt-2 text-sm">Premium Deck & Cedar Fence Builders</p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="/#about" className="hover:text-primary-foreground">About</a>
            <a href="/services" className="hover:text-primary-foreground">Services</a>
            <a href="/#gallery" className="hover:text-primary-foreground">Gallery</a>
            <a href="/#contact" className="hover:text-primary-foreground">Contact</a>
          </div>

          <div className="space-y-2 text-sm">
            <a href="tel:+14253971550" className="flex items-center gap-2 hover:text-primary-foreground">
              <Phone className="h-4 w-4" /> (425) 397-1550
            </a>
            <a href="mailto:Nick@nextlevel-decks.com" className="flex items-center gap-2 hover:text-primary-foreground">
              <Mail className="h-4 w-4" /> Nick@nextlevel-decks.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Serving Snohomish County
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/NextLevelDecks" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/nextlevel.decks" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Next Level Decks and Fences. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
