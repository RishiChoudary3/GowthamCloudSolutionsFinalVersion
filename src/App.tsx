import React from 'react';
import emailjs from '@emailjs/browser';
import { useState, FormEvent } from 'react';
import {
  Globe,
  MonitorSmartphone,
  Server,
  Users,
  Cpu,
  MessageSquare,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
} from 'lucide-react';
import Jobs from './pages/Jobs';
import ContactForm from './components/ContactForm';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileSolutions from './pages/services/MobileSolutions';
import CloudServices from './pages/services/CloudServices';
import ITConsulting from './pages/services/ITConsulting';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import AIChatbots from './pages/services/AIChatbots';
import PrivacyPolicy from './pages/PrivacyPolicy';
import WorkspacePolicy from './pages/WorkspacePolicy';
import VaccinationPolicy from './pages/VaccinationPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: 'success' | 'error' | '';
    message: string;
  }>({ type: '', message: '' });

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_62wq3qn',
        'template_5unuurb',
        {
          to_email: 'admin@gowthamcloudsolutions.com',
          subscriber_email: email,
        },
        'O3UTEkdxnZazWtF2E'
      );

      setNewsletterStatus({
        type: 'success',
        message: 'Thank you for subscribing to our newsletter!',
      });
      setEmail('');
    } catch (error) {
      setNewsletterStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again later.',
      });
    }
  };

  const socialLinks = {
    facebook: 'https://www.facebook.com/people/Gowtham-Cloud-Solutions-Pvt-Ltd/61568271632538/',
    instagram: 'https://www.instagram.com/gowtham_cloud_solutions/',
    linkedin: 'https://linkedin.com/company/gowthamcloudsolutions',
    twitter: 'https://twitter.com/',
    whatsapp: 'https://wa.me/916303652991'
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'jobs':
        return <Jobs />;
      case 'web-development':
        return <WebDevelopment />;
      case 'mobile-solutions':
        return <MobileSolutions />;
      case 'cloud-services':
        return <CloudServices />;
      case 'it-consulting':
        return <ITConsulting />;
      case 'software-development':
        return <SoftwareDevelopment />;
      case 'ai-chatbots':
        return <AIChatbots />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'workspace-policy':
        return <WorkspacePolicy />;
      case 'vaccination-policy':
        return <VaccinationPolicy />;
      case 'terms-of-service':
        return <TermsOfService />;
      default:
        return (
          <>
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://i.ibb.co/kSP50jk/gowtham-cloud-solutions-high-resolution-logo-transparent-1.png" 
                      alt="GC Logo" 
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-xl font-bold">Gowtham Cloud Solutions Pvt. Ltd.</span>
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <button onClick={() => setCurrentPage('home')} className="hover:text-blue-200 transition">
                      Home
                    </button>
                    <a href="#services" className="hover:text-blue-200 transition">
                      Services
                    </a>
                    <a href="#about" className="hover:text-blue-200 transition">
                      About
                    </a>
                    <button onClick={() => setCurrentPage('jobs')} className="hover:text-blue-200 transition">
                      Jobs
                    </button>
                    <a href="#contact" className="hover:text-blue-200 transition">
                      Contact
                    </a>
                  </div>
                </div>
              </nav>

              <div className="container mx-auto px-6 py-24">
                <div className="max-w-3xl">
                  <h1 className="text-5xl font-bold mb-6">
                    Transforming Businesses Through Technology
                  </h1>
                  <p className="text-xl mb-8">
                    We deliver innovative IT solutions that drive growth and
                    efficiency for businesses of all sizes.
                  </p>
                  <button
                    onClick={scrollToServices}
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </header>

            {/* Services Section */}
            <section id="services" className="py-20">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Web Development',
                      description: 'Custom web applications and responsive websites',
                      icon: Globe,
                      page: 'web-development',
                    },
                    {
                      title: 'Mobile Solutions',
                      description: 'Native and cross-platform mobile applications',
                      icon: MonitorSmartphone,
                      page: 'mobile-solutions',
                    },
                    {
                      title: 'Cloud Services',
                      description: 'Secure and scalable cloud infrastructure',
                      icon: Server,
                      page: 'cloud-services',
                    },
                    {
                      title: 'IT Consulting',
                      description: 'Strategic technology consulting and support',
                      icon: Users,
                      page: 'it-consulting',
                    },
                    {
                      title: 'Software Development',
                      description: 'Custom software solutions for your business',
                      icon: Cpu,
                      page: 'software-development',
                    },
                    {
                      title: 'AI Chatbots',
                      description: 'Intelligent conversational AI solutions',
                      icon: MessageSquare,
                      page: 'ai-chatbots',
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <button
                        onClick={() => setCurrentPage(service.page)}
                        className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-gray-50 py-20">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <p className="text-gray-600 mb-8">
                      Gowtham Cloud Solutions Pvt. Ltd. is a leading IT services company
                      dedicated to helping businesses leverage technology for growth
                      and success. With our expertise in various domains, we deliver
                      innovative solutions that drive digital transformation.
                    </p>
                    <div className="grid grid-cols-3 gap-8 mb-8">
                      <div className="text-center p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-3xl font-bold text-blue-600 mb-2">100+</h3>
                        <p className="text-gray-600">Projects</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
                        <p className="text-gray-600">Clients</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-3xl font-bold text-blue-600 mb-2">10+</h3>
                        <p className="text-gray-600">Years</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p>Industry-leading expertise in modern technologies</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p>Dedicated team of skilled professionals</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p>Commitment to delivering exceptional results</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      alt="Team collaboration"
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Have a question or want to work together? We'd love to hear from you.
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                    <ContactForm />
                  </div>

                  <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <a href="mailto:support@gowthamcloudsolutions.com" className="hover:text-blue-200 transition">
                            support@gowthamcloudsolutions.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <a href="tel:+916303652991" className="hover:text-blue-200 transition">
                            +91 6303652991
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6" />
                        <div>
                          <p className="font-semibold">Location</p>
                          <p>Ongole, Andhra Pradesh, India</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-blue-500">
                      <h4 className="font-semibold mb-4">Follow Us</h4>
                      <div className="flex space-x-4">
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                          <Facebook className="w-6 h-6" />
                        </a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                          <Instagram className="w-6 h-6" />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                          <Twitter className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="hover:text-blue-200 transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-200 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-200 transition">
                    About
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('jobs')}
                    className="hover:text-blue-200 transition"
                  >
                    Jobs
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('web-development')}
                    className="hover:text-blue-200 transition"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('mobile-solutions')}
                    className="hover:text-blue-200 transition"
                  >
                    Mobile Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('cloud-services')}
                    className="hover:text-blue-200 transition"
                  >
                    Cloud Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('it-consulting')}
                    className="hover:text-blue-200 transition"
                  >
                    IT Consulting
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('software-development')}
                    className="hover:text-blue-200 transition"
                  >
                    Software Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('ai-chatbots')}
                    className="hover:text-blue-200 transition"
                  >
                    AI Chatbots
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('privacy-policy')}
                    className="hover:text-blue-200 transition"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('terms-of-service')}
                    className="hover:text-blue-200 transition"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('workspace-policy')}
                    className="hover:text-blue-200 transition"
                  >
                    Workspace Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('vaccination-policy')}
                    className="hover:text-blue-200 transition"
                  >
                    Vaccination Policy
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                {newsletterStatus.message && (
                  <div
                    className={`p-2 rounded ${
                      newsletterStatus.type === 'success'
                        ? 'bg-green-600'
                        : 'bg-red-600'
                    }`}
                  >
                    {newsletterStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8">
            <div className="text-center">
              <p>© 2024 Gowtham Cloud Solutions Pvt Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;