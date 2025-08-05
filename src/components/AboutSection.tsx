import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Award, Handshake, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const values = [
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Comprometimento",
      description: "Assumimos cada cliente como uma causa nossa."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Transparência", 
      description: "Comunicação clara, ética e honesta em todas as relações."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Excelência",
      description: "Entrega de serviços com qualidade, pontualidade e precisão."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Inovação",
      description: "Atualização constante para soluções modernas e eficientes."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Respeito",
      description: "Valorizamos as pessoas, seus negócios e suas histórias."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Parceria",
      description: "Crescemos junto com cada cliente, como parte do seu time."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 animate-on-scroll border border-primary/20">
            Sobre a Império
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Construindo <span className="text-primary">Legados</span> e Impulsionando <span className="text-primary">Sonhos</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg animate-on-scroll leading-relaxed">
            A Império Contabilidade e Consultoria nasceu com o propósito de oferecer mais do que serviços contábeis: 
            nasceu para fortalecer negócios, construir legados e impulsionar sonhos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6 animate-on-scroll">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Nossa História e Propósito
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fundada por profissionais experientes e apaixonados pelo que fazem, a empresa foi criada com a visão de 
                transformar a relação entre empresários e a contabilidade — com proximidade, estratégia e excelência.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desde o início, o compromisso foi claro: atuar como parceira estratégica dos nossos clientes, contribuindo 
                diretamente para o crescimento sustentável de cada empresa atendida.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com uma atuação sólida, ética e inovadora, a Império vem conquistando espaço e confiança no mercado, 
                tornando-se referência em soluções contábeis e consultivas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10">
              <h4 className="font-bold text-lg mb-3 text-primary">Nossa Missão</h4>
              <p className="text-muted-foreground">
                Oferecer serviços contábeis e consultorias personalizadas, com excelência, transparência e foco em resultados, 
                ajudando nossos clientes a crescer com segurança, organização e visão estratégica.
              </p>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-primary/10">
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/dacc99de-aa0c-4c37-ad6f-7a225d124757.png"
                  alt="Império Contabilidade"
                  className="w-32 h-32 mx-auto object-contain mb-4"
                />
                <h4 className="text-xl font-bold text-primary">A força que seu negócio precisa</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">+100</div>
                  <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12 animate-on-scroll">
            Nossos <span className="text-primary">Valores</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard = ({ icon, title, description, index }: ValueCardProps) => (
  <Card className={`animate-on-scroll service-card border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-lg font-bold mb-2 text-foreground">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;