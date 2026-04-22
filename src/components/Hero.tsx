import { ArrowRight, Zap, MessageCircle } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
          <Zap size={18} />
          <span className="text-sm font-semibold">Fast, Done-for-You Solutions</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Get Your Business Online & Start Getting Customers in <span className="text-blue-600">5 Days</span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Quick Nirmaan helps businesses go online with professional websites, social media setup, and lead generation systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            Get Free Demo
            <ArrowRight size={20} />
          </button>
          <a
            href="https://wa.me/919620417766"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={20} />
            WhatsApp Chat
          </a>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3-5</div>
              <div className="text-sm text-slate-600">Days to Launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-slate-600">Done-for-You</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
              <div className="text-sm text-slate-600">Lead System Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
