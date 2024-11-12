import React from 'react';
import { ArrowLeft, Briefcase } from 'lucide-react';

function WorkspacePolicy() {
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
            <Briefcase className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Workspace Policy</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <p className="text-lg text-gray-700">
              At Gowtham Cloud Solutions, we are committed to providing a flexible and productive work environment through our Remote Workspace Policy. This policy is designed to ensure that our employees can work effectively and efficiently from any location while maintaining high standards of security, collaboration, and performance.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">1. Eligibility for Remote Work</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">All full-time, part-time, and contract employees are eligible for remote work, depending on job requirements and team collaboration needs.</p>
                <p className="text-gray-700">Managers will determine the suitability of remote work based on the role and employee performance.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">2. Workspace Setup</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">Employees are expected to set up a workspace that is conducive to productivity, with:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access to reliable internet</li>
                  <li>Necessary equipment</li>
                  <li>Quiet environment</li>
                </ul>
                <p className="text-gray-700">Gowtham Cloud Solutions will provide access to required software, tools, and resources to perform tasks efficiently.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">3. Security and Confidentiality</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">All employees must adhere to the company's security protocols, including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Using company-approved devices</li>
                  <li>Utilizing VPNs</li>
                  <li>Following security measures</li>
                </ul>
                <p className="text-gray-700">Sensitive company data and client information must be handled with care, ensuring that confidentiality is maintained at all times.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">4. Communication and Collaboration</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">Employees are expected to maintain regular communication using approved platforms:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Slack</li>
                  <li>Microsoft Teams</li>
                  <li>Zoom</li>
                </ul>
                <p className="text-gray-700">Daily check-ins, project updates, and meetings should be conducted as per the team's schedule to ensure seamless collaboration.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">5. Performance Expectations</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">Remote employees are expected to maintain the same level of productivity and accountability as they would in a physical office.</p>
                <p className="text-gray-700">Deadlines, project deliverables, and performance metrics will be closely monitored to ensure the continued success of our operations.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">6. Work Hours</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">Remote employees should adhere to their standard work hours unless otherwise approved by their manager.</p>
                <p className="text-gray-700">Flexible schedules may be permitted based on role requirements and team coordination.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">7. Compliance and Review</h2>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <p className="text-gray-700">All remote employees are expected to comply with this policy and other company guidelines.</p>
                <p className="text-gray-700">This policy will be reviewed periodically to ensure that it meets the evolving needs of our team and business.</p>
              </div>
            </section>

            <div className="bg-blue-50 p-6 rounded-lg mt-12">
              <p className="text-lg text-gray-700">
                At Gowtham Cloud Solutions, we value the importance of flexibility and work-life balance, and our remote workspace policy is designed to empower our employees to deliver their best work from anywhere.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WorkspacePolicy;