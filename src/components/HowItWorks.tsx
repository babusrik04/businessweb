import { Lightbulb, Zap, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Lightbulb,
    title: 'Understand Your Business',
    description: 'We quickly understand your goals and target audience to create a solution that works for you',
  },
  {
    number: '2',
    icon: Zap,
    title: 'Build & Launch',
    description: 'Website, content, and systems ready in 3–5 days. Fast, efficient, and complete.',
  },
  {
    number: '3',
    icon: BarChart3,
    title: 'Start Getting Leads',
    description: 'You start receiving inquiries and customers. Begin growing your business immediately.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A simple 3-step process to get your business online and generating leads
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 h-full border-2 border-slate-200 hover:border-blue-600 transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full mb-6 font-bold text-xl">
                    {step.number}
                  </div>

                  <Icon size={32} className="text-blue-600 mb-4" />

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-400">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 border-2 border-blue-200 text-center">
          <p className="text-lg text-slate-700 mb-4">
            Ready to start your transformation?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
