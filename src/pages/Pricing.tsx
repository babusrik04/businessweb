import { useState } from 'react';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Pricing() {
  const [showContactForm, setShowContactForm] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: 4999,
      priceMax: 7999,
      description: 'Perfect for small businesses getting online',
      popular: false,
      color: 'green',
      features: [
        { text: '1 Year Domain & Hosting', included: true },
        { text: 'SSL Certificate', included: true },
        { text: '3–5 Pages', included: true },
        { text: 'Mobile Responsive Design', included: true },
        { text: 'WhatsApp Integration Button', included: true },
        { text: 'Basic SEO Setup', included: true },
        { text: 'Contact Form', included: true },
        { text: '3 Months Support', included: true },
        { text: 'Lead System Integration', included: false },
        { text: 'Admin Dashboard', included: false }
      ]
    },
    {
      name: 'Business',
      price: 9999,
      priceMax: 14999,
      description: 'For growing businesses with lead generation needs',
      popular: true,
      color: 'blue',
      features: [
        { text: '1 Year Domain & Hosting', included: true },
        { text: 'SSL Certificate', included: true },
        { text: '10–15 Pages', included: true },
        { text: 'Mobile Responsive Design', included: true },
        { text: 'WhatsApp Integration', included: true },
        { text: 'Advanced SEO Setup', included: true },
        { text: 'Lead Capture Forms', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Admin Panel & CMS', included: true },
        { text: 'Blog Setup with CMS', included: true },
        { text: 'Email Integration', included: true },
        { text: '6 Months Support', included: true },
        { text: 'Analytics Dashboard', included: true },
        { text: 'Monthly Performance Report', included: false }
      ]
    },
    {
      name: 'E-Commerce',
      price: 15000,
      priceMax: 25000,
      description: 'Complete e-commerce solution with payment processing',
      popular: false,
      color: 'purple',
      features: [
        { text: '1 Year Domain & Hosting', included: true },
        { text: 'SSL Certificate', included: true },
        { text: 'Unlimited Pages', included: true },
        { text: 'Mobile Responsive Design', included: true },
        { text: 'Product Listings & Management', included: true },
        { text: 'Payment Gateway Integration', included: true },
        { text: 'Order Management System', included: true },
        { text: 'Inventory Management', included: true },
        { text: 'Customer Management', included: true },
        { text: 'Advanced SEO Setup', included: true },
        { text: 'Admin Dashboard & CMS', included: true },
        { text: 'Blog Setup', included: true },
        { text: 'Email Marketing Integration', included: true },
        { text: 'WhatsApp & SMS Integration', included: true },
        { text: 'Analytics & Reports', included: true },
        { text: '12 Months Support', included: true }
      ]
    }
  ];

  const colorClasses = {
    green: 'border-green-600 bg-green-50',
    blue: 'border-blue-600 bg-blue-50',
    purple: 'border-purple-600 bg-purple-50'
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            All plans include 1-year support and can be customized for your specific needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden border-2 transition-all hover:shadow-2xl ${
                  plan.popular
                    ? `${colorClasses[plan.color as keyof typeof colorClasses]} shadow-xl md:scale-105`
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Header */}
                <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white' : 'bg-slate-50'}`}>
                  {plan.popular && (
                    <div className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="p-8 border-b border-slate-200">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-slate-900">₹{plan.price.toLocaleString('en-IN')}</span>
                    <span className="text-slate-600 ml-2">one-time</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">
                    Pricing may vary based on customization
                  </p>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Features */}
                <div className="p-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle
                          size={20}
                          className={`flex-shrink-0 mt-0.5 ${
                            feature.included ? 'text-green-600' : 'text-slate-300'
                          }`}
                        />
                        <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-8 text-center border-2 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Need a Custom Solution?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We can customize any plan to match your specific requirements. Let's discuss your unique needs.
            </p>
            <a
              href="https://wa.me/919620417766"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What's included in the domain and hosting?",
                a: 'All plans include 1 year of domain and hosting. After that, you can renew at standard market rates (~₹1,000-2,000/year).'
              },
              {
                q: 'Can I upgrade plans later?',
                a: "Yes! You can upgrade anytime. We'll add additional features and you only pay the difference."
              },
              {
                q: 'Is setup and support included?',
                a: 'Yes! Full setup is included and we provide ongoing support based on your plan (3-12 months).'
              },
              {
                q: 'Do you provide ongoing maintenance?',
                a: 'After the included support period, we offer affordable monthly maintenance packages starting at ₹2,000/month.'
              },
              {
                q: 'Can you integrate with my existing systems?',
                a: 'Absolutely! We can integrate with most popular tools and services. Contact us to discuss your needs.'
              },
              {
                q: 'What if I need changes after launch?',
                a: 'We provide free minor changes during the support period. Major changes are charged at our hourly rates.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Your Online Presence</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and custom quote for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Request Free Demo
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
