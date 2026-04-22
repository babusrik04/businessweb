import { DollarSign } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Flexible packages designed for businesses at different stages
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-12 border-2 border-blue-200 text-center mb-12">
          <DollarSign size={40} className="text-blue-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            No Hidden Fees. No Surprises.
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Choose the package that fits your business needs. All packages include ongoing support and optimization for the first month.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Starter</p>
              <p className="text-2xl font-bold text-blue-600">₹10K - ₹15K</p>
              <p className="text-sm text-slate-600 mt-2">Best for quick launch</p>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg border-2 border-blue-600">
              <p className="font-semibold mb-2">Growth</p>
              <p className="text-2xl font-bold">₹20K - ₹30K</p>
              <p className="text-sm text-blue-100 mt-2">Most popular choice</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Premium</p>
              <p className="text-2xl font-bold text-blue-600">₹40K - ₹60K</p>
              <p className="text-sm text-slate-600 mt-2">Full transformation</p>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block">
            Get a Customized Quote
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-4">What's Included</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Professional website built for conversions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Social media setup and content strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Lead capture and management system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>30 days of optimization and support</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Additional Services</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Monthly maintenance & updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Email marketing campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Advanced analytics & reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Video content creation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
