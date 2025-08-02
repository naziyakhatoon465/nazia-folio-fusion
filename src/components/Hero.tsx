import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
const profileImage = '/lovable-uploads/8c7aa99f-3df2-452a-bc49-649909fb7562.png';
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary/30 rounded-full floating" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`
      }} />)}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto my-0">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto relative">
            <img src={profileImage} alt="Nazia Khatoon" className="w-full h-full rounded-full object-cover border-4 border-primary/30 hover-glow" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 pulse-glow"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text glow-text">Naziya Khatoon
        </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-in-right">Electronics and Communication Engineering </h2>

        {/* Animated Tagline */}
        <p className="text-lg md:text-xl text-accent mb-8 animate-scale-up glow-text">
          Building future-forward web experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
          <Button size="lg" className="hover-glow bg-primary text-primary-foreground hover:bg-primary/90" onClick={scrollToAbout}>
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="hover-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;