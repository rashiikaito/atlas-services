export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-safari-gold font-playfair text-xl mb-4">Atlas Services</h3>
            <p className="text-gray-300">Your trusted operations partner in Kenya, Uganda, and Tanzania.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/">Home</a></li>
              <li><a href="/property">Property Management</a></li>
              <li><a href="/concierge">Concierge Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/property">Estate Systems</a></li>
              <li><a href="/concierge">Home Concierge</a></li>
              <li><a href="/expat">Expat Support</a></li>
              <li><a href="/travel">Travel Planning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">📞 +254 741 290 354</p>
            <p className="text-gray-300 mb-2">📧 atlasglobalserviceske@gmail.com</p>
            <p className="text-gray-300">💬 WhatsApp 24/7</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Atlas Managed Services. All rights reserved.</p>
          <p className="text-sm mt-2">Operating in Kenya, Uganda, and Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
