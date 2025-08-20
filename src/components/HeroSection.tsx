
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Calculator, TrendingUp, Shield } from 'lucide-react';

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
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center lg:text-left">
            {/* Simplified badge */}
            <span className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium mb-6 text-sm border border-primary/20">
              A força que seu negócio precisa
            </span>
            
            {/* Clean typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-primary">IMPÉRIO</span><br />
              Contabilidade &<br />
              <span className="text-primary">Consultoria</span>
            </h1>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Oferecemos serviços contábeis personalizados com excelência, transparência e foco em resultados. 
              Sua empresa em boas mãos, crescendo com segurança e organização.
            </p>
            
            {/* Simplified buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Clean feature list */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0 text-white/80 text-sm justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start">
                <Calculator className="w-4 h-4 text-primary mr-2" />
                Contabilidade completa
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <TrendingUp className="w-4 h-4 text-primary mr-2" />
                Consultoria estratégica
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Shield className="w-4 h-4 text-primary mr-2" />
                Conformidade garantida
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
