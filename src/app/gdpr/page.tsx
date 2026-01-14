import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance - Worldwide Football',
  description: 'Learn about our GDPR compliance and data protection practices.',
};

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">GDPR Compliance</h1>
          <p className="text-xl text-indigo-100">
            General Data Protection Regulation Information
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to GDPR</h2>
            <p className="text-gray-700 mb-4">
              Worldwide Football is committed to complying with the General Data Protection Regulation (GDPR), which protects the personal data and privacy of individuals in the European Union (EU) and European Economic Area (EEA).
            </p>
            <p className="text-gray-700">
              This page provides information about how we comply with GDPR requirements and explains your rights under GDPR.
            </p>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-3">We process your personal data under the following legal bases:</p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Consent (Article 6(1)(a))</h3>
                <p className="text-gray-700">
                  You have given clear consent for us to process your personal data for specific purposes, such as marketing communications or location services.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Contract (Article 6(1)(b))</h3>
                <p className="text-gray-700">
                  Processing is necessary to fulfill our contract with you when you use our tournament management services.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Legal Obligation (Article 6(1)(c))</h3>
                <p className="text-gray-700">
                  Processing is necessary to comply with applicable laws and regulations.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Legitimate Interests (Article 6(1)(f))</h3>
                <p className="text-gray-700">
                  Processing is necessary for our legitimate interests, such as fraud prevention, network security, and service improvement.
                </p>
              </div>
            </div>
          </section>

          {/* Your GDPR Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under GDPR</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Right to Access (Article 15)</h3>
                <p className="text-gray-700">
                  You have the right to request copies of your personal data. We may charge a small fee for this service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Right to Rectification (Article 16)</h3>
                <p className="text-gray-700">
                  You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Right to Erasure (Article 17)</h3>
                <p className="text-gray-700">
                  You have the right to request that we erase your personal data, under certain conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Right to Restrict Processing (Article 18)</h3>
                <p className="text-gray-700">
                  You have the right to request that we restrict the processing of your personal data, under certain conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Right to Data Portability (Article 20)</h3>
                <p className="text-gray-700">
                  You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Right to Object (Article 21)</h3>
                <p className="text-gray-700">
                  You have the right to object to our processing of your personal data, under certain conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">7. Rights Related to Automated Decision-Making (Article 22)</h3>
                <p className="text-gray-700">
                  You have the right not to be subject to a decision based solely on automated processing, including profiling.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection Officer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Officer</h2>
            <p className="text-gray-700 mb-4">
              We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact our DPO for any questions or concerns regarding data protection:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> dpo@worldwidefootball.com</p>
              <p className="text-gray-700"><strong>Subject Line:</strong> GDPR Inquiry - [Your Name]</p>
            </div>
          </section>

          {/* Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 mb-3">
              When we transfer personal data outside the EU/EEA, we ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions for countries deemed to provide adequate protection</li>
              <li>Binding Corporate Rules for intra-group transfers</li>
              <li>Additional security measures as required</li>
            </ul>
          </section>

          {/* Data Breach Notification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Breach Notification</h2>
            <p className="text-gray-700">
              In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify you and the relevant supervisory authority within 72 hours of becoming aware of the breach, as required by GDPR Article 33 and 34.
            </p>
          </section>

          {/* Exercising Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-700 mb-4">
              To exercise any of your GDPR rights, please:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li>Send an email to privacy@worldwidefootball.com or dpo@worldwidefootball.com</li>
              <li>Include your full name, email address, and specific request</li>
              <li>Provide proof of identity (for security purposes)</li>
              <li>We will respond to your request within 30 days</li>
            </ol>
            <p className="text-gray-700">
              If you are not satisfied with our response, you have the right to lodge a complaint with your local supervisory authority.
            </p>
          </section>

          {/* Supervisory Authority */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Supervisory Authority</h2>
            <p className="text-gray-700 mb-3">
              You have the right to lodge a complaint with a supervisory authority, in particular in the EU member state of your habitual residence, place of work, or place of the alleged infringement.
            </p>
            <p className="text-gray-700">
              For a list of supervisory authorities, please visit: <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-indigo-600 hover:text-indigo-500 underline" target="_blank" rel="noopener noreferrer">European Data Protection Board</a>
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to GDPR Compliance</h2>
            <p className="text-gray-700">
              We regularly review and update our GDPR compliance practices to ensure we meet all regulatory requirements. Any significant changes will be communicated through our Privacy Policy updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
