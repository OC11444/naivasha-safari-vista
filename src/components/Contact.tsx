import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Booking inquiry:", formData);
  };

  const paymentMethods = [
    { name: "Visa/Mastercard", icon: "💳", description: "International credit cards accepted" },
    { name: "M-Pesa", icon: "📱", description: "Kenya's leading mobile payment" },
    { name: "Bitcoin", icon: "₿", description: "Cryptocurrency payments welcome" },
    { name: "Ethereum", icon: "Ξ", description: "ETH payments accepted" },
    { name: "USDT", icon: "₮", description: "Stable coin transactions" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Plan Your Safari Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the magic of Kenya? Get in touch with our safari specialists 
            to create your perfect wildlife getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-glass border border-white/20 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Book Your Stay</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="bg-white/5 border-white/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254 xxx xxx xxx"
                    className="bg-white/5 border-white/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Guests</label>
                  <Input
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Number of guests"
                    className="bg-white/5 border-white/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Dates</label>
                <Input
                  name="dates"
                  value={formData.dates}
                  onChange={handleInputChange}
                  placeholder="Check-in and check-out dates"
                  className="bg-white/5 border-white/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Special Requests</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your ideal safari experience..."
                  rows={4}
                  className="bg-white/5 border-white/20 focus:border-primary"
                />
              </div>

              <Button type="submit" variant="booking" className="w-full">
                Send Booking Inquiry
              </Button>
            </form>
          </Card>

          {/* Contact Information & Payment Methods */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 bg-white/10 backdrop-blur-glass border border-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Lake Naivasha, Nakuru County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+254 20 xxx xxxx</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">reservations@naivashasafari.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🕒</span>
                  <div>
                    <p className="font-medium text-foreground">Reception Hours</p>
                    <p className="text-muted-foreground">24/7 Concierge Service</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Payment Methods */}
            <Card className="p-8 bg-white/10 backdrop-blur-glass border border-white/20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Accepted Payment Methods</h3>
              <div className="grid grid-cols-1 gap-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-2xl mr-4">{method.icon}</span>
                    <div>
                      <p className="font-medium text-foreground">{method.name}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-safari rounded-lg">
                <p className="text-white text-sm text-center">
                  <strong>Secure Payments:</strong> All transactions are encrypted and processed through secure payment gateways
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-gradient-sunset rounded-3xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-4">24/7 Emergency Support</h3>
          <p className="text-white/90 mb-6">
            Our team is available around the clock to ensure your safety and comfort during your stay.
          </p>
          <Button variant="glass" size="lg">
            Emergency Hotline: +254 xxx xxx xxx
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;