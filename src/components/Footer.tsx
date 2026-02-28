import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground px-6 py-12 text-primary-foreground/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <img src={logo} alt="Next Level Decks and Fences" className="h-10" />
          <p className="mt-2 text-sm">Premium Deck & Cedar Fence Builders</p>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#services" className="hover:text-primary-foreground">Services</a>
          <a href="#gallery" className="hover:text-primary-foreground">Gallery</a>
          <a href="#about" className="hover:text-primary-foreground">About</a>
          <a href="#contact" className="hover:text-primary-foreground">Contact</a>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Next Level Decks and Fences. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
