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
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-md rounded-full text-primary font-semibold mb-6 animate-slide-up [animation-delay:300ms] border border-primary/30">
                A força que seu negócio precisa
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                <span className="text-primary">IMPÉRIO</span><br />
                Contabilidade &<br />
                <span className="text-primary">Consultoria</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Oferecemos serviços contábeis personalizados com excelência, transparência e foco em resultados. 
                Sua empresa em boas mãos, crescendo com segurança e organização.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary/90 text-accent-foreground rounded-md shadow-lg group font-semibold"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Nossos Serviços
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-white/80 text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <Calculator className="w-5 h-5 text-primary mr-2" />
                  Contabilidade completa
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  Consultoria estratégica
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  Conformidade garantida
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-150"></div>
                <img 
                  src="/lovable-uploads/dacc99de-aa0c-4c37-ad6f-7a225d124757.png"
                  alt="Império Contabilidade" 
                  className="relative z-10 w-80 h-80 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" 
        onClick={scrollToNextSection}
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;