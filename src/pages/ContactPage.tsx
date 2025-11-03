import { useEffect, useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    honeypot: '' // used as botcheck for Web3Forms
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.title = "Contact WingzSphere Tech | Let's Build Your Digital Presence";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Get in touch with WingzSphere Tech. We're here to help you build a powerful digital presence. Contact us for a free consultation."
      );
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // simple bot trap
    if (formData.honeypot) return;

    // basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // ---------- 1) Send via Web3Forms (email to you) ----------
      const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;
      if (!WEB3_KEY) {
        throw new Error('Missing Web3Forms key. Set VITE_WEB3FORMS_KEY in env.');
      }

      const fd = new FormData();
      fd.append('access_key', WEB3_KEY);
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      if (formData.phone) fd.append('phone', formData.phone);
      if (formData.company) fd.append('company', formData.company);
      if (formData.service) fd.append('service', formData.service);
      fd.append('message', formData.message);

      // optional – helps Web3Forms
      fd.append('subject', 'New Contact Form Submission - WingzSphere Tech');
      fd.append('from_name', 'WingzSphere Tech Website');
      fd.append('botcheck', formData.honeypot); // honeypot

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd
      });
      const data = await res.json();

      if (!data.success) {
        console.error('Web3Forms error:', data);
        throw new Error('Failed to send message via Web3Forms.');
      }

      // ---------- 2) OPTIONAL: save a copy in Supabase ----------
      try {
        const { error } = await supabase.from('contact_submissions').insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            service_interest: formData.service || null,
            message: formData.message
          }
        ]);
        if (error) console.warn('Supabase insert warning:', error.message);
      } catch (dbErr) {
        console.warn('Supabase insert failed (non-blocking):', dbErr);
      }

      // success UI
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        honeypot: ''
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error('Submit error:', err);
      setStatus('error');
      setErrorMessage(
        err?.message || 'Failed to submit form. Please try again or contact us directly.'
      );
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-accent-cyan/5 to-accent-teal/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 observe-me opacity-0">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            <p className="text-xl text-gray-700 observe-me opacity-0">
              Ready to transform your digital presence? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="observe-me opacity-0">
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@wingzspheretech.in"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      contact@wingzspheretech.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-teal rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/917588535092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +91 75885 35092
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-pink rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Nashik, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-primary-50 via-accent-cyan/10 to-accent-teal/10 rounded-2xl border border-primary-100">
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-700">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>

            <div className="observe-me opacity-0">
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+91 12345 67890"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Branding">Branding</option>
                      <option value="Multiple Services">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Honeypot (bot) field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-800">{errorMessage}</p>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-green-800">Thank you! We'll get back to you soon.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full px-6 py-4 bg-gradient-primary text-white font-semibold rounded-xl shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
