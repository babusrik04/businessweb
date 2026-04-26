import { MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function Portfolio() {
  const [showContactForm, setShowContactForm] = useState(false);

  const projects = [
    {
      title: 'FitZone Gym',
      industry: 'Fitness & Gym',
      description: 'Complete website with membership booking and lead management.',
      image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        '+250 inquiries in 3 months',
        '40% membership sign-ups increase',
        '24/7 online booking available'
      ]
    },
    {
      title: 'ProLearn Coaching',
      industry: 'Education & Coaching',
      description: 'Student enrollment portal with online course integration and CRM.',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        '+180 student enrollments',
        '50% higher inquiry conversion',
        'Automated follow-up system'
      ]
    },
    {
      title: 'BeautyHub Salon',
      industry: 'Salon & Beauty',
      description: 'Online appointment booking system with service catalog and payments.',
      image: 'https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        '+150 bookings monthly',
        '30% revenue increase',
        'Reduced cancellations by 20%'
      ]
    },
    {
      title: 'TechStore E-Shop',
      industry: 'E-Commerce',
      description: 'Full e-commerce platform with product catalog and payment gateway.',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        '₹2.5L monthly sales',
        '800+ products listed',
        'Automated order processing'
      ]
    },
    {
      title: 'ConsultHub',
      industry: 'Consulting',
      description: 'Professional services website with lead capture and case studies.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        '+90 qualified leads',
        '35% consultation bookings',
        '₹5L+ in contracts'
      ]
    },
    {
      title: 'NutriCare',
      industry: 'Health & Wellness',
      description: 'Nutrition consultation platform with client management system.',
      image: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        '+200 active clients',
        '45% month-over-month growth',
        'Improved client retention'
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real businesses. Real results. See how we've helped companies like yours go online.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-blue-100">Websites Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">₹50Cr+</div>
              <div className="text-blue-100">Sales Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">14+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <span className="text-white px-4 py-3 text-sm font-semibold">
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>

                  {/* Results */}
                  <div className="mb-6 space-y-2">
                    {project.results.map((result, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        {result}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowContactForm(true)}
                    className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Success Formula</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Deep Discovery',
                desc: 'We understand your business, industry, and competition before building anything.'
              },
              {
                step: '2',
                title: 'Smart Design',
                desc: 'Professional design that converts visitors into customers. Not just pretty—effective.'
              },
              {
                step: '3',
                title: 'Conversion Focus',
                desc: 'Every element is optimized for lead generation and sales, not just aesthetics.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-slate-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 border-2 border-blue-200 text-center">
            <p className="text-2xl font-bold text-slate-900 mb-4">
              "Quick Nirmaan transformed our business online. We went from zero digital presence to generating 30+ qualified leads per month. Highly recommended!"
            </p>
            <p className="font-semibold text-slate-900 mb-1">Rajesh Kumar</p>
            <p className="text-slate-600">Director, ProLearn Coaching Institute</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Your Success Story Starts Here</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build something amazing for your business. Get your free consultation today.
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
