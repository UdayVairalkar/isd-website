import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gem, Paintbrush, Eye, LayoutGrid, Heart } from "lucide-react";

const reasons = [
  { icon: Gem, title: "Luxury Modern Designs" },
  { icon: Paintbrush, title: "Customized Interiors" },
  { icon: Eye, title: "Attention to Detail" },
  { icon: LayoutGrid, title: "Functional Space Planning" },
  { icon: Heart, title: "Client Satisfaction" },
];

const WhyChooseUs = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-light mb-4">
            Our Promise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-3">
            Why Choose Us
          </h2>
          <div className="w-16 h-px gold-gradient mx-auto mb-16" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="animate-on-scroll flex flex-col items-center gap-4 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                <r.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="font-body text-xs tracking-wider uppercase text-cream/80 text-center">
                {r.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
