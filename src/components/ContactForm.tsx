import { useState } from 'react';
import { X, Loader, CheckCircle } from 'lucide-react';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "e97f91cb-af62-425c-b7ee-1f64c0cab31a",

          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business_type: formData.business_type,
          service_interest: formData.service_interest,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 2000);
      } else {
        setError("Failed to send message. Please try again.");
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">Get Started Today</h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">Thank you!</h4>
              <p className="text-slate-600">
                We'll contact you shortly 🚀
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your business..."
                className="w-full px-4 py-3 border rounded-lg"
              />

              {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : (
                  'Get Your Free Demo'
                )}
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
