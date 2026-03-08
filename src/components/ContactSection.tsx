import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! Your inquiry has been sent.");
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-primary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-light mb-4">
            Reach Out
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-px gold-gradient mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="animate-on-scroll space-y-8">
            <div>
              <h3 className="font-display text-2xl text-cream mb-4">
                Design Consultants
              </h3>
              <div className="space-y-2">
                <p className="font-body text-sm text-cream/80">Rishi Motwani</p>
                <p className="font-body text-sm text-cream/80">Navin Shamani</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:8600829108"
                className="flex items-center gap-3 font-body text-sm text-cream/70 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                8600829108
              </a>
              <a
                href="tel:9588690038"
                className="flex items-center gap-3 font-body text-sm text-cream/70 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                9588690038
              </a>
              <a
                href="mailto:innovatesagedesigns@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-cream/70 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                innovatesagedesigns@gmail.com
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="animate-on-scroll space-y-5">
            {(["name", "phone", "email"] as const).map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                required
                maxLength={field === "email" ? 255 : 100}
                className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 font-body text-sm text-cream placeholder:text-cream/40 outline-none transition-colors"
              />
            ))}
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              rows={4}
              className="w-full bg-transparent border-b border-gold/30 focus:border-gold py-3 font-body text-sm text-cream placeholder:text-cream/40 outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="btn-gold flex items-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
