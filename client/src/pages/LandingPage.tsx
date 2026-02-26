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
import imgBeforeAfter1 from "@assets/3_1770932876368.jpg";
import imgBeforeAfter2 from "@assets/5_1770932876367.jpg";
import imgBeforeAfter3 from "@assets/7_1770932876366.webp";
import imgBeforeAfter4 from "@assets/8_1770932876365.webp";
import imgBeforeAfter5 from "@assets/im_1772060763410.jpg";
import imgResult1 from "@assets/01_1771342379935.jpg";
import imgResult2 from "@assets/02_1771342379934.jpg";
import imgResult3 from "@assets/03_1771342379932.jpg";
import imgResult4 from "@assets/06_1771342379927.jpg";
import imgResult5 from "@assets/04_1771342379931.jpg";
import imgResult6 from "@assets/05_1771342379929.jpg";
import imgModel1 from "@assets/belo1_1771361035790.jpg";
import imgModel2 from "@assets/belo2_1771361035789.jpg";
import imgProductHero from "@assets/topo1_1771351544560.jpg";
import imgProductHeroMobile from "@assets/progressiva_123_1771356324772.jpg";
import imgProduct1 from "@assets/1_unidade_1771343925546.jpg";
import imgProduct2 from "@assets/2+1_unidade_1771343925545.jpg";
import imgProduct3 from "@assets/4+1_unidade_1771343925544.jpg";
import imgEconomyBg from "@assets/salão_1_1771381400201.jpg";
import imgEconomyHero from "@assets/021_1772058700457.png";
import imgTrustBadge from "@assets/fu-removebg-preview_1771357333997.png";
import imgGuarantee from "@assets/garantia_15_dias_1771025261217.PNG";
import imgSafetyBg from "@assets/m12_1771383810333.jpg";
import imgBelo1 from "@assets/belo1_1771361035790.jpg";
import imgBelo2 from "@assets/belo2_1771361035789.jpg";
import imgBelo3 from "@assets/belo3_1771361035788.jpg";
import imgBelo4 from "@assets/belo4_1771361035788.jpg";
import imgBelo5 from "@assets/belo5_1771361035786.jpg";
import imgBelo6 from "@assets/vbn_1771361360487.jpg";

import mjnj from "@assets/mjnj.jpg";
import imgAnvisa from "@assets/anvisa_1771777181813.jpg";
import imgResultsBg from "@assets/popo_1772062081745.png";
import imgAnvisaBg from "@assets/foto_anvisa_1771778534905.jpg";

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
      <section className="relative overflow-hidden economy-section">
        <div className="md:hidden relative w-full h-[220px] overflow-hidden">
          <img src={imgEconomyHero} alt="Profissional de cabelo" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        </div>

        <div className="hidden md:block absolute inset-0">
          <img src={imgEconomyHero} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-transparent"></div>
        </div>

        <div className="relative bg-slate-900 md:bg-transparent py-12 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C6A756]/20 border border-[#C6A756]/30 rounded-full px-4 py-1.5 mb-5">
                  <Sparkles className="w-4 h-4 text-[#C6A756]" />
                  <span className="text-[#C6A756] text-sm font-semibold uppercase tracking-wide">Compare e Economize</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4 text-center">
                  Resultado de salão,<br /><span className="text-[#C6A756]">sem sair de casa</span>
                </h2>
                <p className="text-white/50 text-base text-center">Os valores podem variar conforme região, frequência e tipo de procedimento.</p>
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="hidden sm:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10 flex-col items-center">
                  <div className="w-[2px] flex-1 bg-red-500/60"></div>
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-[2px] flex-1 bg-red-500/60"></div>
                </div>

                <div className="bg-red-500/10 backdrop-blur-sm border border-red-400/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-red-300 text-xs font-bold uppercase tracking-wider">Salão de Beleza</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Por sessão", value: "R$ 200–500" },
                      { label: "Frequência", value: "A cada 3 meses" },
                      { label: "Custo anual", value: "R$ 800–2.000" },
                      { label: "Tempo", value: "3 a 5 horas" },
                    ].map((row, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-white/50 text-sm">{row.label}</span>
                        <span className="text-red-300 font-semibold text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sm:hidden flex items-center gap-3 -my-1">
                  <div className="flex-1 h-[2px] bg-red-500/40"></div>
                  <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30">
                    <X className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 h-[2px] bg-red-500/40"></div>
                </div>

                <div className="bg-green-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-green-300 text-xs font-bold uppercase tracking-wider">Liso Mágico</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Progressiva", value: "R$ 167,90" },
                      { label: "Rendimento", value: "Até 5 aplicações" },
                      { label: "Por aplicação", value: "R$ 33,58" },
                      { label: "Tempo", value: "40 min–1 hora" },
                    ].map((row, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-white/50 text-sm">{row.label}</span>
                        <span className="text-green-300 font-semibold text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Economia de até 85% comparado ao salão",
                  "Aplique no conforto da sua casa",
                  "Sem agendamento, sem espera",
                  "Pagamento somente na entrega",
                ].map((item, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    {item}
                  </motion.p>
                ))}
              </div>

              <div>
                <Button onClick={scrollToOffer} data-testid="button-economy-cta">QUERO ECONOMIZAR AGORA</Button>
              </div>
            </motion.div>

            <div className="hidden md:block"></div>
          </div>
        </div>
        </div>
      </section>
      {/* --- RESULTS GALLERY --- */}
      <section id="results" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgResultsBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-slate-900/92"></div>
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C6A756]/[0.06] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C6A756]/[0.07] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-[#C6A756]/20 border border-[#C6A756]/30 rounded-full px-4 py-1.5 mb-5">
              <CheckCircle2 className="w-4 h-4 text-[#C6A756]" />
              <span className="text-[#C6A756] text-sm font-semibold uppercase tracking-wide">Resultados Comprovados</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Veja com seus próprios olhos
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Milhares de mulheres já transformaram seus cabelos com o Liso Mágico. Confira os resultados reais de quem já usou.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12"
          >
            {[
              { number: "4.800+", label: "Clientes satisfeitas" },
              { number: "4.9", label: "Avaliação média", icon: true },
              { number: "98%", label: "Aprovação" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.number}</span>
                  {stat.icon && <Star className="w-5 h-5 fill-[#C6A756] text-[#C6A756]" />}
                </div>
                <span className="text-white/50 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {[
              { img: imgBeforeAfter3, name: "Cabelo loiro cacheado → liso sedoso" },
              { img: imgBeforeAfter4, name: "Cabelo crespo → liso brilhante" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative group rounded-2xl overflow-hidden shadow-xl bg-white/5 border border-white/10"
              >
                <img src={item.img} alt={item.name} className="w-full h-auto" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">ANTES</span>
                      <ArrowRight className="w-4 h-4 text-white/60" />
                      <span className="bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">DEPOIS</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C6A756] text-[#C6A756]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mt-2">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {[
              { img: imgBeforeAfter1, name: "Cabelo escuro — transformação total" },
              { img: imgBeforeAfter5, name: "Cabelo loiro — liso e brilhante" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5"
              >
                <img src={item.img} alt={item.name} className="w-full h-auto" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">ANTES</span>
                      <ArrowRight className="w-4 h-4 text-white/60" />
                      <span className="bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">DEPOIS</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C6A756] text-[#C6A756]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mt-2">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center my-10"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Cabelo dos sonhos após o Liso Mágico</h3>
            <p className="text-white/50">Liso, sedoso, brilhante e sem frizz — em qualquer tipo de cabelo</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {[imgResult1, imgResult3, imgResult2, imgResult5, imgResult6, imgResult4].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative rounded-xl overflow-hidden shadow-lg group border border-white/10"
              >
                <img src={img} alt={`Resultado ${idx + 1}`} className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-green-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm">
                  RESULTADO
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
            {[
              { img: imgModel1, caption: "Ana Carolina — São Paulo" },
              { img: imgModel2, caption: "Juliana Santos — Rio de Janeiro" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="rounded-xl overflow-hidden shadow-lg relative group border border-white/10"
              >
                <img src={item.img} alt={item.caption} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C6A756] text-[#C6A756]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/40 text-xs italic mb-8"
          >
            *Resultados podem variar de acordo com o tipo de cabelo e modo de aplicação.
          </motion.p>

          <div className="flex justify-center">
            <Button onClick={scrollToOffer} data-testid="button-results-cta">QUERO ESSA TRANSFORMAÇÃO</Button>
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
      {/* --- MEDO DE COMPRAR NA INTERNET --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Medo de comprar na internet?
            </h2>
            <p className="text-lg text-slate-600 mb-2 max-w-xl mx-auto">
              Sabemos que golpes são comuns. Por isso, oferecemos o{" "}
              <span className="font-bold text-green-600">PAGAMENTO NA ENTREGA</span>.
            </p>
            <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto">
              Você faz o pedido aqui no site, nós enviamos, e você só paga ao carteiro quando o produto chegar na sua mão.
            </p>
            <p className="text-xl font-bold text-slate-900 mb-10">Risco ZERO para você!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Faça o Pedido", desc: "Preencha seus dados. Não precisa de cartão de crédito." },
              { step: "02", title: "Enviamos", desc: "Preparamos e despachamos seu pedido com total cuidado." },
              { step: "03", title: "Receba e Pague", desc: "Pague somente quando o produto chegar nas suas mãos." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 text-white font-bold flex items-center justify-center mb-4 text-sm">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Button onClick={scrollToOffer} data-testid="button-cta-medo">QUERO COMPRAR SEM RISCO</Button>
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
                <img src={mjnj} alt="Liso Mágico Produto" className="w-full h-auto" />
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
      <section id="how-it-works" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgResultsBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/92 via-slate-900/88 to-slate-900/94"></div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C6A756]/[0.05] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C6A756]/[0.04] rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#C6A756]/20 border border-[#C6A756]/30 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#C6A756]" />
              <span className="text-[#C6A756] text-sm font-semibold tracking-wide uppercase">Simples e Rápido</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Como Funciona?</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">5 passos simples para conquistar o liso dos seus sonhos, no conforto da sua casa</p>
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-start justify-between max-w-6xl mx-auto relative">
              <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#C6A756]/30 to-transparent"></div>

              {[
                { step: "01", title: "Lave o cabelo", desc: "Lave bem com seu shampoo de preferência.", icon: "💧" },
                { step: "02", title: "Aplique o produto", desc: "Aplique a Progressiva Liso Mágico mecha por mecha.", icon: "✋" },
                { step: "03", title: "Deixe agir", desc: "Aguarde o tempo indicado no frasco.", icon: "⏳" },
                { step: "04", title: "Seque e finalize", desc: "Enxágue, seque e passe a prancha se desejar.", icon: "💨" },
                { step: "05", title: "Liso Perfeito!", desc: "Cabelo liso, sedoso, com brilho e sem frizz!", icon: "✨" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center w-1/5 relative"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C6A756] to-[#a88b3a] flex items-center justify-center mb-5 shadow-lg shadow-[#C6A756]/20 relative z-10 border-4 border-slate-900">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-[#C6A756]/60 text-xs font-bold tracking-widest mb-2">PASSO {item.step}</span>
                  <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed px-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden space-y-6">
            {[
              { step: "01", title: "Lave o cabelo", desc: "Lave bem com seu shampoo de preferência.", icon: "💧" },
              { step: "02", title: "Aplique o produto", desc: "Aplique a Progressiva Liso Mágico mecha por mecha.", icon: "✋" },
              { step: "03", title: "Deixe agir", desc: "Aguarde o tempo indicado no frasco.", icon: "⏳" },
              { step: "04", title: "Seque e finalize", desc: "Enxágue, seque e passe a prancha se desejar.", icon: "💨" },
              { step: "05", title: "Liso Perfeito!", desc: "Cabelo liso, sedoso, com brilho e sem frizz!", icon: "✨" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C6A756] to-[#a88b3a] flex items-center justify-center shrink-0 shadow-lg shadow-[#C6A756]/20">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <span className="text-[#C6A756]/60 text-[10px] font-bold tracking-widest">PASSO {item.step}</span>
                  <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-white/45 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Button onClick={scrollToOffer} data-testid="button-cta-how-it-works">QUERO MEU LISO PERFEITO</Button>
          </motion.div>
        </div>
      </section>
      {/* --- ANVISA --- */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgAnvisaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/80 to-slate-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-5 py-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span className="text-green-300 text-sm font-semibold tracking-wide uppercase">Produto Regulamentado</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Certificação ANVISA</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Aprovado pela Agência Nacional de Vigilância Sanitária — garantia de segurança e qualidade para o seu cabelo</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                <img src={imgAnvisa} alt="Certificação ANVISA - Progressiva Liso Mágico" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {[
                { title: "Autorização de Funcionamento", desc: "Registro ANVISA nº 4.02912-7 — empresa autorizada a fabricar cosméticos no Brasil." },
                { title: "100% Livre de Formol", desc: "Fórmula aprovada sem substâncias proibidas. Seguro para uso profissional e doméstico." },
                { title: "Responsável Técnica", desc: "Luciana Camargo — CRQ: 024023543. Profissional habilitada supervisionando a produção." },
                { title: "Fabricação Nacional", desc: "Produzido por ERL Ind. Terceirista de Cosméticos — Vila Cachoeirinha, Cambuí/MG." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C6A756]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C6A756]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              installment="12x de R$ 16,79"
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
              installment="12x de R$ 29,78"
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
              installment="12x de R$ 49,78"
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
      <footer className="bg-white border-t border-slate-200 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 mb-10">

            <div>
              <h5 className="text-sm font-bold tracking-[2px] text-[#C6A756] mb-4 uppercase">Institucional</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="/politica-de-privacidade" className="text-slate-600 hover:text-[#C6A756] transition-colors" data-testid="link-privacy-policy">Política de Privacidade</a></li>
                <li><a href="/termos-de-uso" className="text-slate-600 hover:text-[#C6A756] transition-colors" data-testid="link-terms-of-use">Termos de Uso</a></li>
                <li><a href="/troca-e-devolucao" className="text-slate-600 hover:text-[#C6A756] transition-colors" data-testid="link-exchange-policy">Política de Troca e Devolução</a></li>
                <li><a href="/contato" className="text-slate-600 hover:text-[#C6A756] transition-colors" data-testid="link-contact">Contato</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-[#C6A756] mb-4">LISO MÁGICO COSMÉTICOS</h5>
              <div className="space-y-1 text-sm text-slate-600">
                <p>Razão Social: 65.206.918 GABRIEL RODRIGUES DE BRITO</p>
                <p>CNPJ: 65.206.918/0001-37</p>
                <p>Gabriel Rodrigues de Brito</p>
                <p>Brasil</p>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold tracking-[2px] text-[#C6A756] mb-4 uppercase">Atendimento</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Segunda a Segunda: das 7h às 23h
                </li>
                <li>contato@lisomagico.com.br</li>
                <li>(34) 99766-8955</li>
              </ul>
            </div>

          </div>

          <div className="max-w-5xl mx-auto pt-6 border-t border-slate-200 text-center text-slate-400 text-xs">
            &copy; 2026 Liso Mágico Cosméticos. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
