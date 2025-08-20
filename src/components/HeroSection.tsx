
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/557388607687?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis%20da%20Império.', '_blank');
  };

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/b4a47583-54bb-4862-8ddb-715085bb1758.png")'
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            <span className="text-primary">IMPÉRIO</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Contabilidade & Consultoria com excelência e transparência
          </p>
          
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group px-8 py-4 text-lg"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground/60 cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
