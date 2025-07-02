import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import wildlifeSafari from "@/assets/wildlife-safari.jpg";
import maasaiCulture from "@/assets/maasai-culture.jpg";

const Experiences = () => {
  const experiences = [
    {
      title: "Big Five Safari",
      description: "Encounter lions, leopards, elephants, buffalo, and rhinos in their natural habitat",
      image: wildlifeSafari,
      duration: "Full Day",
      price: "$150",
      highlights: ["Professional Guide", "Game Drive Vehicle", "Lunch Included"]
    },
    {
      title: "Maasai Cultural Experience",
      description: "Immerse yourself in authentic Maasai traditions, dances, and village life",
      image: maasaiCulture,
      duration: "Half Day",
      price: "$80",
      highlights: ["Traditional Dance", "Village Tour", "Craft Workshop"]
    },
    {
      title: "Lake Naivasha Boat Safari",
      description: "Explore the lake's hippo pods and vibrant bird life from our luxury boats",
      image: wildlifeSafari,
      duration: "3 Hours",
      price: "$60",
      highlights: ["Hippo Watching", "Bird Spotting", "Sunset Views"]
    },
    {
      title: "Hell's Gate National Park",
      description: "Adventure through dramatic gorges and geothermal features on foot or bicycle",
      image: wildlifeSafari,
      duration: "Full Day",
      price: "$120",
      highlights: ["Rock Climbing", "Cycling", "Geothermal Springs"]
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unforgettable Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From thrilling wildlife encounters to rich cultural immersions, 
            discover the authentic spirit of Kenya through our curated experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-white/5 backdrop-blur-glass border border-white/10 hover:bg-white/10 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative overflow-hidden h-64 md:h-full">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-gradient-safari text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {experience.duration}
                      </span>
                      <span className="bg-gradient-sunset text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {experience.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{experience.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-foreground text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="safari" className="w-full">
                    Book Experience
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cultural Heritage Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-acacia rounded-3xl p-8 md:p-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Rich Cultural Heritage
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Kenya is home to over 40 distinct ethnic communities, each with unique traditions, 
              languages, and customs. Experience the vibrant tapestry of Kenyan culture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Maasai Warriors</h4>
                <p className="text-white/80">Traditional jumping dances and warrior ceremonies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Kikuyu Traditions</h4>
                <p className="text-white/80">Ancient farming practices and cultural rituals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Luo Heritage</h4>
                <p className="text-white/80">Fishing traditions and lakeside communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;