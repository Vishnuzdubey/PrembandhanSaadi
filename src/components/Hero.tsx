import { Button } from "@/components/ui/button";
import { Search, MapPin, Filter, Shield, Users, Heart, Star } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-couple.jpg";
import AuthModal from "./AuthModal";

const Hero = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleRegisterClick = () => {
    setShowAuthModal(true);
  };

  return (
    <>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful Indian wedding couple in traditional attire"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold/30 rounded-full animate-pulse" />
      <div className="absolute top-32 right-16 w-6 h-6 bg-rose/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-gold/40 rounded-full animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
          <Star className="w-4 h-4 text-gold fill-gold" />
          <span className="text-sm font-medium">India's Most Trusted Matrimonial Platform</span>
          <Star className="w-4 h-4 text-gold fill-gold" />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Find Your Perfect{" "}
          <span className="text-gold animate-shimmer bg-gradient-to-r from-gold via-white to-gold bg-[length:200%_100%] bg-clip-text text-transparent">
            Life Partner
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
          Connect with verified profiles from Gorakhpur and surrounding areas. 
          <br className="hidden md:block" />
          Join thousands of families who found their perfect match through us.
        </p>

        {/* Enhanced Search Form */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto border border-white/20">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Start Your Search</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Looking For */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose" />
                Looking for
              </label>
              <select className="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-background text-foreground focus:ring-2 focus:ring-rose focus:border-rose transition-all duration-200 font-medium">
                <option>Bride</option>
                <option>Groom</option>
              </select>
            </div>

            {/* Age Range */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Users className="w-4 h-4 text-rose" />
                Age Range
              </label>
              <select className="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-background text-foreground focus:ring-2 focus:ring-rose focus:border-rose transition-all duration-200 font-medium">
                <option>18-25 years</option>
                <option>26-30 years</option>
                <option>31-35 years</option>
                <option>36-40 years</option>
                <option>40+ years</option>
              </select>
            </div>

            {/* Caste */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose" />
                Caste
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <select className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200 bg-background text-foreground focus:ring-2 focus:ring-rose focus:border-rose transition-all duration-200 font-medium">
                  <option>Select Caste</option>
                  <option>Brahmin</option>
                  <option>Kshatriya</option>
                  <option>Vaishya</option>
                  <option>Shudra</option>
                  <option>Reddy</option>
                  <option>Patel</option>
                  <option>Iyer</option>
                  <option>Singh</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="flex-1 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleRegisterClick}
            >
              <Search className="mr-3 h-5 w-5" />
              Find Matches
            </Button>
            <Button 
              variant="elegant" 
              size="xl" 
              className="h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleRegisterClick}
            >
              <Filter className="mr-3 h-5 w-5" />
              Advanced Search
            </Button>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10L+</div>
              <div className="text-sm text-white/90 font-medium">Verified Profiles</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">50K+</div>
              <div className="text-sm text-white/90 font-medium">Success Stories</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-white/90 font-medium">Privacy Protected</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-sm text-white/90 font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">SSL Secured • Privacy Guaranteed • Verified Profiles</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;