'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    message: '',
  });
  
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('✅ Request submitted successfully! We will contact you shortly.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceNeeded: '',
          message: '',
        });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('❌ Error submitting request. Please try again.');
      }
    } catch (error) {
      setStatus('❌ Error submitting request. Please contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="bg-gradient-to-r from-safari-gold to-teal text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold mb-4">Request Our Services</h1>
          <p className="text-xl">Contact us today and let's discuss how Atlas can help you.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 bg-cream p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="fullName" className="block text-lg font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-safari-gold"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-safari-gold"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-semibold mb-2">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-safari-gold"
                placeholder="+254 XXX XXX XXX"
              />
            </div>

            <div>
              <label htmlFor="serviceNeeded" className="block text-lg font-semibold mb-2">
                Service Needed
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-safari-gold"
              >
                <option value="">Select a service...</option>
                <option value="Property Management">Property Management</option>
                <option value="Concierge Services">Concierge Services</option>
                <option value="Expat Relocation">Expat Relocation & Settlement</option>
                <option value="Travel Planning">Travel Planning & Tourism</option>
                <option value="Multiple Services">Multiple Services</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-safari-gold"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>

            {status && (
              <div className={`p-4 rounded-lg text-center ${status.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full cta-button text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Request Consultation'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>+254 741 290 354</p>
              <p>+254 733 290 354</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>atlasglobalserviceske@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p>24/7 Concierge Support</p>
              <p className="text-safari-gold mt-2">Click the floating button</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
