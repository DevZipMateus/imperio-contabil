
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Calculator, Building, Shield, Users, TrendingUp, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Calculator className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Contabilidade Geral",
      description: "Cuidamos de todas as obrigações contábeis, desde cálculo de impostos até declarações junto à Receita Federal, estadual e prefeitura.",
      hasButton: false
    },
    {
      icon: <FileText className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Gestão Fiscal",
      description: "Controle total das obrigações fiscais, garantindo conformidade e otimização da carga tributária da sua empresa.",
      hasButton: false
    },
    {
      icon: <Building className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Abertura de Empresas",
      description: "Simplificamos todo o processo de abertura e legalização de empresas, cuidando da burocracia para você.",
      hasButton: false
    },
    {
      icon: <Shield className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Consultoria Tributária",
      description: "Orientação especializada para tomadas de decisão estratégicas, maximizando resultados e minimizando riscos.",
      hasButton: false
    },
    {
      icon: <Users className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, admissões, demissões e toda rotina trabalhista da sua empresa.",
      hasButton: false
    },
    {
      icon: <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Planejamento Financeiro",
      description: "Análises financeiras e planejamento estratégico para o crescimento sustentável do seu negócio.",
      hasButton: false
    },
    {
      icon: <RefreshCw className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Mudar de Contador",
      description: "Facilitamos a transição da sua contabilidade para nosso escritório, cuidando de toda a documentação e processos.",
      hasButton: true
    }
  ];

  const features = [
    "Atendimento personalizado – entendemos as necessidades específicas da sua empresa, seja comércio, serviço ou indústria.",
    "Agilidade e tecnologia – utilizamos ferramentas modernas que tornam os processos contábeis mais rápidos, seguros e práticos.", 
    "Transparência e confiança – você terá acesso claro e objetivo às informações financeiras e fiscais.",
    "Planejamento estratégico – ajudamos na tomada de decisões, reduzindo custos e maximizando resultados.",
    "Suporte completo – desde a abertura da empresa até a gestão tributária e consultoria para expansão."
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/557388607687?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis%20da%20Império.', '_blank');
  };

  const handleMudarContadorClick = () => {
    window.open('https://wa.me/557388607687?text=Olá!%20Gostaria%20de%20mudar%20de%20contador%20para%20a%20Império%20Contabilidade.', '_blank');
  };

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 md:px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 animate-on-scroll border border-primary/20">
            Nossos Serviços
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 animate-on-scroll text-gray-900">
            Soluções <span className="text-primary">Contábeis</span> Completas
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg animate-on-scroll leading-relaxed">
            Cuidamos de todas as obrigações contábeis, desde cálculo de impostos, declarações e o que for 
            preciso junto à Receita Federal, estadual e prefeitura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              hasButton={service.hasButton}
              onButtonClick={service.hasButton ? handleMudarContadorClick : undefined}
            />
          ))}
        </div>

        <div className="bg-black rounded-2xl p-6 md:p-8 lg:p-12 animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white">
                Nossos <span className="text-primary">diferenciais</span>
              </h3>
              <div className="space-y-4 mb-6 md:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm md:text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick} 
                className="bg-primary hover:bg-primary/90 text-accent-foreground font-semibold group w-full sm:w-auto"
              >
                Fale Conosco Agora
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/lovable-uploads/f2d7bdb4-eb3f-41b1-9439-9b216e87485b.png" 
                alt="Império Contabilidade" 
                className="relative z-10 w-full max-w-sm md:max-w-md mx-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  hasButton?: boolean;
  onButtonClick?: () => void;
}

const ServiceCard = ({ icon, title, description, index, hasButton, onButtonClick }: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-primary/10 rounded-full">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-50">{title}</h3>
      <p className="leading-relaxed flex-grow text-gray-50 text-sm md:text-base mb-4">{description}</p>
      {hasButton && onButtonClick && (
        <Button 
          onClick={onButtonClick}
          className="bg-primary hover:bg-primary/90 text-accent-foreground font-semibold mt-auto"
          size="sm"
        >
          Mudar Agora
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </CardContent>
  </Card>
);

export default ServicesSection;
