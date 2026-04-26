import { MessageCircle, ArrowRight, Briefcase } from 'lucide-react';

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">We're Growing!</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join our team and help businesses go online.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Current Opportunities</h2>

          <div className="space-y-6 mb-12">
            {[
              {
                title: 'Frontend Developer',
                type: 'Full-time / Freelance',
                description: 'Build beautiful, responsive websites using React and modern web technologies.'
              },
              {
                title: 'Backend Developer',
                type: 'Full-time / Freelance',
                description: 'Develop scalable backend solutions with Node.js, databases, and APIs.'
              },
              {
                title: 'UI/UX Designer',
                type: 'Freelance',
                description: 'Create stunning, conversion-focused designs for our web projects.'
              },
              {
                title: 'Digital Marketer',
                type: 'Full-time / Freelance',
                description: 'Help businesses grow their online presence with marketing strategies.'
              },
              {
                title: 'Content Writer',
                type: 'Freelance',
                description: 'Create compelling website and social media content for various industries.'
              }
            ].map((job, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-blue-600 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">{job.type}</p>
                    <p className="text-slate-600">{job.description}</p>
                  </div>
                  <Briefcase className="text-slate-400 flex-shrink-0" size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Application Info */}
          <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in Joining Us?</h3>
            <p className="text-slate-700 mb-6">
              Send your resume and portfolio to us, and tell us why you'd love to work with Quick Nirmaan.
            </p>
            <a
              href="mailto:careers@quicknirmaan.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mb-4"
            >
              Send Your Application
            </a>
            <p className="text-sm text-slate-600">
              Or reach out on WhatsApp
            </p>
            <a
              href="https://wa.me/919620417766"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mt-4"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Why Join Quick Nirmaan?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Flexible Work',
                description: 'Work from anywhere. Full-time, part-time, or project-based opportunities.'
              },
              {
                title: 'Growing Company',
                description: 'Be part of a rapidly growing startup with exciting opportunities ahead.'
              },
              {
                title: 'Real Impact',
                description: 'Your work directly helps businesses grow and succeed online.'
              },
              {
                title: 'Learning Culture',
                description: 'Continuous learning and skill development opportunities.'
              },
              {
                title: 'Fair Compensation',
                description: 'Competitive rates and clear, transparent payment terms.'
              },
              {
                title: 'Collaborative Team',
                description: 'Work with talented professionals who are passionate about web development.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-slate-200 text-center">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Application Process</h2>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Send Your Details', desc: 'Share your resume and portfolio' },
              { step: '2', title: 'Initial Chat', desc: 'We discuss your skills and interests' },
              { step: '3', title: 'Test Project', desc: 'Work on a sample project (paid)' },
              { step: '4', title: 'Onboard', desc: 'Start working with our team' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our growing team and help businesses succeed online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@quicknirmaan.com"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Email Your Resume
              <ArrowRight size={20} />
            </a>
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
    </div>
  );
}
