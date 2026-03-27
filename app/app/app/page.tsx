import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: '🏡',
      title: 'Property & Estate Systems',
      description: 'Property supervision, estate maintenance coordination, rent management, security oversight, and full property maintenance.',
      href: '/property',
    },
    {
      icon: '👤',
      title: 'Personal & Home Concierge',
      description: 'Household staff, personal services, caregivers, chefs, drivers, and trusted professionals for everyday needs.',
      href: '/concierge',
    },
    {
      icon: '🌍',
      title: 'Expat & Business Local Intelligence',
      description: 'Relocation support, business setup, housing assistance, visa help, and local guidance for expats and investors.',
      href: '/expat',
    },
    {
      icon: '✈️',
      title: 'Travel & Tourism Management',
      description: 'Safari planning, beach vacations, guided tours, car hire services, and travel logistics across Kenya.',
      href: '/travel',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 text-deep-charcoal">
            Atlas Managed Services™
          </h1>
          <p className="text-xl md:text-2xl text-deep-charcoal mb-8 leading-relaxed">
            Professional Property Management, Concierge Services, and Local Support in Kenya.
          </p>
          <p className="text-lg text-deep-charcoal mb-12 max-w-2xl mx-auto">
            We help property owners, expats, investors, and travelers manage homes, businesses, and daily life in Kenya with trusted local support.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="cta-button text-lg px-8 py-3">
              <Link href="/contact">Request Consultation</Link>
            </button>
            <button className="cta-button-secondary text-lg px-8 py-3">
              <a href="#services">Explore Our Services</a>
            </button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-8">What We Do</h2>
          <p className="text-center text-lg text-deep-charcoal max-w-3xl mx-auto mb-12">
            Atlas Managed Services provides reliable property management, concierge services, business support, and travel planning across Kenya. Whether you own a home, manage investments, or are visiting Kenya, we make everything easier by handling the logistics for you.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <div className="service-card cursor-pointer">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-playfair font-bold mb-4">{service.title}</h3>
                  <p className="text-deep-charcoal">{service.description}</p>
                  <div className="mt-4 text-safari-gold font-bold">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Atlas */}
      <section className="py-16 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Why Choose Atlas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl text-safari-gold">✔</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Trusted Local Professionals</h4>
                <p>We carefully select and verify all professionals in our network.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-safari-gold">✔</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Reliable Property Supervision</h4>
                <p>Full oversight of your property from routine maintenance to major works.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-safari-gold">✔</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Help for Expats & Investors</h4>
                <p>Complete relocation and business setup support for international clients.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-safari-gold">✔</div>
              <div>
                <h4 className="font-bold text-lg mb-2">24/7 Concierge Support</h4>
                <p>Round-the-clock assistance for all your needs in Kenya.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-safari-gold to-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Experience Reliable Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Atlas today to request a consultation and discover how we can help you manage property, relocate, or plan your next adventure in Kenya.
          </p>
          <button className="bg-white text-safari-gold px-8 py-3 rounded-lg font-bold text-lg hover:bg-cream">
            <Link href="/contact">Request Consultation</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
