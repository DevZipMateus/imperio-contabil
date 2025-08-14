
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Eduardo Santos",
    company: "Comércio Santos & Filhos",
    image: "/placeholder.svg",
    text: "A Império transformou a gestão contábil da nossa empresa. Os serviços que contratamos aumentaram nossa organização em 40% e o atendimento é excepcional. Recomendo para todos os empresários da região."
  },
  {
    name: "Maria Fernanda Costa",
    company: "Restaurante Três Irmãos",
    image: "/placeholder.svg",
    text: "Trabalho com a Império há mais de 3 anos e nunca me decepcionaram. Serviços de primeira qualidade, preços justos e um atendimento que realmente entende as necessidades do meu negócio."
  },
  {
    name: "Roberto Almeida",
    company: "Construtora Boa Vista",
    image: "/placeholder.svg",
    text: "A consultoria e os serviços contábeis da Império têm sido fundamentais para o sucesso da nossa empresa. A equipe nos orientou nas melhores decisões e o suporte é exemplar."
  },
  {
    name: "Ana Paula Oliveira",
    company: "Loja Esperança Verde",
    image: "/placeholder.svg",
    text: "Como pequena empresária, encontrei na Império um parceiro que oferece soluções adequadas ao meu orçamento. Consegui organizar minha empresa com serviços de qualidade e atendimento facilitado."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getVisibleTestimonials = () => {
    // For mobile, only show one testimonial
    if (isMobile) {
      return [testimonials[currentIndex]];
    }

    // For larger screens, show multiple testimonials
    const items = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-on-scroll text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto animate-on-scroll text-base md:text-lg leading-relaxed">
            Atendimento especializado e serviços de qualidade são nossa marca registrada.
            Veja o que nossos parceiros empresariais têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard key={`${currentIndex}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 md:mt-10 space-x-4">
            <button 
              onClick={handlePrev} 
              className="p-2 md:p-3 rounded-full bg-white shadow-md border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors" 
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext} 
              className="p-2 md:p-3 rounded-full bg-white shadow-md border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors" 
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    company: string;
    image: string;
    text: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Card className="border border-border/50 shadow-md service-card h-full">
    <CardContent className="p-6 md:p-8 h-full flex flex-col">
      <div className="mb-4 md:mb-6 text-primary">
        <Quote size={24} className="md:w-8 md:h-8" />
      </div>
      
      <p className="mb-4 md:mb-6 flex-grow text-gray-50 text-sm md:text-base leading-relaxed">{testimonial.text}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4 bg-gray-200">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
          <p className="text-xs md:text-sm text-gray-50">{testimonial.company}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
