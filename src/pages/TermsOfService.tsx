import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';

function TermsOfService() {
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
            <Scale className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-xl mt-4">Effective Date: 12th Nov 2024</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <p className="text-lg text-gray-700">
              Welcome to Gowtham Cloud Solutions Pvt Ltd! These Terms of Service govern your access to and use of our services. By using our Services, you agree to these Terms. If you do not agree, please do not use our Services.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">1. Acceptance of Terms</h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <p className="text-gray-700">
                  By accessing or using our Services, you agree to be bound by these Terms and any additional terms and conditions that are referenced herein or that may apply to specific sections of the Services. You must be at least 18 years old to use our Services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">2. Description of Services</h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Gowtham Cloud Solutions Pvt Ltd provides a range of digital and technology services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Salesforce CRM implementation</li>
                  <li>AI Chatbot development</li>
                  <li>Website and mobile app development</li>
                  <li>Power BI reports and dashboards</li>
                  <li>Cloud services on Microsoft Azure and AWS</li>
                  <li>Digital marketing services and support</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">3. Account Registration</h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <p className="text-gray-700 mb-4">To use certain features of our Services, you may need to register an account. You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide accurate, complete, and updated information</li>
                  <li>Keep your account information secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">4. Intellectual Property Rights</h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <p className="text-gray-700">
                  All intellectual property, trademarks, copyrights, and proprietary rights in our Services belong to Gowtham Cloud Solutions Pvt Ltd or our licensors. You agree not to copy, modify, distribute, or reverse-engineer any part of our Services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">5. Limitation of Liability</h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <p className="text-gray-700">
                  To the maximum extent permitted by law, Gowtham Cloud Solutions Pvt Ltd shall not be liable for indirect, incidental, or consequential damages, including lost profits or data loss.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">6. Contact Information</h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Gowtham Cloud Solutions Pvt Ltd</h3>
                <p className="text-gray-700">
                  Samatha Nagar, 10th line<br />
                  Ongole - 523002
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:admin@gowthamcloudsolutions.com" className="text-blue-600 hover:text-blue-800">
                      admin@gowthamcloudsolutions.com
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

export default TermsOfService;