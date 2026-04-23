import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Nirmaan</h4>
            <p className="text-slate-400 leading-relaxed">
              Helping businesses go online and start getting customers in 5 days.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media Setup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lead Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Branding</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Get in Touch</h5>
            <div className="space-y-3">
              <a href="tel:+919620417766" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91-9620417766</span>
              </a>
              <a href="mailto:admin@quicknirmaan.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>admin@quicknirmaan.com</span>
              </a>
              <a href="https://wa.me/919620417766" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <MessageCircle size={18} />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-slate-400 text-center md:text-left">
              © 2026 Quick Nirmaan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61565327893255" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/quicknirmaan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/quicknirmaan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/quicknirmaan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm space-y-2">
          <p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
