import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919620417766"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
