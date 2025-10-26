import { useEffect } from 'react';
import { Target, Eye, Heart, Users, Award, Clock, Shield, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About WingzSphere Tech | Empowering Local Businesses Digitally';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about WingzSphere Tech, a digital innovation agency in Nashik dedicated to empowering local businesses with cutting-edge web and marketing solutions.');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-me').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-accent-cyan/5 to-accent-teal/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 observe-me opacity-0">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About WingzSphere Tech
              </span>
            </h1>
            <p className="text-xl text-gray-700 observe-me opacity-0">
              Empowering businesses with innovative digital solutions since our inception
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="observe-me opacity-0">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  WingzSphere Tech was born from a simple yet powerful vision: to make world-class digital solutions accessible to local businesses across India. We recognized that many talented entrepreneurs and established businesses lacked the digital presence needed to thrive in today's connected world.
                </p>
                <p>
                  What started as a passion project has grown into a full-service digital agency, serving clients across India. Our team combines technical expertise with creative vision to deliver solutions that don't just look good—they drive real business results.
                </p>
                <p>
                  Based in the vibrant city of Nashik, Maharashtra, we're proud to be part of the local business community while serving clients nationwide. We understand the unique challenges and opportunities that Indian businesses face, and we're here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="observe-me opacity-0 bg-white rounded-3xl p-8 shadow-lg border border-primary-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower local businesses with cutting-edge digital solutions that level the playing field, enabling them to compete and succeed in the digital marketplace. We believe every business deserves a powerful online presence.
              </p>
            </div>

            <div className="observe-me opacity-0 bg-white rounded-3xl p-8 shadow-lg border border-accent-cyan/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan to-accent-teal rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become India's most trusted digital partner for small and medium businesses, known for delivering exceptional results, personalized service, and innovative solutions that transform businesses and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-me opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Our Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: 'Client-Centric', desc: 'Your success is our success. We listen, understand, and deliver solutions tailored to your unique needs.', color: 'from-primary-500 to-primary-600' },
              { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of trends and technologies to provide cutting-edge solutions that give you a competitive edge.', color: 'from-accent-cyan to-accent-teal' },
              { icon: Shield, title: 'Integrity', desc: 'Transparent pricing, honest communication, and ethical practices in everything we do.', color: 'from-accent-purple to-accent-pink' },
              { icon: Award, title: 'Excellence', desc: 'We set high standards and consistently deliver quality work that exceeds expectations.', color: 'from-accent-teal to-primary-500' },
            ].map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all observe-me opacity-0 border border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-me opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Why Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Local Expertise, Global Standards', desc: 'We understand the local market while applying international best practices to deliver world-class solutions.', color: 'from-primary-600 to-accent-cyan' },
              { icon: Award, title: 'Proven Track Record', desc: 'With number of successful projects and client satisfaction, our results speak for themselves.', color: 'from-accent-cyan to-accent-teal' },
              { icon: Clock, title: 'Timely Delivery', desc: 'We respect deadlines and ensure your project launches on schedule without compromising quality.', color: 'from-accent-teal to-primary-500' },
              { icon: Heart, title: 'Ongoing Support', desc: 'Our relationship doesn\'t end at launch. We provide continued support to ensure your long-term success.', color: 'from-accent-purple to-accent-pink' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all observe-me opacity-0 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 observe-me opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-2xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
