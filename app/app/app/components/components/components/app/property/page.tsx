import Link from 'next/link';

export default function PropertyPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-safari-gold to-teal text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold mb-4">Property & Estate Systems</h1>
          <p className="text-xl">We take care of homes, estates, ranches, and investment properties for homeowners, investors, and international clients.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8">Our Property Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Property Supervision</h3>
              <ul className="space-y-3">
                <li>✓ Property supervision</li>
                <li>✓ Estate maintenance coordination</li>
                <li>✓ Rent and tenant management</li>
                <li>✓ Property acquisition support</li>
                <li>✓ Security and surveillance oversight</li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Property Maintenance</h3>
              <ul className="space-y-3">
                <li>✓ Gardening and landscaping</li>
                <li>✓ Roof repairs and maintenance</li>
                <li>✓ Painting and finishing</li>
                <li>✓ Plumbing and electrical repairs</li>
                <li>✓ Swimming pool maintenance</li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Estate & Ranch Management</h3>
              <ul className="space-y-3">
                <li>✓ Stables management for horses</li>
                <li>✓ Grounds management</li>
                <li>✓ Security supervision</li>
                <li>✓ Estate administration</li>
                <li>✓ Fleet management for vehicles</li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Property Staff Placement</h3>
              <ul className="space-y-3">
                <li>✓ Nannies and house helps</li>
                <li>✓ Chefs and cooks</li>
                <li>✓ Drivers and chauffeurs</li>
                <li>✓ Security officers</li>
                <li>✓ Professional caregivers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal to-safari-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Ready for Professional Property Management?</h2>
          <button className="bg-white text-teal px-8 py-3 rounded-lg font-bold text-lg hover:bg-cream">
            <Link href="/contact">Request Property Consultation</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
