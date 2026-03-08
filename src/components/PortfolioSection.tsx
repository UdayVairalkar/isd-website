import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import livingRoom1 from "@/assets/portfolio-living-room-1.png";
import bedroom from "@/assets/portfolio-bedroom.png";
import livingRoom2 from "@/assets/portfolio-living-room-2.png";
import dining from "@/assets/portfolio-dining.png";
import livingRoom3 from "@/assets/portfolio-living-room-3.png";
import kidsRoom from "@/assets/portfolio-kids-room.png";
import kitchen from "@/assets/portfolio-kitchen.png";
import pool1 from "@/assets/portfolio-pool-1.jpg";
import pool2 from "@/assets/portfolio-pool-2.jpg";
import bathroom from "@/assets/portfolio-bathroom.jpg";
import dining2 from "@/assets/portfolio-dining-2.png";
import terrace from "@/assets/portfolio-terrace.jpg";
import rooftop from "@/assets/portfolio-rooftop.jpg";
import bathroom2 from "@/assets/portfolio-bathroom-2.jpg";

const projects = [
{ src: livingRoom1, title: "Luxury Living Room", category: "Living Room" },
{ src: bedroom, title: "Modern Bedroom Suite", category: "Bedroom" },
{ src: dining, title: "Elegant Dining Area", category: "Dining" },
{ src: kidsRoom, title: "Kids Room Design", category: "Kids Room" },
{ src: livingRoom2, title: "Contemporary Living Space", category: "Living Room" },
{ src: kitchen, title: "Modern Kitchen Design", category: "Kitchen" },
{ src: livingRoom3, title: "Premium Living Room", category: "Living Room" },
{ src: dining2, title: "Designer Dining Room", category: "Dining" },
{ src: terrace, title: "Rooftop Terrace Lounge", category: "Outdoor" },
{ src: pool1, title: "Outdoor Pool Area", category: "Outdoor" },
{ src: rooftop, title: "Minimalist Rooftop", category: "Outdoor" },
{ src: bathroom2, title: "Marble & Gold Bathroom", category: "Bathroom" },
{ src: pool2, title: "Courtyard & Pool", category: "Outdoor" },
{ src: bathroom, title: "Luxury Pink Bathroom", category: "Bathroom" }];


const PortfolioSection = () => {
  const ref = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + projects.length) % projects.length);
  };

  return (
    <>
      <section id="portfolio" className="section-padding bg-primary" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-4">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-3 text-primary-foreground bg-primary">
              Our Design Works
            </h2>
            <div className="w-16 h-px gold-gradient mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) =>
            <div
              key={i}
              className="animate-on-scroll group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3]"
              style={{ transitionDelay: `${i % 6 * 100}ms` }}
              onClick={() => setLightbox(i)}>
              
                <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" />
              
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-end">
                  <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-light">
                      {p.category}
                    </p>
                    <p className="font-display text-lg text-cream">{p.title}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null &&
      <div
        className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        onClick={() => setLightbox(null)}>
        
          <button
          className="absolute top-6 right-6 text-gold-light hover:text-gold transition-colors z-10"
          onClick={() => setLightbox(null)}
          aria-label="Close">
          
            <X size={32} />
          </button>
          <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-light hover:text-gold transition-colors z-10"
          onClick={(e) => {e.stopPropagation();navigate(-1);}}
          aria-label="Previous">
          
            <ChevronLeft size={40} />
          </button>
          <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-light hover:text-gold transition-colors z-10"
          onClick={(e) => {e.stopPropagation();navigate(1);}}
          aria-label="Next">
          
            <ChevronRight size={40} />
          </button>
          <img
          src={projects[lightbox].src}
          alt={projects[lightbox].title}
          className="max-w-full max-h-[85vh] object-contain animate-scale-in"
          onClick={(e) => e.stopPropagation()} />
        
          <div className="absolute bottom-8 text-center">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-light mb-1">
              {projects[lightbox].category}
            </p>
            <p className="font-display text-xl text-cream">
              {projects[lightbox].title}
            </p>
          </div>
        </div>
      }
    </>);

};

export default PortfolioSection;