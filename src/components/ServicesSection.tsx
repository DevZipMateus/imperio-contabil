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
      description: "Cuidamos de todas as obrigações contábeis, desde cálculo de impostos até declarações junto à Receita Federal, estadual e prefeitura."
    },
    {
      icon: <FileText className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Gestão Fiscal",
      description: "Controle total das obrigações fiscais, garantindo conformidade e otimização da carga tributária da sua empresa."
    },
    {
      icon: <Building className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Abertura de Empresas",
      description: "Simplificamos todo o processo de abertura e legalização de empresas, cuidando da burocracia para você."
    },
    {
      icon: <Shield className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Consultoria Tributária",
      description: "Orientação especializada para tomadas de decisão estratégicas, maximizando resultados e minimizando riscos."
    },
    {
      icon: <Users className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, admissões, demissões e toda rotina trabalhista da sua empresa."
    },
    {
      icon: <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Planejamento Financeiro",
      description: "Análises financeiras e planejamento estratégico para o crescimento sustentável do seu negócio."
    },
    {
      icon: <RefreshCw className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
      title: "Mudar de Contador",
      description: "Facilitamos a transição da sua contabilidade para nosso escritório, cuidando de toda a documentação e processos."
    }
  ];

  const features = [
    "Atendimento personalizado",
    "Suporte contínuo", 
    "Tecnologia de ponta",
    "Equipe especializada",
    "Conformidade garantida",
    "Resultados comprovados"
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/557388607687?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis%20da%20Império.', '_blank');
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
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 lg:p-12 animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
                Por que escolher a <span className="text-primary">Império</span>?
              </h3>
              <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                Nossa experiência e dedicação fazem toda a diferença no crescimento do seu negócio. 
                Trabalhamos como parceiros estratégicos para seu sucesso.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-900 font-medium text-sm md:text-base">{feature}</span>
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
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-primary/10 rounded-full">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-50">{title}</h3>
      <p className="leading-relaxed flex-grow text-gray-50 text-sm md:text-base">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;
