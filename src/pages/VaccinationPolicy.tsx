import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';

function VaccinationPolicy() {
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
            <Heart className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Vaccination Policy</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <p className="text-lg text-gray-700">
              At Gowtham Cloud Solutions, the health and well-being of our employees are of utmost importance. As a fully remote company, we have adopted a No Vaccine Required Policy, meaning employees are not required to be vaccinated for COVID-19 or other illnesses to work with us.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              However, we strongly recommend all team members consider vaccination as part of maintaining their personal health and safety.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">1. No Vaccine Mandate</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">Employees are not required to provide proof of vaccination or take any vaccinations as a condition for employment at Gowtham Cloud Solutions.</p>
                <p className="text-gray-700">We respect individual choices regarding health and medical decisions.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">2. Health and Safety Recommendation</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">While vaccination is not required, we recommend that employees:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Stay informed about current health guidelines</li>
                  <li>Follow recommendations from health authorities</li>
                  <li>Consider vaccination as a preventive measure</li>
                  <li>Make informed decisions about personal health</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">3. Remote Work Environment</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">Our remote work environment provides several advantages:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>No in-person interaction required</li>
                  <li>Minimal risk of workplace transmission</li>
                  <li>Flexible and safe work environment</li>
                  <li>Support for all employees regardless of vaccination status</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">4. Personal Responsibility</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">We encourage our employees to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Make informed decisions about their health</li>
                  <li>Consult healthcare professionals when needed</li>
                  <li>Maintain regular health check-ups</li>
                  <li>Adopt preventive health measures</li>
                </ul>
              </div>
            </section>

            <div className="bg-blue-50 p-6 rounded-lg mt-12">
              <p className="text-lg text-gray-700">
                At Gowtham Cloud Solutions, we support our employees' health and freedom of choice while ensuring that remote work remains a safe and effective way to contribute to our team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default VaccinationPolicy;