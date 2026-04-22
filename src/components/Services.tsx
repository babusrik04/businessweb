import { Rocket, TrendingUp, Briefcase, Check } from 'lucide-react';

const packages = [
  {
    name: 'Starter Package',
    icon: Rocket,
    price: '₹10,000 – ₹15,000',
    description: 'Perfect for getting started online',
    features: [
      '1 Landing Page Website',
      'Basic Branding',
      '3 Social Media Posts',
    ],
  },
  {
    name: 'Growth Package',
    icon: TrendingUp,
    price: '₹20,000 – ₹30,000',
    description: 'Scale with leads and engagement',
    features: [
      'Website + Lead Capture',
      'Social Media Setup',
      '10 Posts + Captions',
    ],
    highlighted: true,
  },
  {
    name: 'Premium Package',
    icon: Briefcase,
    price: '₹40,000 – ₹60,000',
    description: 'Complete business transformation',
    features: [
      'Complete Business Setup',
      'Lead Funnel + Automation',
      '30 Social Posts',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Packages Designed for Your Growth
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the perfect package to get your business online and start attracting customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className={`rounded-xl p-8 transition-all duration-300 transform hover:scale-105 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl'
                    : 'bg-slate-50 border-2 border-slate-200 text-slate-900 hover:border-blue-600'
                }`}
              >
                <div className="mb-6">
                  <Icon
                    size={40}
                    className={pkg.highlighted ? 'text-blue-100' : 'text-blue-600'}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`mb-6 ${pkg.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {pkg.description}
                </p>

                <div className={`text-3xl font-bold mb-8 ${pkg.highlighted ? 'text-blue-100' : 'text-blue-600'}`}>
                  {pkg.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
