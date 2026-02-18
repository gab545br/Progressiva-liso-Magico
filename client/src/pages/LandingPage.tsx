import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Star, 
  Clock, 
  Sparkles, 
  ThumbsUp, 
  AlertCircle,
  Menu,
  X,
  ArrowRight,
  PackageCheck,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";

import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { OfferCard } from "@/components/OfferCard";
import { useCreateLead } from "@/hooks/use-leads";
import { useToast } from "@/hooks/use-toast";

// Import images
import imgBefore1 from "@assets/01_1771343044433.jpg";
import imgBefore2 from "@assets/02_1771343044433.jpg";
import imgBefore3 from "@assets/03_1771343044432.jpg";
import imgBefore4 from "@assets/04_1771343044431.jpg";
import imgBefore5 from "@assets/05_1771343044431.jpg";
import imgBefore6 from "@assets/06_1771343044430.jpg";
import imgProductHero from "@assets/topo1_1771351544560.jpg";
import imgProductHeroMobile from "@assets/progressiva_123_1771356324772.jpg";
import imgProduct1 from "@assets/1_unidade_1771343925546.jpg";
import imgProduct2 from "@assets/2+1_unidade_1771343925545.jpg";
import imgProduct3 from "@assets/4+1_unidade_1771343925544.jpg";
import imgEconomy from "@assets/economia_1771025261218.png";
import imgTrustBadge from "@assets/fu-removebg-preview_1771357333997.png";
import imgGuarantee from "@assets/garantia_15_dias_1771025261217.PNG";
import imgReview from "@assets/Tp4_1770941481564.png";
import imgBelo1 from "@assets/belo1_1771361035790.jpg";
import imgBelo2 from "@assets/belo2_1771361035789.jpg";
import imgBelo3 from "@assets/belo3_1771361035788.jpg";
import imgBelo4 from "@assets/belo4_1771361035788.jpg";
import imgBelo5 from "@assets/belo5_1771361035786.jpg";
import imgBelo6 from "@assets/vbn_1771361360487.jpg";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offerSectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const createLead = useCreateLead();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoPlayTestimonial, setAutoPlayTestimonial] = useState(true);

  const testimonials = [
    {
      name: "Ana Carolina",
      location: "São Paulo, SP",
      image: imgBelo1,
      rating: 5,
      text: "Meu cabelo nunca ficou tão liso e brilhante! Usei a Progressiva Liso Mágico e o resultado foi incrível desde a primeira aplicação. Super recomendo!",
    },
    {
      name: "Juliana Santos",
      location: "Rio de Janeiro, RJ",
      image: imgBelo2,
      rating: 5,
      text: "Estava com medo de usar progressiva, mas como é sem formol me senti segura. O resultado foi maravilhoso, cabelo alinhado e sem frizz por semanas!",
    },
    {
      name: "Mariana Oliveira",
      location: "Belo Horizonte, MG",
      image: imgBelo3,
      rating: 5,
      text: "Já gastei muito em salão com progressiva e nunca tive um resultado tão bom quanto com o Liso Mágico. Fácil de aplicar e o cabelo fica perfeito!",
    },
    {
      name: "Camila Ferreira",
      location: "Curitiba, PR",
      image: imgBelo4,
      rating: 5,
      text: "Comprei sem esperar muito e me surpreendi demais! Meu cabelo ficou lisinho, macio e com muito brilho. Já estou no segundo frasco!",
    },
    {
      name: "Fernanda Lima",
      location: "Salvador, BA",
      image: imgBelo5,
      rating: 5,
      text: "O melhor investimento que fiz pro meu cabelo! Paguei na entrega, sem risco nenhum. Resultado lindo e duradouro. Amei!",
    },
    {
      name: "Beatriz Costa",
      location: "Fortaleza, CE",
      image: imgBelo6,
      rating: 5,
      text: "Minhas amigas todas perguntaram o que eu fiz no cabelo! Ficou liso natural, sem aquele aspecto de chapinha. Produto top demais!",
    },
  ];

  useEffect(() => {
    if (!autoPlayTestimonial) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlayTestimonial, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setAutoPlayTestimonial(false);
    setTimeout(() => setAutoPlayTestimonial(true), 8000);
  };

  const prevTestimonial = () => goToTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => goToTestimonial((currentTestimonial + 1) % testimonials.length);

  const scrollToOffer = () => {
    offerSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Resultados", href: "#results" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="bg-[#111111] text-[#D4A62A] py-2 text-center font-semibold text-sm md:text-base px-4 tracking-[0.5px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] relative z-[1001]">
        Você só paga quando receber
      </div>

      {/* --- HEADER --- */}
      <header className="absolute top-[40px] left-0 right-0 z-[1000] bg-transparent px-[8%] py-[16px]">
        <div className="container mx-auto h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-[#d4a017]" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">Liso<span className="text-[#d4a017]">Mágico</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#d4a017] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" onClick={scrollToOffer} className="bg-[#d4a017] hover:bg-[#b88a14] text-white border-none">
              COMPRAR AGORA
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black/95 overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-4">
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-white hover:text-[#d4a017]"
                  >
                    {item.label}
                  </a>
                ))}
                <Button onClick={() => { setIsMenuOpen(false); scrollToOffer(); }} className="w-full bg-[#d4a017] hover:bg-[#b88a14] text-white border-none">
                  COMPRAR AGORA
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- HERO SECTION --- */}
      <section 
        id="hero" 
        className="relative h-[100vh] flex items-center overflow-hidden bg-cover bg-no-repeat hero-section"
        style={{ 
          backgroundImage: `url(${imgProductHero})`,
          backgroundPosition: 'right center'
        }}
      >
        {/* Mobile adjustments */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            #hero { 
              background-image: url(${imgProductHeroMobile}) !important;
              background-position: center center !important;
              background-size: cover !important;
            }
            #hero h1 {
              font-size: 1.6rem !important;
              color: rgba(255,255,255,1) !important;
              text-shadow: 0 2px 12px rgba(0,0,0,0.6);
            }
            #hero h2 {
              font-size: 1.3rem !important;
              opacity: 1;
              text-shadow: 0 2px 12px rgba(0,0,0,0.6);
            }
            #hero .hero-description {
              font-size: 0.9rem !important;
              color: rgba(255,255,255,0.95) !important;
              text-shadow: 0 1px 6px rgba(0,0,0,0.5);
            }
            #hero .hero-cta-btn {
              font-size: 0.85rem !important;
              padding: 10px 24px !important;
              min-height: auto !important;
              width: 75% !important;
            }
            #hero .hero-checks {
              font-size: 0.75rem !important;
              color: rgba(255,255,255,0.95) !important;
              text-shadow: 0 1px 4px rgba(0,0,0,0.5);
            }
          }
        `}} />

        {/* Soft Dark Gradient Overlay with Blur Mask */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 100%)',
            maskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)'
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 md:pt-24">
          <div className="max-w-[600px] md:pl-[8%] text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-2">
                Cabelo liso, alinhado e sem frizz —
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#d4a017] mb-6">
                e você só paga na entrega.
              </h2>
              
              <p className="hero-description text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Tratamento sem formol que ajuda a reduzir o frizz, alinhar os fios e devolver o brilho ao cabelo.
              </p>

              <div className="flex flex-col gap-4 mb-6 items-center md:items-start">
                <Button 
                  size="lg" 
                  onClick={scrollToOffer} 
                  className="hero-cta-btn w-[90%] md:w-auto bg-[#d4a017] hover:bg-[#b88a14] text-white font-bold rounded-[40px] px-8 border-none shadow-lg transition-all duration-300"
                >
                  QUERO MEU LISO MÁGICO
                </Button>
                
                <div className="hero-checks space-y-1 text-white/90 text-sm font-medium">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a017]" />
                    Pagamento somente na entrega
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a017]" />
                    Frete rápido para todo Brasil
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS STRIP --- */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Resultados visíveis desde a primeira aplicação*", desc: "Auxilia no alinhamento dos fios e melhora a aparência do cabelo já no primeiro uso." },
              { icon: Clock, title: "Redução significativa do frizz", desc: "Ajuda no controle do frizz e na proteção contra a umidade." },
              { icon: ShieldCheck, title: "Compatível com diferentes tipos de cabelo", desc: "Pode ser utilizado em cabelos naturais, tingidos ou com química. Recomenda-se teste de mecha antes da aplicação." },
              { icon: Truck, title: "Aplicação prática", desc: "Aplicação simples que pode ser feita em casa seguindo as instruções do rótulo." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="font-bold text-lg font-sans text-white">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ECONOMY SECTION --- */}
      <section className="py-16 bg-white economy-section">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Compare e Economize" 
            subtitle="Os valores podem variar conforme região, frequência e tipo de procedimento."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-8 border border-red-100 relative"
            >
              <div className="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                SALÃO DE BELEZA
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Progressiva no salão</span>
                  <span className="font-bold text-red-600">R$ 200 - R$ 500</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Frequência</span>
                  <span className="font-bold text-red-600">A cada 3 meses</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Custo anual estimado</span>
                  <span className="font-bold text-red-600">R$ 800 - R$ 2.000</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Tempo no salão</span>
                  <span className="font-bold text-red-600">3 a 5 horas</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8 border border-green-100 relative"
            >
              <div className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                LISO MÁGICO EM CASA
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Progressiva Liso Mágico</span>
                  <span className="font-bold text-green-600">A partir de R$ 167,90</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Rendimento</span>
                  <span className="font-bold text-green-600">Até 5 aplicações</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Custo por aplicação</span>
                  <span className="font-bold text-green-600">A partir de R$ 33,58</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-700">Tempo de aplicação</span>
                  <span className="font-bold text-green-600">40 min a 1 hora</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img src={imgEconomy} alt="Comparativo de custos" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-slate-900">Por que o Liso Mágico é a melhor escolha?</h3>
              <div className="space-y-3">
                {[
                  "Economia de até 85% comparado ao salão",
                  "Aplique no conforto da sua casa",
                  "Sem agendamento, sem espera",
                  "Um frasco rende várias aplicações",
                  "Pagamento somente na entrega"
                ].map((item, idx) => (
                  <p key={idx} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="pt-4">
                <Button onClick={scrollToOffer}>QUERO ECONOMIZAR AGORA</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESULTS GALLERY --- */}
      <section id="results" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader 
            title="Resultados de Clientes" 
            subtitle="*Resultados podem variar de acordo com o tipo de cabelo e modo de aplicação."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[imgBefore1, imgBefore2, imgBefore3, imgBefore4, imgBefore5, imgBefore6].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <img src={img} alt={`Resultado de cliente ${idx + 1}`} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS DETAIL --- */}
      <section id="benefits" className="py-16 bg-rose-50/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader 
            title="Por que escolher o Liso Mágico?" 
          />
          
          <div className="space-y-6">
            {[
              { title: "Resultados visíveis nas primeiras aplicações", desc: "Fórmula potente que alinha os fios instantaneamente sem danificar." },
              { title: "Redução Total de Frizz", desc: "Tecnologia anti-umidade que mantém o cabelo disciplinado." },
              { title: "Compatível com Químicas", desc: "Pode ser usado em cabelos tingidos, descoloridos ou com outras progressivas." },
              { title: "Economia Real", desc: "Um frasco rende até 5 aplicações. Muito mais barato que o salão." },
              { title: "Fácil de Aplicar", desc: "Você mesma faz em casa, no chuveiro, sem complicação." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 font-sans">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button onClick={scrollToOffer}>QUERO ESSES BENEFÍCIOS</Button>
          </div>
        </div>
      </section>

      {/* --- SEGURANÇA E CONFIANÇA --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={imgReview} alt="Resultado Liso Mágico" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
                Seguro para você e seu cabelo
              </h2>
              <p className="text-slate-500 mb-8 text-lg">
                Fórmula desenvolvida com ingredientes seguros, sem substâncias agressivas.
              </p>

              <div className="space-y-5">
                {[
                  { icon: ShieldCheck, title: "Sem efeitos colaterais", desc: "Não causa ardência, irritação no couro cabeludo nem queda de cabelo." },
                  { icon: Sparkles, title: "100% livre de formol", desc: "Fórmula à base de ácidos orgânicos e vitaminas. Sem cheiro forte nem gases tóxicos." },
                  { icon: CheckCircle2, title: "Não danifica os fios", desc: "Diferente de outras progressivas, o Liso Mágico não resseca nem quebra o cabelo." },
                  { icon: ThumbsUp, title: "Compatível com qualquer química", desc: "Pode ser usado em cabelos tingidos, com luzes, descoloridos ou com outras químicas." },
                  { icon: Clock, title: "Resultado duradouro", desc: "O efeito liso dura em média 3 meses, dependendo dos cuidados e do tipo de cabelo." },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="how-it-works" className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="Como Funciona?" light />
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Lave o cabelo", desc: "Lave bem com seu shampoo de preferência." },
              { step: "02", title: "Aplique o produto", desc: "Aplique a Progressiva Liso Mágico em todo o cabelo.", highlight: "Aplique o produto" },
              { step: "03", title: "Deixe agir", desc: "Deixe agir conforme as instruções no frasco.", highlight: "Deixe agir" },
              { step: "04", title: "Seque e finalize", desc: "Enxágue, seque e finalize com prancha se desejar.", highlight: "Seque e finalize" },
              { step: "05", title: "Liso Perfeito", desc: "Cabelo liso, leve, com brilho e sem frizz!", highlight: "Liso Perfeito" }
            ].map((item, idx) => (
              <motion.div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#C6A756] mb-4 font-display">{item.step}</div>
                <h4 className="text-lg font-bold mb-2 text-[#C6A756]">{item.title}</h4>
                <p className="text-sm text-white/60">
                  {item.highlight ? (
                    <>
                      <span className="text-[#C6A756] font-bold">{item.highlight}</span>{" "}
                      {item.desc.replace(item.highlight, "").trim()}
                    </>
                  ) : item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OFFERS --- */}
      <section id="offers" ref={offerSectionRef} className="py-16 bg-[#F8F6F3]">
        <div className="container mx-auto px-4">
          <SectionHeader title="Escolha seu Kit Ideal" subtitle="Ofertas por tempo limitado. Aproveite o Frete Grátis!" />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <OfferCard 
              title="KIT BÁSICO" 
              price="R$ 167,90" 
              originalPrice="R$ 197,90" 
              link="https://app.coinzz.com.br/checkout/1-progressiva-liso-magico-876" 
              features={["Pagamento na entrega", "1 Frasco Liso Mágico", "Resultado de Salão", "Garantia VIP"]} 
              image={imgProduct1} 
              className="h-full"
            />
            <OfferCard 
              title="MAIS VENDIDO (2+1)" 
              price="R$ 297,90" 
              originalPrice="R$ 397,90" 
              link="https://app.coinzz.com.br/checkout/2-1-unidades-876" 
              features={["Leve 3 Pague 2", "Pagamento na entrega", "3 Frascos Liso Mágico", "Frete Grátis"]} 
              isPopular={true} 
              savings="25%" 
              image={imgProduct2} 
              className="h-full"
            />
            <OfferCard 
              title="KIT MASTER (4+1)" 
              price="R$ 497,90" 
              originalPrice="R$ 597,90" 
              link="https://app.coinzz.com.br/checkout/4-1-unidades-876" 
              features={["Leve 5 Pague 4", "Pagamento na entrega", "5 Frascos Liso Mágico", "Frete Grátis Expresso"]} 
              savings="17%" 
              image={imgProduct3} 
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* --- GUARANTEE --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-xl flex flex-col md:flex-row items-center gap-10 border border-slate-100">
            <div className="w-48 h-48 shrink-0">
              <img src={imgGuarantee} alt="Garantia 15 Dias" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Garantia de 15 Dias — Risco Zero</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Se não gostar, devolvemos seu dinheiro</p>
                <p className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Você só paga quando recebe o produto</p>
                <p className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Compra 100% segura e garantida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PAGAMENTO NA ENTREGA --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-xl flex flex-col md:flex-row items-center gap-10 border border-slate-100">
            <div className="w-48 h-48 shrink-0">
              <img src={imgTrustBadge} alt="Pagamento na Entrega" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Pagamento na Entrega — Compre Sem Medo</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Pague somente quando receber o produto em mãos</p>
                <p className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Sem precisar de cartão de crédito</p>
                <p className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Mais segurança: veja antes, pague depois</p>
                <p className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Entrega rápida para todo o Brasil</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              { icon: ShieldCheck, label: "Compra Segura" },
              { icon: PackageCheck, label: "Entrega Garantida" },
              { icon: Truck, label: "Frete Grátis" },
              { icon: CheckCircle2, label: "Satisfação Garantida" },
            ].map((selo, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100 min-w-[120px]">
                <selo.icon className="w-7 h-7 text-green-500" />
                <span className="text-xs font-bold text-slate-700 text-center">{selo.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-16 bg-white border-y border-slate-100 social-proof">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="Avaliações positivas de clientes que testaram o produto." subtitle="Resultados reais de quem já transformou o cabelo com Liso Mágico" />
          
          <div className="max-w-4xl mx-auto relative">
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100"
                    >
                      <Quote className="w-10 h-10 text-[#d4a017]/30 mx-auto mb-6" />
                      <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic" data-testid={`text-testimonial-${currentTestimonial}`}>
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4a017] shadow-md">
                          <img
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-slate-900 text-lg" data-testid={`text-testimonial-name-${currentTestimonial}`}>
                            {testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-slate-500 text-sm">{testimonials[currentTestimonial].location}</p>
                          <div className="flex items-center justify-center gap-1 mt-2">
                            {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600"
                  data-testid="button-testimonial-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600"
                  data-testid="button-testimonial-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentTestimonial ? "bg-[#d4a017] w-6" : "bg-slate-300"
                      }`}
                      data-testid={`button-testimonial-dot-${idx}`}
                    />
                  ))}
                </div>
              </div>

          <div className="mt-12 hidden md:flex justify-center">
            <Button onClick={scrollToOffer}>
              Quero Meu Liso Perfeito — Pagamento na Entrega
            </Button>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader title="Dúvidas Frequentes" />

          <div className="space-y-4">
            {[
              { q: "O pagamento é realmente na entrega?", a: "Sim! Para sua total segurança, você só paga quando o carteiro entregar o produto na sua casa." },
              { q: "Qual o prazo de entrega?", a: "O prazo médio é de 3 a 10 dias úteis, dependendo da sua região." },
              { q: "Tem formol?", a: "Não! O Liso Mágico é totalmente livre de formol e componentes agressivos. É à base de ácidos orgânicos e vitaminas." },
              { q: "Serve para qual tipo de cabelo?", a: "Para todos os tipos: crespos, cacheados, ondulados, tingidos ou descoloridos." },
              { q: "Quanto tempo dura o efeito?", a: "O efeito liso dura em média 3 meses, dependendo do crescimento da raiz e cuidados diários." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h4 className="font-bold text-lg text-slate-900 mb-2 font-sans flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">?</span>
                  {item.q}
                </h4>
                <p className="text-slate-600 pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="font-display font-bold text-xl">Liso<span className="text-yellow-500">Mágico</span></span>
              </div>
              <p className="text-white/60 mb-6 max-w-sm">
                Tecnologia avançada para alinhamento capilar. Beleza, praticidade e segurança para você se sentir maravilhosa todos os dias.
              </p>
              <div className="mt-6 text-xs opacity-70">
                Este produto é cosmético. Os resultados podem variar de acordo com características individuais, rotina de cuidados e modo de aplicação. Recomenda-se realizar teste de mecha antes do uso. Em caso de dúvidas, consulte um profissional.
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Links Rápidos</h5>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-yellow-500">Início</a></li>
                <li><a href="#offers" className="hover:text-yellow-500">Comprar Agora</a></li>
                <li><a href="#how-it-works" className="hover:text-yellow-500">Rastrear Pedido</a></li>
                <li><a href="/politica-de-privacidade" className="hover:text-yellow-500" data-testid="link-privacy-policy">Política de Privacidade</a></li>
                <li><a href="/termos-de-uso" className="hover:text-yellow-500" data-testid="link-terms-of-use">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Atendimento</h5>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Segunda a Segunda: das 7h às 23h
                </li>
                <li>contato@lisomagico.com.br</li>
                <li>(34) 99766-8955</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            &copy; 2026 Liso Mágico. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
