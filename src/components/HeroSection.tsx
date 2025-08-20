
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
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-primary">IMPÉRIO</span><br />
              Contabilidade
            </h1>
            
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Serviços contábeis com excelência e transparência para seu negócio crescer.
            </p>
            
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group"
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
