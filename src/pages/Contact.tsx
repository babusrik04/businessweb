import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let's discuss how we can help your business go online.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600 mb-2">Call us during business hours</p>
                    <a href="tel:+917382379206" className="text-blue-600 font-semibold hover:underline">
                      +91-7382379206
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-4 rounded-lg flex-shrink-0">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 mb-2">Send us an email anytime</p>
                    <a href="mailto:admin@quicknirmaan.com" className="text-blue-600 font-semibold hover:underline">
                      admin@quicknirmaan.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-4 rounded-lg flex-shrink-0">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                    <p className="text-slate-600 mb-2">Chat with us instantly</p>
                    <a
                      href="https://wa.me/7382379206"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Start WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg flex-shrink-0">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9 AM - 6 PM<br />
                      Saturday: 10 AM - 4 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg flex-shrink-0">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600">
                      Based in India<br />
                      Serving businesses nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <a href="https://facebook.com/quicknirmaan" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    Facebook: /quicknirmaan
                  </a>
                  <a href="https://instagram.com/quicknirmaan" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    Instagram: @quicknirmaan
                  </a>
                  <a href="https://linkedin.com/company/quicknirmaan" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    LinkedIn: /company/quicknirmaan
                  </a>
                  <a href="https://twitter.com/quicknirmaan" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    Twitter: @quicknirmaan
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Preview */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>

              <button
                onClick={() => setShowContactForm(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors mb-4"
              >
                Open Contact Form
              </button>

              <div className="bg-slate-50 rounded-lg p-8 border-2 border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Quick Response</h3>
                <p className="text-slate-700 mb-4">
                  Fill out the contact form and we'll get back to you within 24 hours with a custom proposal and free consultation.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ Free consultation</li>
                  <li>✓ No obligation</li>
                  <li>✓ Custom quote</li>
                  <li>✓ Expert advice</li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 bg-green-50 rounded-lg p-8 border-2 border-green-200">
                <h3 className="font-bold text-slate-900 mb-4">Prefer Quick Chat?</h3>
                <p className="text-slate-700 mb-4">
                  Message us on WhatsApp and let's discuss your project right away.
                </p>
                <a
                  href="https://wa.me/919620417766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
                >
                  <MessageCircle size={20} />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to hear back from you?',
                a: 'We typically respond within 2-4 hours during business hours. For WhatsApp, you can expect immediate responses.'
              },
              {
                q: 'Do you offer free consultation?',
                a: 'Yes! We offer a free consultation to understand your business needs and provide recommendations.'
              },
              {
                q: 'How do we start working together?',
                a: 'Simply reach out via email, phone, or WhatsApp. We\'ll discuss your project and send you a custom proposal.'
              },
              {
                q: 'What if I have questions after the project launches?',
                a: 'Support is included in all our packages. We\'re here to help! Contact us anytime.'
              },
              {
                q: 'Can I discuss my specific needs before committing?',
                a: 'Absolutely! We encourage a detailed discussion before any commitment. No pressure, just honest advice.'
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Get Started Today!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Pick your preferred way to connect and let's build your online success story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Open Contact Form
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
            <a
              href="tel:+919620417766"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
}
