
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
  return <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
      }}></div>
        {/* Enhanced dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Golden accent overlay */}
        <div className="absolute inset-0 bg-golden-radial opacity-20 bg-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 md:px-6 py-2 md:py-3 bg-primary/20 backdrop-blur-md rounded-full text-primary font-semibold mb-4 md:mb-6 animate-slide-up [animation-delay:300ms] border border-primary/30 text-sm md:text-base golden-shimmer">
                A força que seu negócio precisa
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-4 md:mb-6 animate-slide-up [animation-delay:500ms] golden-shimmer">
                IMPÉRIO
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up [animation-delay:700ms] leading-relaxed">
                Oferecemos serviços contábeis personalizados com excelência, transparência e foco em resultados. 
                Sua empresa em boas mãos, crescendo com segurança e organização.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-6 md:mb-8 justify-center lg:justify-start">
                <Button size="lg" onClick={handleWhatsAppClick} className="cta-button bg-golden-gradient hover:shadow-golden text-primary-foreground rounded-md group font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 golden-shimmer">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-sm md:text-base px-6 md:px-8 py-3 md:py-4 transition-all duration-300 hover:shadow-golden-elegant" onClick={() => document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Nossos Serviços
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 lg:space-x-8 space-y-3 sm:space-y-0 text-white/80 text-xs md:text-sm animate-slide-up [animation-delay:1100ms] justify-center lg:justify-start">
                <div className="flex items-center justify-center lg:justify-start">
                  <Calculator className="w-4 h-4 md:w-5 md:h-5 text-primary golden-icon mr-2" />
                  Contabilidade completa
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary golden-icon mr-2" />
                  Consultoria estratégica
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary golden-icon mr-2" />
                  Conformidade garantida
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator with golden accent */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer animate-bounce golden-icon" onClick={scrollToNextSection}>
        <ChevronDown size={28} className="md:w-8 md:h-8" />
      </div>
    </section>;
};
export default HeroSection;
