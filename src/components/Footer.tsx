const links = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Services", href: "#services" },
{ label: "Portfolio", href: "#portfolio" },
{ label: "Contact", href: "#contact" }];


const Footer = () =>
<footer className="bg-primary border-t border-gold/10 py-16 px-6 md:px-12">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-display text-2xl gold-text mb-2">
          Innovate Sage Designs
        </h3>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/50">
          Crafting spaces for endless memories
        </p>
      </div>

      <div>
        <h4 className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Quick Links
        </h4>
        <div className="space-y-2">
          {links.map((l) =>
        <a
          key={l.href}
          href={l.href}
          className="block font-body text-sm text-cream/60 hover:text-gold transition-colors">
          
              {l.label}
            </a>
        )}
        </div>
      </div>

      <div>
        <h4 className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Contact
        </h4>
        <div className="space-y-2 font-body text-sm text-cream/60">
          <p>Phone: 
 Rishi Motwani 8600829108 
Navin Shamani MO: 9588690038


        </p>
          <p>Email: innovatesagedesigns@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gold/10 text-center">
      <p className="font-body text-xs text-cream/40">
        © {new Date().getFullYear()} Innovate Sage Designs. All rights reserved.
      </p>
    </div>
  </footer>;export default Footer;