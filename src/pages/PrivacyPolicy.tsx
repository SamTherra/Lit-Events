import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gold">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="mb-4">
              At Lit Events, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you 
              use our services or visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Event details and preferences</li>
              <li>Payment information</li>
              <li>Website usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you about your events</li>
              <li>To process payments</li>
              <li>To send marketing communications (with consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Protection</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information in accordance 
              with PIPEDA (Personal Information Protection and Electronic Documents Act) and other applicable 
              Canadian privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
            <p className="mb-4">Under Canadian privacy laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Withdraw consent for data processing</li>
              <li>Request deletion of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
            <p>
              For any privacy-related questions or concerns, please contact us at:
              <br />
              Email: privacy@litevents.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;