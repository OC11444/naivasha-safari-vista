import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-naivasha.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Naivasha Safari Lodge overlooking Rift Valley"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Wildlife Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Experience the
            <span className="block bg-gradient-safari bg-clip-text text-transparent">
              Wild Heart of Kenya
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Luxury meets wilderness at Lake Naivasha's premier safari lodge. 
            Witness majestic wildlife in the iconic Rift Valley.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="booking" size="xl" className="animate-scale-in">
              Book Your Safari
            </Button>
            <Button variant="glass" size="xl" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              Virtual Tour
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up">
          {[
            { number: "5★", label: "Luxury Resort" },
            { number: "200+", label: "Wildlife Species" },
            { number: "24/7", label: "Safari Adventures" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-glass border border-white/20 rounded-2xl p-6 text-center"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;