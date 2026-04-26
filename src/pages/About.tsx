import { MessageCircle, ArrowRight, Target, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function About() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">About Quick Nirmaan</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We help small businesses go online in days, not months.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Quick Nirmaan was founded on a simple observation: Small businesses struggle to go online because it's too complicated, too expensive, and takes too long.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                With 14+ years of web development experience and 500+ businesses helped, we created a streamlined process that gets you online in just 5 days. No lengthy processes. No confusion. Just results.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Today, businesses across India trust us to build their digital presence and generate real leads. We're not just building websites—we're building business growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold mb-2">14+</div>
                  <div className="text-blue-100">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Businesses Launched</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">₹50Cr+</div>
                  <div className="text-blue-100">Sales Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Mission & Values</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <Target className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-slate-700">
                    To empower small businesses with affordable, professional online presence and lead generation systems that help them grow and compete in the digital age.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <Users className="text-green-600 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Values</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>✓ <strong>Speed:</strong> 5 days to launch</li>
                    <li>✓ <strong>Quality:</strong> Professional standards</li>
                    <li>✓ <strong>Transparency:</strong> No hidden costs</li>
                    <li>✓ <strong>Support:</strong> We're here when you need us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Why Choose Quick Nirmaan?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fast Turnaround',
                description: 'Get online in 5 days, not 5 months. We have a proven process.'
              },
              {
                title: 'Affordable Pricing',
                description: 'Professional websites starting from ₹4,999. No hidden charges.'
              },
              {
                title: 'Expert Team',
                description: 'Experienced developers with proven track record of delivering results.'
              },
              {
                title: 'Lead Generation Focus',
                description: 'We build websites designed to convert visitors into customers.'
              },
              {
                title: 'Complete Solutions',
                description: 'Website, social media, lead forms, and WhatsApp integration—everything included.'
              },
              {
                title: 'Ongoing Support',
                description: 'Free support included. We don\'t disappear after launch.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Technology We Use</h2>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Frontend</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>✓ React & Next.js</li>
                  <li>✓ TypeScript</li>
                  <li>✓ Tailwind CSS</li>
                  <li>✓ Progressive Web Apps</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Backend & Services</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>✓ Node.js / Python</li>
                  <li>✓ Supabase / PostgreSQL</li>
                  <li>✓ Payment Gateways (Razorpay, PayPal)</li>
                  <li>✓ WhatsApp Business API</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Team</h2>

          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            A dedicated team of developers, designers, and support specialists committed to your success.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Founder & Lead Developer',
                description: '14+ years building web solutions'
              },
              {
                role: 'UI/UX Designer',
                description: 'Creating beautiful, conversion-focused designs'
              },
              {
                role: 'Support Team',
                description: '24/7 support for all our clients'
              }
            ].map((member, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{member.role}</h3>
                <p className="text-slate-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Grow Your Business Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses that have gone online with Quick Nirmaan.
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
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
}
