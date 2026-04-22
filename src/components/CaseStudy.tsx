import { CheckCircle, ArrowUpRight } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real Results
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours go online and start getting customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl h-96 flex items-center justify-center text-white">
            <div className="text-center">
              <p className="text-sm font-semibold mb-2">Case Study Image</p>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Coaching Institute Success"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
              <CheckCircle size={18} />
              <span className="text-sm font-semibold">Success Story</span>
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Coaching Institute: From Zero to 50+ Leads
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              A growing coaching institute needed an online presence to reach more students. They had a great curriculum but no visibility. Within 5 days, we launched their complete online system.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Professional Online Presence</h4>
                  <p className="text-slate-600">Landing page + social media setup that showcased their expertise</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Lead Capture System</h4>
                  <p className="text-slate-600">Automated system that captured student inquiries 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Immediate Results</h4>
                  <p className="text-slate-600">50+ qualified inquiries in first month, 30% conversion rate</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg">
              <p className="text-slate-700 italic mb-4">
                "Within 5 days, we had our complete online system ready. The team was incredibly responsive and delivered exactly what we needed. We started getting leads immediately."
              </p>
              <p className="font-semibold text-slate-900">— Priya Sharma, Coaching Institute Director</p>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2">
                <ArrowUpRight size={20} className="text-green-600" />
                <span className="font-semibold text-slate-900">50+ Leads in Month 1</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight size={20} className="text-green-600" />
                <span className="font-semibold text-slate-900">30% Conversion Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
