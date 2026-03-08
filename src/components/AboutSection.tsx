import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-primary" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-4">
            Who We Are
          </p>
       <h2 className="font-display text-4xl md:text-5xl font-light mb-3 text-primary-foreground">
  About Innovate Sage  Designs
</h2>
         
          <div className="w-16 h-px gold-gradient mx-auto mb-10" />
        </div>

        <div className="animate-on-scroll">
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Innovate Sage Designs is a premium interior design studio dedicated
            to creating sophisticated and functional spaces. Our designs blend
            creativity, comfort and modern aesthetics to deliver interiors that
            feel luxurious and personalized.
          </p>
        </div>
      </div>
    </section>);

};

export default AboutSection;