import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-4">
            Social
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-3 text-primary-foreground">
            Follow Our Work
          </h2>
          <div className="w-16 h-px gold-gradient mx-auto mb-10" />
        </div>

        <div className="animate-on-scroll">
          <p className="font-body text-base text-muted-foreground mb-8">
            Explore our latest interior design projects on Instagram.
          </p>

          <a
            href="https://www.instagram.com/innovate_sage_designs?igsh=MXc3M2pzcTFsNGlqMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-gold group">
            
            <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>@innovate_sage_designs</span>
          </a>

          <p className="font-body text-xs text-muted-foreground mt-6">
            Innovate Sage Designs
          </p>
        </div>
      </div>
    </section>);

};

export default InstagramSection;