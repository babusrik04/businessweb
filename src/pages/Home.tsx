import { useState } from 'react';
import { ArrowRight, Zap, MessageCircle, CheckCircle, Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-20">
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
              onClick={() => setShowContactForm(true)}
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
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">How It Works</h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Our streamlined process gets your business online fast without the complexity.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us Your Vision',
                description: 'Share your business details, goals, and target audience. We understand your unique needs.',
                icon: '🎯'
              },
              {
                step: '02',
                title: 'We Build Your Presence',
                description: 'Our team creates your website, sets up social media, and configures lead capture systems.',
                icon: '⚙️'
              },
              {
                step: '03',
                title: 'Go Live & Get Leads',
                description: 'Your business goes live within 5 days. Start receiving customer inquiries immediately.',
                icon: '🚀'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-blue-600 mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Businesses Online</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">14+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">What Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Raj Patel',
                role: 'Gym Owner',
                feedback: 'Quick Nirmaan got my gym online in just 5 days. I\'m receiving 10+ inquiries weekly now!',
                rating: 5
              },
              {
                name: 'Priya Sharma',
                role: 'Coaching Institute',
                feedback: 'Professional website with lead forms. Our enrollment increased by 40% in 2 months.',
                rating: 5
              },
              {
                name: 'Arun Kumar',
                role: 'Service Provider',
                feedback: 'Amazing support team. They made everything so easy. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.feedback}"</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include 1-year support.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: 'Starter',
                price: '4,999',
                color: 'green',
                features: ['1 Year Domain', 'Hosting & SSL', '3–5 Pages', 'Mobile Responsive', 'WhatsApp Button', 'Basic SEO']
              },
              {
                name: 'Business',
                price: '9,999',
                color: 'blue',
                popular: true,
                features: ['Everything in Starter', '10–15 Pages', 'Lead Form Integration', 'Social Media Setup', 'Admin Panel', 'Blog Setup']
              },
              {
                name: 'E-Commerce',
                price: '15,000',
                color: 'purple',
                features: ['Everything in Business', 'Product Listings', 'Payment Gateway', 'Order Management', 'Inventory System']
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 border-2 transition-transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white border-blue-600 shadow-xl'
                    : 'bg-white border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">₹{plan.price}</span>
                  <span className="text-slate-600 ml-2">one-time</span>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className={`w-full py-2 rounded-lg font-semibold mb-6 transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-4">Need a custom solution?</p>
            <a
              href="https://wa.me/919620417766"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle size={20} />
              Contact us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's build your online presence and start generating customers in days, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
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

          <p className="text-blue-100 text-sm mt-8">
            ✓ Free consultation • ✓ No credit card required • ✓ Custom proposal in 24 hours
          </p>
        </div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
}
