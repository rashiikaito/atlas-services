import Link from 'next/link';

export default function ConciergePage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-safari-gold to-teal text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold mb-4">Personal & Home Concierge</h1>
          <p className="text-xl">Atlas provides trusted people to help with everyday tasks and personal services.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-8">Our Services</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-bold mb-6">Home Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'House cleaning',
                'Laundry services',
                'Nannies and house helps',
                'Cooking and chef services',
                'Home maintenance technicians',
                'Electricians',
                'Plumbers',
                'Mechanics',
                'Internet installation and support',
                'Professional caregivers'
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                  <span className="text-safari-gold text-2xl">✓</span>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-bold mb-6">Personal Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Personal masseuse',
                'Beauticians',
                'Tattoo artists',
                'Barbers',
                'Salon and nail technicians'
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                  <span className="text-safari-gold text-2xl">✓</span>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-bold mb-6">Daily Life Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Errands runners',
                'Delivery services',
                'Personal assistants',
                'Phone call handlers',
                'Secretaries',
                'Document follow-up assistance'
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                  <span className="text-safari-gold text-2xl">✓</span>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Event & Lifestyle Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Event planning',
                'Event coordination',
                'Event security and bouncers',
                'Clean-up and restoration crews'
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                  <span className="text-safari-gold text-2xl">✓</span>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal to-safari-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Let Us Handle Your Daily Tasks</h2>
          <button className="bg-white text-teal px-8 py-3 rounded-lg font-bold text-lg hover:bg-cream">
            <Link href="/contact">Request Concierge Services</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
