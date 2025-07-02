import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Location = () => {
  const highlights = [
    {
      title: "Lake Naivasha",
      description: "Freshwater lake teeming with hippos, flamingos, and over 400 bird species",
      distance: "Lakefront Location"
    },
    {
      title: "Hell's Gate National Park",
      description: "Dramatic landscape of towering cliffs, gorges, and geothermal features",
      distance: "15 minutes drive"
    },
    {
      title: "Mount Longonot",
      description: "Dormant volcano offering spectacular hiking and panoramic Rift Valley views",
      distance: "30 minutes drive"
    },
    {
      title: "Crescent Island",
      description: "Walking safari sanctuary where you can walk freely among zebras and giraffes",
      distance: "20 minutes boat ride"
    }
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Heart of Rift Valley
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nestled on the shores of Lake Naivasha in Kenya's Great Rift Valley, 
            our resort offers unparalleled access to some of Africa's most iconic landscapes.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16 animate-scale-in">
          <Card className="overflow-hidden bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="relative h-96 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">Explore our location and nearby attractions</p>
                <Button variant="safari">
                  View Full Map
                </Button>
              </div>
              
              {/* Location Markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </Card>
        </div>

        {/* Location Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/5 backdrop-blur-glass border border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">{highlight.title}</h3>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {highlight.distance}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
            </Card>
          ))}
        </div>

        {/* Getting Here */}
        <div className="bg-gradient-acacia rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Getting to Paradise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
              <div className="text-3xl mb-4">✈️</div>
              <h4 className="text-xl font-bold text-white mb-3">By Air</h4>
              <p className="text-white/90 mb-4">
                Fly into Jomo Kenyatta International Airport (NBO), then enjoy our luxury transfer service
              </p>
              <p className="text-white/70 text-sm">2 hours from Nairobi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
              <div className="text-3xl mb-4">🚁</div>
              <h4 className="text-xl font-bold text-white mb-3">By Helicopter</h4>
              <p className="text-white/90 mb-4">
                Private helicopter transfers available for the ultimate luxury experience
              </p>
              <p className="text-white/70 text-sm">45 minutes from Nairobi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
              <div className="text-3xl mb-4">🚗</div>
              <h4 className="text-xl font-bold text-white mb-3">By Road</h4>
              <p className="text-white/90 mb-4">
                Scenic drive through the Rift Valley with our chauffeur service
              </p>
              <p className="text-white/70 text-sm">1.5 hours from Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;