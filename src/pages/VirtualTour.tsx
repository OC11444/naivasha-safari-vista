import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import existing images
import luxurySuite from "@/assets/luxury-suite.jpg";
import wildlifeSafari from "@/assets/wildlife-safari.jpg";
import maasaiCulture from "@/assets/maasai-culture.jpg";

const VirtualTour = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const tourSlides = [
    {
      category: "Welcome to Your Virtual Tour",
      image: luxurySuite,
      title: "Luxury Accommodations",
      description: "Experience world-class comfort in our premium suites overlooking Lake Naivasha"
    },
    {
      category: "Wildlife & Animals",
      image: wildlifeSafari,
      title: "Safari Adventures", 
      description: "Encounter the Big Five and over 200 species in their natural habitat"
    },
    {
      category: "Cultural Experiences",
      image: maasaiCulture,
      title: "Authentic Maasai Culture",
      description: "Immerse yourself in traditional ceremonies and local customs"
    },
    {
      category: "Dining Excellence",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
      title: "Gourmet Kenyan Cuisine",
      description: "Savor nyama choma, fresh tilapia, and traditional delicacies"
    },
    {
      category: "Premium Amenities",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      title: "Luxury Facilities",
      description: "Spa, infinity pools, fitness center, and nature trails await"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < tourSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Tour completed, redirect to booking
      navigate("/#contact");
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={tourSlides[currentSlide].image}
          alt={tourSlides[currentSlide].title}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-glass border border-white/20 rounded-3xl p-8 animate-fade-in">
          <div className="mb-6">
            <span className="text-primary/80 text-sm font-medium tracking-wide uppercase">
              {tourSlides[currentSlide].category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4">
              {tourSlides[currentSlide].title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {tourSlides[currentSlide].description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-6">
            <div 
              className="bg-gradient-safari h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / tourSlides.length) * 100}%` }}
            ></div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="glass" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>

            <div className="flex gap-2">
              {tourSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="safari" 
              onClick={nextSlide}
              className="flex items-center gap-2"
            >
              {currentSlide === tourSlides.length - 1 ? 'Book Now' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Skip Tour */}
          <div className="mt-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-white/70 hover:text-white"
            >
              Skip Tour & Return to Main Page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;