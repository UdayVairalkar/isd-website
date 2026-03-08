import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Home, Sofa, BedDouble, UtensilsCrossed, Baby, Box } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Interior Design", desc: "Complete home transformation with luxury finishes" },
  { icon: Sofa, title: "Living Room Design", desc: "Elegant living spaces for comfort and style" },
  { icon: BedDouble, title: "Bedroom Design", desc: "Serene bedrooms crafted for relaxation" },
  { icon: UtensilsCrossed, title: "Dining Area Design", desc: "Sophisticated dining experiences" },
  { icon: Baby, title: "Kids Room Design", desc: "Playful yet functional children's spaces" },
  { icon: Box, title: "3D Visualization & Space Planning", desc: "Realistic renders before execution" },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-primary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-light mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-3">
            Our Services
          </h2>
          <div className="w-16 h-px gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group border border-gold/20 rounded-sm p-8 text-center transition-all duration-500 hover:border-gold/60 hover:bg-charcoal/50"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <s.icon className="w-8 h-8 text-gold mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display text-xl text-cream mb-3">{s.title}</h3>
              <p className="font-body text-sm text-cream/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
