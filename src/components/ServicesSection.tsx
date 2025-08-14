import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  Calculator, 
  Building, 
  Shield, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

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
      icon: <Calculator className="h-12 w-12 text-primary" />,
      title: "Contabilidade Geral",
      description: "Cuidamos de todas as obrigações contábeis, desde cálculo de impostos até declarações junto à Receita Federal, estadual e prefeitura."
    }, 
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Gestão Fiscal",
      description: "Controle total das obrigações fiscais, garantindo conformidade e otimização da carga tributária da sua empresa."
    }, 
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Abertura de Empresas",
      description: "Simplificamos todo o processo de abertura e legalização de empresas, cuidando da burocracia para você."
    }, 
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Consultoria Tributária",
      description: "Orientação especializada para tomadas de decisão estratégicas, maximizando resultados e minimizando riscos."
    }, 
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, admissões, demissões e toda rotina trabalhista da sua empresa."
    }, 
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Planejamento Financeiro",
      description: "Análises financeiras e planejamento estratégico para o crescimento sustentável do seu negócio."
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
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 animate-on-scroll border border-primary/20">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll text-gray-900">
            Soluções <span className="text-primary">Contábeis</span> Completas
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg animate-on-scroll leading-relaxed">
            Cuidamos de todas as obrigações contábeis, desde cálculo de impostos, declarações e o que for 
            preciso junto à Receita Federal, estadual e prefeitura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Por que escolher a <span className="text-primary">Império</span>?
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Nossa experiência e dedicação fazem toda a diferença no crescimento do seu negócio. 
                Trabalhamos como parceiros estratégicos para seu sucesso.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-primary/90 text-accent-foreground font-semibold group"
              >
                Fale Conosco Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/lovable-uploads/dacc99de-aa0c-4c37-ad6f-7a225d124757.png"
                alt="Império Contabilidade"
                className="relative z-10 w-full max-w-md mx-auto object-contain"
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

const ServiceCard = ({
  icon,
  title,
  description,
  index
}: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-6 p-4 bg-primary/10 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed flex-grow">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;
