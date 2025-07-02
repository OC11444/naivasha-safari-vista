import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import luxurySuite from "@/assets/luxury-suite.jpg";

const Accommodations = () => {
  const suites = [
    {
      name: "Rift Valley Villa",
      description: "Panoramic views of Lake Naivasha with private infinity pool and butler service",
      features: ["Private Pool", "Butler Service", "Panoramic Views", "2 Bedrooms"],
      price: "$1,200",
      image: luxurySuite
    },
    {
      name: "Safari Tent Suite",
      description: "Luxury tented accommodation with glass walls overlooking the savanna",
      features: ["Glass Walls", "Private Deck", "Wildlife Views", "King Bed"],
      price: "$800",
      image: luxurySuite
    },
    {
      name: "Lake View Lodge",
      description: "Waterfront suite with direct access to lake activities and boat tours",
      features: ["Lake Access", "Boat Tours", "Spa Access", "Queen Bed"],
      price: "$600",
      image: luxurySuite
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled comfort in our carefully designed suites, 
            each offering unique perspectives of Kenya's breathtaking landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suites.map((suite, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-white/10 backdrop-blur-glass border border-white/20 hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={suite.image} 
                  alt={suite.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-safari text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {suite.price}/night
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{suite.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{suite.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {suite.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="safari" className="w-full">
                  Reserve Suite
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;