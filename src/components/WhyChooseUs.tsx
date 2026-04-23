import { Zap, Target, Users, Wrench, TrendingUp, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery (3–5 days)',
    description: 'Get online quickly without waiting weeks or months. Start attracting customers now.',
  },
  {
    icon: Target,
    title: 'Focus on Results, Not Just Design',
    description: 'We optimize for conversions and customer acquisition, not just aesthetics.',
  },
  {
    icon: Users,
    title: 'Built for Small Businesses',
    description: 'We understand your challenges. Affordable, scalable solutions that grow with you.',
  },
  {
    icon: Wrench,
    title: 'Complete Done-for-You Solution',
    description: 'Website, branding, social media, and lead systems—we handle everything.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Oriented Approach',
    description: 'Every element is designed to generate leads and drive business growth.',
  },
  {
    icon: Rocket,
    title: 'Proven Results',
    description: 'Join hundreds of businesses already generating customers with our system.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose QuickNirmaan?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're not just designers. We're your growth partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            The LaunchGrow Promise
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            If you don't start receiving quality leads within 14 days, we'll optimize your system for free.
          </p>
          <div className="flex justify-center gap-4">
            <span className="flex items-center gap-2">✓ 100% Money-Back Guarantee</span>
            <span className="flex items-center gap-2">✓ Lifetime Support Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
