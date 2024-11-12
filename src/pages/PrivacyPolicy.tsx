import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => window.location.href = '/'} 
            className="inline-flex items-center text-white hover:text-blue-200 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <div className="flex items-center gap-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl mt-4">Last Updated: 12th Nov 2024</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            At Gowtham Cloud Solutions Pvt Ltd, we prioritize your privacy and are committed to safeguarding the information you entrust to us. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of personal information when you interact with us, use our services, or visit our website.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Quick Summary</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                We collect only necessary information to provide our services
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                Your data is never sold to third parties
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                We implement robust security measures to protect your information
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                You have control over your data and can request access or deletion
              </li>
            </ul>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Contact details: Name, email address, phone number, and postal address</li>
                    <li>Employment Information: Job titles, organization names, and professional qualifications</li>
                    <li>Financial Information: Payment details and transaction history</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Device Information: IP addresses, browser type, operating system</li>
                    <li>Usage Information: Pages visited, links clicked, browsing patterns</li>
                    <li>Cookies and Tracking: Used for website functionality and improvement</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and manage billing</li>
                <li>Communicate and provide support</li>
                <li>Personalize your experience</li>
                <li>Ensure legal compliance</li>
                <li>Conduct research and development</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Encryption of sensitive data</li>
                <li>Regular security audits</li>
                <li>Employee training on data protection</li>
                <li>Access controls and monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Gowtham Cloud Solutions Pvt Ltd</h3>
                <p className="text-gray-700">
                  Samatha Nagar, 10th Line<br />
                  Ongole - 523002
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:hr@gowthamcloudsolutions.com" className="text-blue-600 hover:text-blue-800">
                      hr@gowthamcloudsolutions.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+916303652991" className="text-blue-600 hover:text-blue-800">
                      +91 6303652991
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;