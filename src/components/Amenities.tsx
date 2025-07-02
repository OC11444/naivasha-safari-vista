import { Card } from "@/components/ui/card";

const Amenities = () => {
  const amenities = [
    {
      icon: "🏊‍♀️",
      title: "Infinity Pool",
      description: "Panoramic infinity pool overlooking Lake Naivasha with swim-up bar"
    },
    {
      icon: "🧘‍♀️",
      title: "Spa & Wellness",
      description: "Full-service spa with traditional African treatments and modern therapies"
    },
    {
      icon: "🏋️‍♂️",
      title: "Fitness Center",
      description: "State-of-the-art gym with panoramic views and personal trainer services"
    },
    {
      icon: "🍽️",
      title: "Gourmet Dining",
      description: "Fine dining restaurant featuring Kenyan cuisine and international flavors"
    },
    {
      icon: "📶",
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the resort"
    },
    {
      icon: "🚁",
      title: "Helicopter Tours",
      description: "Aerial tours of the Rift Valley and Mount Longonot"
    },
    {
      icon: "🎣",
      title: "Lake Activities",
      description: "Fishing, boat tours, and water sports on Lake Naivasha"
    },
    {
      icon: "🌿",
      title: "Nature Walks",
      description: "Guided walking trails through acacia forests and wildlife corridors"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail has been carefully considered to ensure your stay exceeds expectations. 
            Relax, rejuvenate, and reconnect with nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card 
              key={index}
              className="group p-6 text-center bg-white/10 backdrop-blur-glass border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{amenity.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
            </Card>
          ))}
        </div>

        {/* Premium Services */}
        <div className="mt-20 bg-gradient-safari rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Premium Concierge Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">24/7 Butler Service</h4>
              <p className="text-white/90">
                Personal butler available around the clock for all your needs
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Private Safari Guide</h4>
              <p className="text-white/90">
                Dedicated wildlife expert for personalized safari experiences
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Airport Transfer</h4>
              <p className="text-white/90">
                Luxury transport to and from Jomo Kenyatta International Airport
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;