import Link from 'next/link';

export default function ExpatPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-safari-gold to-teal text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold mb-4">Expat & Business Local Intelligence</h1>
          <p className="text-xl">Moving to a new country or starting a business can be confusing. Atlas helps you navigate Kenya successfully.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8">Relocation & Settling-In Services</h2>
          <p className="text-lg mb-8 text-deep-charcoal">First 7 Days Support - We help expats and international clients settle in comfortably.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Airport pickup and relocation assistance',
              'SIM cards and mobile money setup',
              'KRA PIN registration',
              'NHIF / SHA and medical insurance setup',
              'Emergency support if needed',
              'Local drivers and transportation services',
              'Local and city orientation tours',
              'Cultural coaching and safety advice',
              'Company registration',
              'Housing assistance (apartments, offices)',
              'Understanding local payments and M-Pesa',
              'Business setup assistance'
            ].map((service) => (
              <div key={service} className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <span className="text-safari-gold text-2xl">✓</span>
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>

          <div className="service-card mb-8">
            <h3 className="text-2xl font-playfair font-bold mb-4">Typical Clients</h3>
            <p className="text-lg">NGO workers • UN staff • Startup founders • Diplomats • Investors • Expats and foreign professionals</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Visa & Work Permit Assistance</h3>
              <ul className="space-y-3">
                <li>✓ Work permits</li>
                <li>✓ Investor permits</li>
                <li>✓ Dependant passes</li>
                <li>✓ Document preparation</li>
                <li>✓ Application guidance</li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Business Support</h3>
              <ul className="space-y-3">
                <li>✓ Market entry guidance</li>
                <li>✓ Business connections</li>
                <li>✓ Finding reliable suppliers</li>
                <li>✓ Local regulatory guidance</li>
                <li>✓ Cultural and business advice</li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Verification & Risk Checks</h3>
              <ul className="space-y-3">
                <li>✓ Business legitimacy checks</li>
                <li>✓ Property verification</li>
                <li>✓ Supplier vetting</li>
                <li>✓ Scam risk checks</li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Property Management for Foreign Investors</h3>
              <ul className="space-y-3">
                <li>✓ Tenant management</li>
                <li>✓ Rent collection</li>
                <li>✓ Property maintenance</li>
                <li>✓ Airbnb management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal to-safari-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Settle in Kenya Successfully?</h2>
          <button className="bg-white text-teal px-8 py-3 rounded-lg font-bold text-lg hover:bg-cream">
            <Link href="/contact">Request Expat Support</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
