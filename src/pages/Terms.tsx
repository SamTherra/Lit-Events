import React from 'react';

function Terms() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gold">Terms & Conditions</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using Lit Events' services, you agree to be bound by these Terms and 
              Conditions and our Privacy Policy. If you disagree with any part of these terms, you 
              may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Service Description</h2>
            <p className="mb-4">
              Lit Events provides premium bar and beverage services for events. Our services include 
              bartending, drink preparation, and related services as agreed upon in individual service 
              contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Booking and Cancellation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bookings require a deposit to secure the date</li>
              <li>Cancellations must be made at least 30 days before the event</li>
              <li>Refund policy varies based on timing of cancellation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Alcohol Service Policies</h2>
            <p className="mb-4">
              We comply with all Canadian laws and regulations regarding alcohol service, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Smart Serve certification requirements</li>
              <li>Legal drinking age verification</li>
              <li>Responsible service practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Liability</h2>
            <p className="mb-4">
              Lit Events maintains appropriate insurance coverage. However, we are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Guest behavior or accidents</li>
              <li>Third-party vendor issues</li>
              <li>Force majeure events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to our website. Continued use of our services constitutes 
              acceptance of modified terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;