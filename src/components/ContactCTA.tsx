import { ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  onGetStarted: () => void;
}

export default function ContactCTA({ onGetStarted }: ContactCTAProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Grow Your Business?
        </h2>

        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's build your online presence and start generating customers in days, not months. Your business deserves to be seen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            Get Free Demo
            <ArrowRight size={20} />
          </button>
          <button
            onClick={onGetStarted}
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Contact Now
          </button>
        </div>

        <p className="text-blue-100 text-sm">
          ✓ Free consultation • ✓ No credit card required • ✓ Custom proposal in 24 hours
        </p>
      </div>
    </section>
  );
}
