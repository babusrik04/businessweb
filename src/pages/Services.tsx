import { useState } from 'react';
import { ArrowRight, MessageCircle, Code, Smartphone, ShoppingCart, Share2, TrendingUp } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Services() {
  const [showContactForm, setShowContactForm] = useState(false);

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Professional, high-converting websites built for performance. Fully responsive and optimized for search engines.',
      benefits: [
        'Custom design tailored to your brand',
        'Fast loading times',
        'Mobile-first approach',
        'SEO optimized structure'
      ],
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Landing Pages',
      description: 'High-conversion landing pages designed to turn visitors into leads. Perfect for campaigns and promotions.',
      benefits: [
        'Conversion-focused design',
        'A/B testing ready',
        'Lead capture forms',
        'Analytics integrated'
      ],
      color: 'green'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup with payment gateway integration. Sell online with ease.',
      benefits: [
        'Product management system',
        'Secure payment processing',
        'Inventory tracking',
        'Order management'
      ],
      color: 'purple'
    },
    {
      icon: Share2,
      title: 'Social Media Setup',
      description: 'Complete social media presence setup. We build your profiles and create initial content strategy.',
      benefits: [
        'Profile optimization',
        'Content calendar setup',
        'Brand consistency',
        'Growth strategy'
      ],
      color: 'orange'
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Integrated lead capture and management systems. Turn website visitors into qualified leads.',
      benefits: [
        'Lead capture forms',
        'WhatsApp integration',
        'Automated follow-ups',
        'Lead tracking dashboard'
      ],
      color: 'red'
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to establish and grow your business online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {services.map((service, i) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              const Icon = service.icon;

              return (
                <div key={i} className={`${colors.bg} rounded-xl p-8 border-2 ${colors.border} hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start gap-6">
                    <div className={`${colors.text} p-4 rounded-lg bg-white`}>
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-700 mb-6">{service.description}</p>

                      <div className="mb-6">
                        <p className="font-semibold text-slate-900 mb-3">What's Included:</p>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, j) => (
                            <li key={j} className="flex items-center gap-2 text-slate-700">
                              <div className={`w-2 h-2 rounded-full ${colors.text}`}></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => setShowContactForm(true)}
                        className={`${colors.text} font-semibold flex items-center gap-2 hover:gap-3 transition-all`}
                      >
                        Learn More
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'Understand your needs' },
              { step: '2', title: 'Planning', desc: 'Create strategy' },
              { step: '3', title: 'Development', desc: 'Build your solution' },
              { step: '4', title: 'Launch', desc: 'Go live in 5 days' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose a service and let's discuss how we can help your business grow online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Get Free Demo
              <ArrowRight size={20} />
            </button>
            <a
              href="https://wa.me/919620417766"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
}
