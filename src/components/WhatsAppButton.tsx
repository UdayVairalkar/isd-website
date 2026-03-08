import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918600829108"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ background: "hsl(142 70% 45%)" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" style={{ color: "white" }} />
  </a>
);

export default WhatsAppButton;
