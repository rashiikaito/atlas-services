import Link from 'next/link';

export default function TravelPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-safari-gold to-teal text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold mb-4">Travel & Tourism Management</h1>
          <p className="text-xl">Atlas helps visitors explore Kenya, Uganda, and Tanzania with trusted travel planning and local guides.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-12">Popular Destinations</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-bold mb-6">Kenya Safari Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Maasai Mara',
                'Diani Beach',
                'Amboseli National Park',
                'Lamu',
                'Mombasa',
                'Mount Kenya',
                'Mount Longonot'
              ].map((destination) => (
                <div key={destination} className="flex items-center gap-3 p-4 bg-cream rounded-lg border-l-4 border-safari-gold">
                  <span className="text-safari-gold text-2xl">🌍</span>
                  <span className="text-lg font-semibold">{destination}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-bold mb-6">Tanzania Safari Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Zanzibar',
                'Serengeti National Park',
                'Ngorongoro Conservation Area',
                'Mount Kilimanjaro',
                'Arusha',
                'Dar es Salaam',
                'Ruaha & Nyerere Parks'
              ].map((destination) => (
                <div key={destination} className="flex items-center gap-3 p-4 bg-cream rounded-lg border-l-4 border-teal">
                  <span className="text-teal text-2xl">🌍</span>
                  <span className="text-lg font-semibold">{destination}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-bold mb-6">Uganda Adventure Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Kampala',
                'Jinja',
                'Murchison Falls National Park',
                'Queen Elizabeth National Park',
                'Bwindi Impenetrable National Park',
                'Ssese Islands',
                'Rwenzori Mountains',
                'Lake Mburo'
              ].map((destination) => (
                <div key={destination} className="flex items-center gap-3 p-4 bg-cream rounded-lg border-l-4 border-safari-gold">
                  <span className="text-safari-gold text-2xl">🌍</span>
                  <span className="text-lg font-semibold">{destination}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8">Activities & Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Activities We Plan</h3>
              <ul className="space-y-3">
                <li>✓ Safaris</li>
                <li>✓ Hiking trips</li>
                <li>✓ Camping trips</li>
                <li>✓ Beach vacations</li>
                <li>✓ Club hopping experiences</li>
                <li>✓ Local cultural tours</li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-playfair font-bold mb-4">Transportation Services</h3>
              <ul className="space-y-3">
                <li>✓ Car hire services</li>
                <li>✓ Chauffeur services</li>
                <li>✓ Self-drive rental cars</li>
                <li>✓ Airport pickups</li>
                <li>✓ Guided tour transport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal to-safari-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Plan Your East African Adventure Today</h2>
          <button className="bg-white text-teal px-8 py-3 rounded-lg font-bold text-lg hover:bg-cream">
            <Link href="/contact">Request Travel Planning</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
