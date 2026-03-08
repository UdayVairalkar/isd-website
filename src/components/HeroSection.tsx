import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Stronger dark overlay for text readability */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(0,0%,0%,0.75) 0%, hsla(0,0%,0%,0.55) 50%, hsla(0,0%,0%,0.8) 100%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="opacity-0 animate-fade-up">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-6" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            Interior Design Studio
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-up-delay-1 font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-wide mb-4" style={{ color: "hsl(43 55% 65%)", textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}>
          ISD
        </h1>

        <div className="opacity-0 animate-fade-up-delay-1 w-24 h-px gold-gradient mx-auto mb-5" />

        <p className="opacity-0 animate-fade-up-delay-1 font-display text-1xl md:text-2xl font-light tracking-wide mb-3" style={{ color: "hsl(40 30% 95%)", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          Innovate Sage (नवीन ऋषि )Designs
        </p>

        <p className="opacity-0 animate-fade-up-delay-2 font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold-light mb-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
          Crafting spaces for endless memories
        </p>

        <p className="opacity-0 animate-fade-up-delay-2 font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: "hsl(40 20% 88%)", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
          Innovate Sage Designs creates elegant and functional interiors that
          transform everyday spaces into timeless environments. We specialize in
          luxurious living rooms, modern bedrooms, dining areas and kids rooms
          designed with attention to detail.
        </p>

        <div className="opacity-0 animate-fade-up-delay-3 flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#portfolio" className="btn-gold text-base px-10 py-4">
            View Projects
          </a>
          <a href="#contact" className="btn-outline-gold text-base px-10 py-4">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up-delay-3">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/60">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
