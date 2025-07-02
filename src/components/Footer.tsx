const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-safari bg-clip-text text-transparent mb-4">
              Naivasha Safari Lodge
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Experience the wild heart of Kenya at our luxury safari lodge on Lake Naivasha. 
              Where adventure meets comfort in the breathtaking Rift Valley.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                📷 Instagram
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                🐦 Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#rooms" className="text-background/80 hover:text-primary transition-colors">Accommodations</a></li>
              <li><a href="#experiences" className="text-background/80 hover:text-primary transition-colors">Experiences</a></li>
              <li><a href="#amenities" className="text-background/80 hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#location" className="text-background/80 hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>📍 Lake Naivasha, Kenya</p>
              <p>📞 +254 20 xxx xxxx</p>
              <p>✉️ info@naivashasafari.com</p>
              <p>🕒 24/7 Concierge</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Naivasha Safari Lodge. All rights reserved. | 
            <span className="ml-2">Privacy Policy | Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;