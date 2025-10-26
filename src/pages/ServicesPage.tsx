import { useEffect } from 'react';
import {
  Code,
  Megaphone,
  Palette,
  CheckCircle,
  Search,
  Share2,
  PenTool,
  Layout,
  Smartphone,
  Braces,
  TrendingUp,
  Sparkles,
  Type,
} from 'lucide-react';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | Web Design, Digital Marketing & Branding in Nashik';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore our comprehensive digital services: custom website development, strategic digital marketing, and professional branding solutions for businesses in Nashik and across India.'
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

  const Gif = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
    />
  );

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-accent-cyan/5 to-accent-teal/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 observe-me opacity-0">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-700 observe-me opacity-0">
              Comprehensive digital solutions to grow your business
            </p>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* WEBSITE DEVELOPMENT */}
            <div className="grid md:grid-cols-2 gap-12 items-center observe-me opacity-0">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Website Development
                  </h2>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Transform your online presence with custom, responsive websites that
                  convert visitors into customers. We build fast, secure, and
                  SEO-optimized websites tailored to your business needs.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Deliverables:</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Responsive Design (Mobile, Tablet, Desktop)',
                    'SEO-Optimized Structure',
                    'Fast Loading Speed',
                    'Secure Hosting Setup',
                    'Content Management System',
                    'Contact Forms & Integrations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-teal mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Add-ons Available:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'E-commerce Integration',
                    'Booking Systems',
                    'Multi-language Support',
                    'Custom API Development',
                    'Analytics Setup',
                  ].map((addon, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-cyan/10 text-primary-700 rounded-xl text-sm font-medium border border-primary-100"
                    >
                      {addon}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-primary-50 via-accent-cyan/10 to-accent-teal/10 border border-primary-100 overflow-hidden transition-transform hover:scale-105">
                <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-primary-400/60 animate-pulse" />
                <Sparkles className="absolute -bottom-2 -right-2 w-6 h-6 text-accent-teal/60 animate-pulse" />

                <Gif
                  src="/gifs/website-demo.webp"
                  alt="Website demo animation"
                  className="pointer-events-none absolute -right-4 top-6 w-40 sm:w-48 opacity-70 rounded-xl shadow-lg"
                />

                <div className="rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white/40 relative p-6">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 flex-1 h-6 rounded-md bg-gray-100" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-lg mb-4">
                      <Code className="w-8 h-8" />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Custom Solutions</p>
                    <p className="text-gray-600">Built for Your Success</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Next.js', 'Tailwind', 'SEO'].map((t, i) => (
                        <span
                          key={t}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-primary-50 to-accent-cyan/20 text-primary-700 ring-1 ring-primary-100 ${
                            i === 0 ? 'animate-pulse' : ''
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 space-y-2 relative">
                      <div className="h-2.5 bg-gray-100 rounded-md w-9/12" />
                      <div className="h-2.5 bg-gray-100 rounded-md w-7/12" />
                      <div className="h-2.5 bg-gray-100 rounded-md w-10/12" />
                      <span className="absolute right-6 top-1 h-5 w-0.5 bg-primary-600 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DIGITAL MARKETING */}
            <div className="grid md:grid-cols-2 gap-12 items-center observe-me opacity-0">
              <div className="order-2 md:order-1 relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-accent-cyan/10 via-accent-teal/10 to-primary-50 border border-accent-cyan/30 overflow-hidden transition-transform hover:scale-105">
                <Gif
                  src="/gifs/marketing-demo.webp"
                  alt="Marketing demo animation"
                  className="pointer-events-none absolute -left-3 -bottom-3 w-36 sm:w-40 opacity-70 rounded-xl shadow-lg"
                />

                <div className="rounded-2xl bg-slate-900 text-white shadow-2xl border border-white/10 relative">
                  <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sm text-white/80">Campaign Live</span>
                    </div>
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-12 gap-1 h-24 items-end">
                      {[
                        25, 48, 38, 52, 70, 60, 78, 68, 85, 72, 95, 100,
                      ].map((h, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-emerald-500/50 to-emerald-300/90 rounded-t-md transition-all duration-700"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>

                    <div className="mt-6">
                      <svg viewBox="0 0 200 60" className="w-full h-14">
                        <path
                          d="M2,58 C25,40 40,48 60,34 C78,22 95,26 110,20 C128,12 145,10 198,6"
                          fill="none"
                          stroke="rgba(16,185,129,0.9)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        >
                          <animate
                            attributeName="stroke-dasharray"
                            from="0,500"
                            to="500,0"
                            dur="2s"
                            fill="freeze"
                          />
                        </path>
                      </svg>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Leads ↑', 'CTR ↑', 'ROI+'].map((k, i) => (
                        <span
                          key={k}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-white/10 text-white ring-1 ring-white/10 ${
                            i === 0 ? 'animate-pulse' : ''
                          }`}
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan to-accent-teal rounded-2xl flex items-center justify-center shadow-lg">
                    <Megaphone className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent">
                    Digital Marketing
                  </h2>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Boost your online visibility and drive qualified traffic with strategic
                  digital marketing campaigns. We create and execute data-driven
                  strategies that deliver measurable ROI.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Deliverables:</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Social Media Strategy & Management',
                    'Content Marketing & Creation',
                    'SEO & Local Search Optimization',
                    'Email Marketing Campaigns',
                    'Performance Analytics & Reporting',
                    'Ad Campaign Management',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-teal mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Add-ons Available:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Influencer Partnerships',
                    'Video Marketing',
                    'Conversion Rate Optimization',
                    'Marketing Automation',
                    'Reputation Management',
                  ].map((addon, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-accent-cyan/10 to-accent-teal/10 text-accent-cyan rounded-xl text-sm font-medium border border-accent-cyan/30"
                    >
                      {addon}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BRANDING & DESIGN */}
            <div className="grid md:grid-cols-2 gap-12 items-center observe-me opacity-0">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-purple to-accent-pink rounded-2xl flex items-center justify-center shadow-lg">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
                    Branding & Design
                  </h2>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Create a memorable brand identity that resonates with your target
                  audience. From logos to complete brand guidelines, we craft cohesive
                  visual identities that stand out.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Deliverables:</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Logo Design & Variations',
                    'Brand Color Palette',
                    'Typography System',
                    'Brand Guidelines Document',
                    'Business Card Design',
                    'Social Media Templates',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-teal mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Add-ons Available:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Packaging Design',
                    'Marketing Collateral',
                    'Brand Photography',
                    'Presentation Templates',
                    'Signage Design',
                  ].map((addon, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 text-accent-purple rounded-xl text-sm font-medium border border-accent-purple/30"
                    >
                      {addon}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-accent-purple/10 via-accent-pink/10 to-primary-50 border border-accent-purple/30 overflow-hidden transition-transform hover:scale-105">
                <Gif
                  src="/gifs/branding-demo.webp"
                  alt="Branding demo animation"
                  className="pointer-events-none absolute -right-4 -top-3 w-36 sm:w-40 opacity-70 rounded-xl shadow-lg"
                />

                <div className="rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white/40 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink text-white flex items-center justify-center font-bold animate-spin">
                        WS
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Brand Kit</p>
                        <p className="text-sm text-gray-500">Moodboard Preview</p>
                      </div>
                    </div>
                    <Type className="w-6 h-6 text-accent-purple" />
                  </div>

                  <div className="grid grid-cols-5 gap-3 mb-6">
                    {['#2563EB', '#06B6D4', '#10B981', '#8B5CF6', '#EC4899'].map((hex, i) => (
                      <div key={hex} className="flex flex-col items-center">
                        <div
                          className={`h-10 w-10 rounded-full ring-2 ring-gray-100 shadow ${
                            i === 0 ? 'animate-pulse' : ''
                          }`}
                          style={{ backgroundColor: hex }}
                        />
                        <span className="mt-1 text-[11px] text-gray-500">{hex}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center shadow-inner">
                        <span className="text-2xl font-semibold">Aa</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Poppins / Inter</p>
                        <p className="text-xs text-gray-500">Headline & Body pairing</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2.5 bg-white rounded-md w-10/12 shadow-sm" />
                      <div className="h-2.5 bg-white rounded-md w-7/12 shadow-sm" />
                      <div className="h-2.5 bg-white rounded-md w-9/12 shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MORE SERVICES WE OFFER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 observe-me opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                More Services We Offer
              </span>
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Add-on capabilities tailored to your goals
            </p>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary-600 via-accent-cyan to-accent-teal" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Custom Apps', icon: Braces },
              { title: 'Chatbots', icon: Search },
              { title: 'Custom Softwares', icon: Share2},
              { title: 'Content Creation', icon: PenTool},
              { title: 'UI/UX Design', icon: Layout},
              { title: 'Mobile Optimization', icon: Smartphone},
            ].map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white/90 backdrop-blur-xl border border-white/70 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 px-5 py-6 sm:px-6 sm:py-7"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-cyan/20 text-primary-600 flex items-center justify-center ring-1 ring-primary-100 shadow-sm mb-3">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-800 leading-snug">
                    {s.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 observe-me opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let’s discuss which services are right for your business
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-2xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}
