import { useState } from 'react';
import { X, Loader, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_type: '',
    service_interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (submitError) {
        setError('Failed to submit form. Please try again.');
        console.error(submitError);
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 2000);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">Get Started Today</h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">Thank you!</h4>
              <p className="text-slate-600">We'll be in touch within 24 hours with your personalized proposal.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="+91 9XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Business Type
                </label>
                <select
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Select your business type</option>
                  <option value="coaching">Coaching Institute</option>
                  <option value="service">Service Provider</option>
                  <option value="retail">Retail/E-commerce</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Which package interests you?
                </label>
                <select
                  name="service_interest"
                  value={formData.service_interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a package</option>
                  <option value="starter">Starter Package</option>
                  <option value="growth">Growth Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Tell us about your business and goals..."
                />
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Get Your Free Demo'
                )}
              </button>

              <p className="text-center text-xs text-slate-600">
                We'll respond within 24 hours. No spam, just genuine support.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
