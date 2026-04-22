import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">LaunchGrow Digital</h4>
            <p className="text-slate-400 leading-relaxed">
              Helping small businesses go online and start getting customers in 5 days.
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
              <a href="tel:+919876543210" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91 9876543210</span>
              </a>
              <a href="mailto:hello@launchgrowdigital.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>hello@launchgrowdigital.com</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-slate-400 text-center md:text-left">
              © 2024 LaunchGrow Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
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
