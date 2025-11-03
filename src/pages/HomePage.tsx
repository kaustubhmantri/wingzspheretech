import { useEffect } from 'react';
import {
  ArrowRight,
  Code,
  Megaphone,
  Palette,
  CheckCircle,
  Star,
  Users,
  Briefcase,
  Target,
  Sparkles,
  Rocket,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    document.title =
      'Website Development & Digital Marketing in Nashik | WingzSphere Tech';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Empowering local businesses with websites, digital marketing, and branding. Build your digital presence with WingzSphere Tech.'
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fade-in');
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-me').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
        {/* soft background washes */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-accent-cyan/5 to-accent-teal/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </div>

        {/* two column hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: copy & CTAs */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full text-primary-700 text-sm font-semibold mb-8 observe-me opacity-0 shadow-lg">
              <Sparkles className="w-4 h-4" />
              Your Digital Growth Partner
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight observe-me opacity-0">
              <span className="bg-gradient-to-r from-primary-600 via-accent-cyan to-accent-teal bg-clip-text text-transparent">
                Wings to Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent-teal via-accent-cyan to-primary-600 bg-clip-text text-transparent">
                Digital Journey.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed observe-me opacity-0">
              Empowering local businesses with stunning websites,
              strategic digital marketing, and memorable branding.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 observe-me opacity-0">
              <a
                href="#services"
                className="group px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT: 2×2 cards (mobile: icon above; desktop: icon left) */}
          <div className="relative w-full lg:max-w-none">
            {/* background glow */}
            <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-blue-500/12 via-fuchsia-400/10 to-teal-400/12 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  title: 'Launch',
                  subtitle: 'Your Business Website',
                  icon: Rocket,
                  gradient: 'from-blue-500 to-blue-600',
                },
                {
                  title: 'Grow',
                  subtitle: 'Your Brand Value',
                  icon: Zap,
                  gradient: 'from-rose-500 to-pink-600',
                },
                {
                  title: 'Reach',
                  subtitle: 'Global Audience',
                  icon: Target,
                  gradient: 'from-violet-500 to-purple-600',
                },
                {
                  title: 'Connect',
                  subtitle: 'With Customers',
                  icon: Users,
                  gradient: 'from-emerald-500 to-green-600',
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl bg-white/90 backdrop-blur-xl border border-white/70
                    shadow-md shadow-slate-200/40
                    p-4 sm:p-5 lg:p-6
                    flex flex-col lg:flex-row lg:items-center
                    text-left hover:-translate-y-0.5 hover:shadow-xl transition-all
                    h-auto min-h-[100px] lg:min-h-[112px] lg:h-[120px]"
                >
                  <div
                    className={`h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 rounded-xl bg-gradient-to-br ${card.gradient}
                                flex items-center justify-center shadow-md mb-3 lg:mb-0 lg:mr-4`}
                  >
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-snug lg:leading-tight break-words lg:whitespace-nowrap">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 leading-snug break-words">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom pill CTA */}
            <div className="w-full flex justify-center mt-5 sm:mt-6">
              <a
                href="#contact"
                className="px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-600 to-accent-cyan text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Go Digital. Go Global. 🚀
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-me opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Website Development */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 observe-me opacity-0 border border-primary-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary-500/30">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Website Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom, responsive websites that convert visitors into customers. From landing pages to full e-commerce solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">SEO Optimized</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Fast Loading</span>
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 observe-me opacity-0 border border-accent-cyan/30">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent-cyan/30">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent-cyan transition-colors">
                Digital Marketing
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data-driven strategies to boost your online presence and drive measurable results across all digital channels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Social Media Marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Content Strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Campaign Management</span>
                </li>
              </ul>
            </div>

            {/* Branding & Design */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 observe-me opacity-0 border border-accent-purple/30">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent-purple/30">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent-purple transition-colors">
                Branding & Design
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create a lasting impression with cohesive brand identity that resonates with your target audience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Logo Design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Brand Guidelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Marketing Collateral</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-me opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to bring your vision to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: 'Discovery',
                  desc: 'We understand your goals, audience, and requirements',
                  color: 'from-primary-500 to-primary-600',
                },
                {
                  icon: Target,
                  title: 'Strategy',
                  desc: 'Create a tailored plan aligned with your objectives',
                  color: 'from-accent-cyan to-accent-teal',
                },
                {
                  icon: Code,
                  title: 'Development',
                  desc: 'Build your solution with cutting-edge technology',
                  color: 'from-primary-600 to-accent-cyan',
                },
                {
                  icon: Star,
                  title: 'Testing',
                  desc: 'Rigorous quality assurance across all devices',
                  color: 'from-accent-teal to-primary-500',
                },
                {
                  icon: Briefcase,
                  title: 'Launch & Support',
                  desc: 'Deploy your project and provide ongoing assistance',
                  color: 'from-accent-purple to-accent-pink',
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6 observe-me opacity-0 group">
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-grow bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-6 h-6 text-primary-600" />
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 observe-me opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business soar to new heights
          </p>
          <a
            href="contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-2xl hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
}
