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
  Quote,
  Lock,
  Eye,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  FlaskConical,
  Play,
  Droplets,
  Leaf,
  Flame
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
import imgProductHero from "@assets/topo1_optimized.jpg";
import imgProductHeroMobile from "@assets/progressiva_optimized.jpg";
import imgProduct1 from "@assets/1_1772070791598.jpg";
import imgProduct2 from "@assets/3_1772070671491.jpg";
import imgProduct3 from "@assets/2_1772070671492.jpg";
import imgEconomyBg from "@assets/salao_optimized.jpg";
import imgEconomyHero from "@assets/021_optimized.jpg";
import imgTrustBadge from "@assets/na_entrega_1772071666466.jpg";
import imgGuarantee from "@assets/7_dias_1772071666467.jpg";
import imgSafetyBg from "@assets/m12_optimized.jpg";
import imgDeliveryBg from "@assets/delivery_optimized.jpg";
import imgBelo1 from "@assets/belo1_1771361035790.jpg";
import imgBelo2 from "@assets/belo2_1771361035789.jpg";
import imgBelo3 from "@assets/belo3_1771361035788.jpg";
import imgBelo4 from "@assets/belo4_1771361035788.jpg";
import imgBelo5 from "@assets/belo5_1771361035786.jpg";
import imgBelo6 from "@assets/vbn_1771361360487.jpg";

import mjnj from "@assets/mjnj.jpg";
import imgAnvisa from "@assets/anvisa_1771777181813.jpg";
import imgResultsBg from "@assets/popo_optimized.jpg";
import imgAnvisaBg from "@assets/foto_anvisa_optimized.jpg";

import videoFab1 from "@assets/video_1772586717268_opt.mp4";
import videoFab2 from "@assets/video_(1)_1772586717362_opt.mp4";
import videoFab3 from "@assets/video_(5)_1772586717270.mp4";
import videoFab4 from "@assets/video_(6)_1772586717269_opt.mp4";
import videoFab5 from "@assets/video_(3)_1772586717355_opt.mp4";
import videoFab6 from "@assets/Bipagem_1772586717363_opt.mp4";
import videoFab7 from "@assets/video_(7)_1772588020066_opt.mp4";
import videoFab8 from "@assets/video_(8)_1772588013113_opt.mp4";
import imgComposicao from "@assets/composicao_hero_optimized.jpg";

const faqData = [
  {
    category: "Pagamento e Entrega",
    items: [
      { q: "O pagamento é realmente na entrega?", a: "Sim! Você recebe o produto primeiro, confere tudo certinho e só depois paga ao entregador. Aceitamos todas as formas de pagamento: Pix, cartão de crédito e débito, boleto e dinheiro. E o melhor: você pode parcelar na hora da entrega!" },
      { q: "Qual o prazo de entrega?", a: "Entregamos em até 24 horas! Você escolhe o melhor dia para receber — pode ser no dia seguinte ou em até 3 dias. Na hora da compra, é só agendar a data que preferir." },
      { q: "O frete é realmente grátis?", a: "Sim! O frete é 100% grátis para todo o Brasil em todos os kits. Não há nenhum custo adicional além do valor do produto." },
      { q: "Posso parcelar?", a: "Sim! Você pode parcelar na hora da entrega no cartão de crédito ou débito. Também aceitamos Pix, boleto e dinheiro. Você escolhe como prefere pagar!" },
    ]
  },
  {
    category: "Sobre o Produto",
    items: [
      { q: "O Liso Mágico tem formol?", a: "Não! O Liso Mágico é 100% livre de formol e qualquer substância proibida. Sua fórmula é à base de ácidos orgânicos, queratina e vitaminas, aprovada pela ANVISA (Registro nº 4.02912-7)." },
      { q: "Funciona em qual tipo de cabelo?", a: "Funciona em todos os tipos: crespos, cacheados, ondulados, lisos com frizz, tingidos, descoloridos e com química. O resultado varia conforme o tipo de fio, mas todos ficam mais lisos, brilhantes e sem frizz." },
      { q: "Quanto tempo dura o efeito alisante?", a: "O efeito dura em média de 2 a 3 meses, dependendo do crescimento natural do cabelo e dos cuidados diários. Muitas clientes relatam que o efeito dura ainda mais com manutenção adequada." },
      { q: "Posso usar em casa sozinha?", a: "Sim! O produto vem com instruções detalhadas passo a passo. É muito fácil de aplicar em casa, sem precisar ir ao salão. Basta lavar, aplicar, passar a chapinha e pronto." },
      { q: "O produto danifica o cabelo?", a: "Não! Ao contrário, o Liso Mágico possui ativos que nutrem e hidratam os fios durante o alisamento. Seu cabelo fica mais saudável, brilhante e com menos pontas duplas." },
    ]
  },
  {
    category: "Garantia e Trocas",
    items: [
      { q: "E se eu não gostar do resultado?", a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro sem burocracia." },
      { q: "Como faço para trocar ou devolver?", a: "Basta entrar em contato pelo e-mail contato@lisomagico.com.br ou pelo telefone (34) 99766-8955. Nossa equipe cuida de todo o processo para você, sem complicação." },
      { q: "O produto é original e lacrado?", a: "Sim! Todos os produtos são 100% originais, lacrados de fábrica e com registro na ANVISA. Enviamos direto do fabricante para garantir a qualidade." },
    ]
  }
];

function FAQItem({ question, answer, isOpen, onClick, index }: { question: string; answer: string; isOpen: boolean; onClick: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left transition-all duration-300 rounded-2xl ${
          isOpen
            ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg'
            : 'bg-white hover:bg-slate-50 text-slate-800 shadow-sm border border-slate-100 hover:border-[#C6A756]/30 hover:shadow-md'
        }`}
        data-testid={`faq-toggle-${index}`}
      >
        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
            isOpen ? 'bg-[#C6A756]' : 'bg-[#C6A756]/10 group-hover:bg-[#C6A756]/20'
          }`}>
            <HelpCircle className={`w-4 h-4 md:w-5 md:h-5 ${isOpen ? 'text-white' : 'text-[#C6A756]'}`} />
          </div>
          <span className={`font-semibold text-sm md:text-base leading-snug ${isOpen ? 'text-white' : 'text-slate-800'}`}>
            {question}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-[#C6A756]' : 'text-slate-400'
        }`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 py-4 md:py-5 ml-11 md:ml-14 text-slate-600 text-sm md:text-base leading-relaxed border-l-2 border-[#C6A756]/30 mt-1">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const fabricationVideos = [
  { src: videoFab4, label: "Seleção de matéria-prima" },
  { src: videoFab1, label: "Mistura dos ingredientes" },
  { src: videoFab7, label: "Teste de qualidade" },
  { src: videoFab5, label: "Envase e selagem" },
  { src: videoFab2, label: "Inspeção final" },
  { src: videoFab8, label: "Rotulagem e acabamento" },
  { src: videoFab6, label: "Embalagem e expedição" },
];

function FabricationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videos = section.querySelectorAll('video');
          if (entry.isIntersecting) {
            videos.forEach((v) => v.play().catch(() => {}));
          } else {
            videos.forEach((v) => v.pause());
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#C6A756]/10 text-[#C6A756] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            <FlaskConical className="w-4 h-4" />
            Fabricação Nacional
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Veja como o Liso Mágico é <span className="text-[#C6A756]">fabricado</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Produzido com tecnologia de ponta e ingredientes selecionados. Conheça de perto o processo de fabricação do produto que vai transformar seu cabelo.
          </p>
        </motion.div>

        <div className="relative" ref={sectionRef}>
          <div className="fab-track hover:[animation-play-state:paused]">
            {[...Array(3)].flatMap((_, setIdx) =>
              fabricationVideos.map((video, idx) => (
                <div
                  key={`${setIdx}-${idx}`}
                  className="fab-card"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black group h-full">
                    <video
                      src={video.src}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload={setIdx === 0 ? "metadata" : "none"}
                      className="w-full h-full object-cover"
                      data-testid={`video-fab-${setIdx}-${idx}`}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#C6A756]/20 flex items-center justify-center">
                          <Play className="w-3 h-3 text-[#C6A756] fill-[#C6A756]" />
                        </div>
                        <span className="text-white/90 text-sm font-medium">{video.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 md:mt-14"
        >
          {[
            { label: "Registro ANVISA", value: "nº 4.02912-7" },
            { label: "100% Livre de Formol", value: "Aprovado" },
            { label: "Fabricação", value: "Nacional" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <span className="text-[#C6A756] text-sm font-bold uppercase tracking-wider block">{item.label}</span>
              <span className="text-white/60 text-xs">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection({ scrollToOffer }: { scrollToOffer: () => void }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  let globalIndex = 0;

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#C6A756]/10 text-[#C6A756] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            <MessageCircle className="w-4 h-4" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">Reunimos as dúvidas mais comuns das nossas clientes para te ajudar a tomar a melhor decisão.</p>
        </motion.div>

        <div className="space-y-10 md:space-y-14">
          {faqData.map((section) => (
            <div key={section.category}>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold text-[#C6A756] uppercase tracking-[2px] mb-5 flex items-center gap-2"
              >
                <div className="w-8 h-px bg-[#C6A756]"></div>
                {section.category}
              </motion.h3>
              <div className="space-y-3">
                {section.items.map((item) => {
                  const key = `${section.category}-${globalIndex}`;
                  const currentIndex = globalIndex;
                  globalIndex++;
                  return (
                    <FAQItem
                      key={key}
                      question={item.q}
                      answer={item.a}
                      isOpen={!!openItems[key]}
                      onClick={() => toggleItem(key)}
                      index={currentIndex}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Pronta para transformar seu cabelo?</h3>
            <p className="text-white/60 text-sm md:text-base mb-6 max-w-lg mx-auto">Aproveite a oferta especial com frete grátis e pagamento na entrega — Pix, cartão, boleto ou dinheiro. Parcele na hora!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={scrollToOffer}
                className="bg-[#C6A756] hover:bg-[#b89a4a] text-white font-bold px-8 py-3 rounded-full"
                data-testid="faq-cta-buy"
              >
                QUERO MEU LISO MÁGICO
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 1500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-4 z-40 md:bottom-6 md:right-6 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors"
      data-testid="button-scroll-top"
    >
      <ChevronDown className="w-5 h-5 text-white rotate-180" />
    </button>
  );
}

function StickyCtaBar({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <Button
          onClick={onClick}
          className="w-full bg-[#C6A756] hover:bg-[#b89a4a] text-white font-bold py-3.5 rounded-full text-sm shadow-lg"
          data-testid="button-sticky-cta"
        >
          <Flame className="w-4 h-4 mr-2" />
          QUERO MEU LISO MÁGICO
        </Button>
        <p className="text-center text-[10px] text-slate-400 mt-1.5">Frete Grátis + Pagamento na Entrega</p>
      </div>
    </div>
  );
}

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
      <ScrollToTopButton />
      {/* --- ANNOUNCEMENT BAR --- */}
      <div className="bg-[#111111] text-[#D4A62A] py-2.5 text-center px-3 shadow-[0_2px_8px_rgba(0,0,0,0.15)] relative z-[1001]">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-[11px] md:text-sm font-bold">
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
            Frete Grátis
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1">
            <PackageCheck className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
            Pague na Entrega
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
            Garantia 7 Dias
          </span>
        </div>
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
                Liso perfeito, sem sair de casa
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#d4a017] mb-6">
                e sem pagar nada agora.
              </h2>
              
              <p className="hero-description text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                A progressiva sem formol que alisa, reduz o frizz e devolve o brilho — com resultado de salão por uma fração do preço.
              </p>

              <div className="flex flex-col gap-4 mb-6 items-center md:items-start">
                <Button 
                  size="lg" 
                  onClick={scrollToOffer} 
                  className="hero-cta-btn w-[90%] md:w-auto bg-[#d4a017] hover:bg-[#b88a14] text-white font-bold rounded-[40px] px-8 border-none shadow-lg transition-all duration-300"
                >
                  QUERO MEU LISO PERFEITO
                </Button>
                
                <div className="hero-checks space-y-1 text-white/90 text-sm font-medium">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a017]" />
                    Pague só quando receber em mãos
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a017]" />
                    Frete grátis + entrega em até 24h
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a017]" />
                    Resultado visível na 1ª aplicação
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- BENEFITS STRIP --- */}
      <div className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-3">
              O segredo do cabelo perfeito está no <span className="text-[#C6A756]">Liso Mágico</span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">Descubra o que torna esse produto o favorito de milhares de mulheres em todo o Brasil</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { icon: Sparkles, title: "Resultados progressivos", desc: "Auxilia no alinhamento dos fios, com melhora visível a cada aplicação." },
              { icon: ShieldCheck, title: "Elimina o frizz por completo", desc: "Barreira anti-umidade que mantém o liso impecável por semanas." },
              { icon: CheckCircle2, title: "Para todos os tipos de cabelo", desc: "Funciona em cabelos naturais, tingidos, com luzes ou outras químicas." },
              { icon: Clock, title: "Rápido e prático", desc: "Aplique em casa em menos de 1 hora. Sem salão, sem agendamento." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C6A756]/20 to-[#C6A756]/5 flex items-center justify-center mb-1">
                  <item.icon className="w-7 h-7 text-[#C6A756]" />
                </div>
                <h3 className="font-bold text-base md:text-lg font-sans text-white leading-tight">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* --- ECONOMY SECTION --- */}
      <section className="relative overflow-hidden economy-section">
        <div className="md:hidden relative w-full h-[220px] overflow-hidden">
          <img src={imgEconomyHero} alt="Profissional de cabelo" loading="lazy" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        </div>

        <div className="hidden md:block absolute inset-0">
          <img src={imgEconomyHero} alt="" loading="lazy" className="w-full h-full object-cover object-center" />
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
                      { label: "Progressiva", value: "R$ 149,00" },
                      { label: "Rendimento", value: "Até 5 aplicações" },
                      { label: "Por aplicação", value: "R$ 29,80" },
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
                  "Agende sua entrega em até 3 dias",
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
          <img src={imgResultsBg} alt="" loading="lazy" className="w-full h-full object-cover" />
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
                <img src={item.img} alt={item.name} loading="lazy" className="w-full h-auto" />
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
                <img src={item.img} alt={item.name} loading="lazy" className="w-full h-auto" />
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
                <img src={img} alt={`Resultado ${idx + 1}`} loading="lazy" className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <img src={item.img} alt={item.caption} loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
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
              <span className="font-bold text-green-600">PAGAMENTO NA ENTREGA</span> — aceitamos Pix, cartão, boleto e dinheiro. Parcele na hora!
            </p>
            <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto">
              Você faz o pedido aqui no site, nós enviamos, e você só paga ao carteiro quando o produto chegar na sua mão.
            </p>
            <p className="text-xl font-bold text-slate-900 mb-10">Risco ZERO para você!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Faça o Pedido", desc: "Preencha seus dados. Sem precisar pagar agora." },
              { step: "02", title: "Enviamos", desc: "Preparamos e despachamos seu pedido com total cuidado." },
              { step: "03", title: "Receba e Pague", desc: "Entrega em até 24h! Agende o melhor dia e pague somente quando receber." },
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
                <img src={mjnj} alt="Liso Mágico Produto" loading="lazy" className="w-full h-auto" />
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
      <section id="how-it-works" className="relative py-20 md:py-28 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
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
            className="flex justify-center mt-14"
          >
            <Button onClick={scrollToOffer} data-testid="button-cta-how-it-works">QUERO MEU LISO PERFEITO</Button>
          </motion.div>
        </div>
      </section>
      {/* --- ANVISA --- */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgAnvisaBg} alt="" loading="lazy" className="w-full h-full object-cover" />
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
                <img src={imgAnvisa} alt="Certificação ANVISA - Progressiva Liso Mágico" loading="lazy" className="w-full h-auto" />
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
      {/* --- FABRICATION VIDEOS --- */}
      <FabricationSection />
      {/* --- COMPOSIÇÃO --- */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C6A756]/[0.04] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#C6A756]/[0.03] rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#C6A756]/10 border border-[#C6A756]/20 text-[#C6A756] text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider">
              <FlaskConical className="w-4 h-4" />
              Composição do Produto
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Conheça a <span className="text-[#C6A756]">Composição</span> do Liso Mágico</h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">Ingredientes de alta performance selecionados para alisar, nutrir e proteger seus fios — 100% livre de formol.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Leaf, name: "Manteiga de Karité", inci: "Butyrospermum Parkii", benefit: "Nutrição profunda e brilho intenso. Rica em vitaminas A e E, penetra nos fios restaurando a fibra capilar." },
              { icon: FlaskConical, name: "Ácido Láctico", inci: "Lactic Acid", benefit: "Ação alisante progressiva e suave. Alinha a fibra do cabelo sem agredir, mantendo a saúde dos fios." },
              { icon: Droplets, name: "Extrato de Cacau", inci: "Theobroma Cacao", benefit: "Hidratação intensa e aroma natural. Antioxidante poderoso que sela a cutícula e reduz o frizz." },
              { icon: Sparkles, name: "Extrato de Coco", inci: "Cocos Nucifera", benefit: "Fortalecimento e brilho sedoso. Previne a quebra e devolve a elasticidade natural dos fios." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-gradient-to-b from-[#C6A756]/[0.08] to-transparent border border-[#C6A756]/20 rounded-2xl p-6 hover:border-[#C6A756]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C6A756]/10 flex items-center justify-center mb-4 group-hover:bg-[#C6A756]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#C6A756]" />
                </div>
                <h4 className="text-white font-bold text-base mb-1">{item.name}</h4>
                <p className="text-[#C6A756]/70 text-xs font-mono mb-3">{item.inci}</p>
                <p className="text-white/45 text-sm leading-relaxed">{item.benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-white/50 text-xs font-bold uppercase tracking-[3px] text-center mb-6">Demais ingredientes da fórmula</h3>
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
              <div className="ingredients-track hover:[animation-play-state:paused]">
                {[...Array(3)].flatMap((_, setIdx) =>
                  [
                    { inci: "Acqua", pt: "Água Purificada", func: "Veículo" },
                    { inci: "Cetrimonium Chloride", pt: "Cloreto de Cetrimônio", func: "Condicionante" },
                    { inci: "Cetearyl Alcohol", pt: "Álcool Cetearílico", func: "Emoliente" },
                    { inci: "Glycol Steareth", pt: "Mono. de Glicerila", func: "Estabilizante" },
                    { inci: "Shea Butter", pt: "Manteiga de Karité", func: "Nutritivo" },
                    { inci: "Mineral Oil", pt: "Óleo Mineral", func: "Protetor" },
                    { inci: "Phenoxyethanol", pt: "Fenoxietanol", func: "Conservante" },
                    { inci: "Lactic Acid", pt: "Ácido Láctico", func: "Alisante" },
                    { inci: "Extrato de Cacau", pt: "Theobroma Cacao", func: "Hidratante" },
                    { inci: "Extrato de Coco", pt: "Cocos Nucifera", func: "Fortalecedor" },
                    { inci: "Fragrance", pt: "Perfume", func: "Fragrância" },
                  ].map((item, idx) => (
                    <div
                      key={`${setIdx}-${idx}`}
                      className="ingredients-card"
                    >
                      <p className="text-white/80 font-semibold text-sm mb-1.5">{item.inci}</p>
                      <p className="text-white/30 text-xs mb-2">{item.pt}</p>
                      <span className="text-[#C6A756] text-[10px] font-bold uppercase tracking-wider bg-[#C6A756]/10 px-2.5 py-1 rounded-full">{item.func}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#C6A756]/10 via-transparent to-[#C6A756]/10 border border-[#C6A756]/15 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">0% Formol</p>
                  <p className="text-white/35 text-xs">Seguro para gestantes</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C6A756]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#C6A756]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">ANVISA nº 4.02912-7</p>
                  <p className="text-white/35 text-xs">Registro ativo e válido</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Cruelty Free</p>
                  <p className="text-white/35 text-xs">Não testado em animais</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- OFFERS --- */}
      <section id="offers" ref={offerSectionRef} className="py-16 bg-[#F8F6F3]">
        <div className="container mx-auto px-4">
          <SectionHeader title="Escolha seu Kit Ideal" subtitle="Ofertas por tempo limitado. Aproveite o Frete Grátis!" />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <OfferCard 
              title="1 UNIDADE" 
              price="R$ 149,00" 
              originalPrice="R$ 199,00" 
              link="https://entrega.logzz.com.br/pay/mem60mkm8/progressivalisomagico" 
              features={["Pagamento na entrega", "1 Frasco Liso Mágico", "Frete Grátis", "Agende o dia da entrega"]} 
              installment="12x de R$ 15,22"
              image={imgProduct1} 
              className="h-full"
            />
            <OfferCard 
              title="3 UNIDADES" 
              price="R$ 397,00" 
              originalPrice="R$ 537,00" 
              link="https://entrega.logzz.com.br/pay/mem60mkm8/liso3unidades" 
              features={["Pagamento na entrega", "3 Frascos Liso Mágico", "Frete Grátis", "Agende o dia da entrega"]} 
              isPopular={true} 
              savings="26%" 
              installment="12x de R$ 40,54"
              image={imgProduct2} 
              className="h-full"
              badge="Melhor Custo-Benefício"
            />
            <OfferCard 
              title="2 UNIDADES" 
              price="R$ 297,00" 
              originalPrice="R$ 398,00" 
              link="https://entrega.logzz.com.br/pay/mem60mkm8/liso2unidades" 
              features={["Pagamento na entrega", "2 Frascos Liso Mágico", "Frete Grátis", "Agende o dia da entrega"]} 
              savings="25%" 
              installment="12x de R$ 30,33"
              image={imgProduct3} 
              className="h-full"
            />
          </div>
        </div>
      </section>
      {/* --- GUARANTEE & TRUST --- */}
      <section className="relative overflow-hidden">
        <div className="md:hidden relative w-full h-[250px] overflow-hidden">
          <img src={imgDeliveryBg} alt="Entrega segura" loading="lazy" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </div>

        <div className="hidden md:block absolute inset-0">
          <img src={imgDeliveryBg} alt="" loading="lazy" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 to-white/60"></div>
        </div>

        <div className="relative bg-white/70 md:bg-transparent py-16 md:py-20">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="Sua Compra 100% Segura" subtitle="Compre com tranquilidade e confiança" />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200" />
              <div className="p-8 pb-6 flex flex-col items-center">
                <div className="w-44 h-44 flex items-center justify-center mb-4">
                  <img src={imgGuarantee} alt="Garantia 7 Dias" loading="lazy" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Garantia de 7 Dias</h3>
                <p className="text-sm text-slate-500 mb-4 max-w-[280px] leading-relaxed">Não gostou do resultado? Devolvemos 100% do seu dinheiro. Sem burocracia.</p>
              </div>
              <div className="bg-slate-50/80 px-8 py-6 space-y-3 border-t border-slate-100">
                {[
                  { text: "Devolução garantida sem complicação", icon: ShieldCheck },
                  { text: "Você só paga quando receber", icon: PackageCheck },
                  { text: "Compra 100% segura e protegida", icon: Lock },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-lg px-4 py-2.5 border border-pink-50 shadow-sm">
                    <item.icon className="w-4.5 h-4.5 text-rose-400 shrink-0" />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4B96A] via-[#C6A756] to-[#D4B96A]" />
              <div className="p-8 pb-6 flex flex-col items-center">
                <div className="w-44 h-44 flex items-center justify-center mb-4">
                  <img src={imgTrustBadge} alt="Pagamento na Entrega" loading="lazy" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Pagamento na Entrega</h3>
                <p className="text-sm text-slate-500 mb-4 max-w-[280px] leading-relaxed">Entrega em até 24h! Pague na entrega com Pix, cartão, boleto ou dinheiro. Parcele na hora!</p>
              </div>
              <div className="bg-slate-50/80 px-8 py-6 space-y-3 border-t border-slate-100">
                {[
                  { text: "Receba em até 24h — você agenda o dia", icon: Truck },
                  { text: "Pix, cartão, boleto ou dinheiro", icon: ShieldCheck },
                  { text: "Parcele na hora da entrega", icon: Eye },
                  { text: "Confira o produto antes de pagar", icon: PackageCheck },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-lg px-4 py-2.5 border border-amber-50 shadow-sm">
                    <item.icon className="w-4.5 h-4.5 text-[#C6A756] shrink-0" />
                    <span className="text-sm text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto"
          >
            {[
              { icon: ShieldCheck, label: "Compra Segura", desc: "Dados protegidos", color: "text-rose-400", bg: "bg-rose-50", border: "border-rose-100" },
              { icon: PackageCheck, label: "Entrega em 24h", desc: "Agende o melhor dia", color: "text-[#C6A756]", bg: "bg-amber-50", border: "border-amber-100" },
              { icon: Truck, label: "Frete Grátis", desc: "Sem taxa extra", color: "text-rose-400", bg: "bg-rose-50", border: "border-rose-100" },
              { icon: CheckCircle2, label: "Satisfação", desc: "Garantida ou devolvemos", color: "text-[#C6A756]", bg: "bg-amber-50", border: "border-amber-100" },
            ].map((selo, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center bg-white rounded-2xl px-4 py-5 border ${selo.border} shadow-sm hover:shadow-md transition-shadow`}>
                <div className={`w-11 h-11 rounded-full ${selo.bg} flex items-center justify-center mb-3`}>
                  <selo.icon className={`w-5 h-5 ${selo.color}`} />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">{selo.label}</span>
                <span className="text-[11px] text-slate-400 mt-1">{selo.desc}</span>
              </div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>
      {/* --- SOCIAL PROOF --- */}
      <section className="py-16 bg-white border-y border-slate-100 social-proof">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="Avaliações positivas de clientes que testaram o produto." subtitle="Resultados reais de quem já transformou o cabelo com Liso Mágico" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[imgBelo1, imgBelo2, imgBelo3, imgBelo4].map((img, idx) => (
                  <div key={idx} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-600 font-medium">+4.800 clientes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">4.9/5</span>
              <span className="text-xs text-slate-400">(2.347 avaliações)</span>
            </div>
          </motion.div>
          
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
      <FAQSection scrollToOffer={scrollToOffer} />
      {/* --- FINAL CTA --- */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#C6A756]/20 border border-[#C6A756]/30 rounded-full px-4 py-1.5 mb-6">
              <Flame className="w-4 h-4 text-[#C6A756]" />
              <span className="text-[#C6A756] text-sm font-semibold uppercase tracking-wide">Última Chance</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Não perca essa <span className="text-[#C6A756]">oportunidade</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-6 max-w-xl mx-auto">
              Garanta seu Liso Mágico com frete grátis, pagamento na entrega e desconto especial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto items-stretch">
            {[
              {
                title: "1 UNIDADE",
                price: "R$ 149",
                cents: ",00",
                originalPrice: "R$ 199,00",
                perUnit: "R$ 149,00/un",
                link: "https://entrega.logzz.com.br/pay/mem60mkm8/progressivalisomagico",
                installment: "12x de R$ 15,22",
                features: ["1 Frasco Liso Mágico", "Frete Grátis", "Pague na entrega"],
                popular: false,
                badge: null,
              },
              {
                title: "3 UNIDADES",
                price: "R$ 397",
                cents: ",00",
                originalPrice: "R$ 537,00",
                perUnit: "R$ 132,33/un",
                link: "https://entrega.logzz.com.br/pay/mem60mkm8/liso3unidades",
                installment: "12x de R$ 40,54",
                features: ["3 Frascos Liso Mágico", "Frete Grátis", "Pague na entrega"],
                popular: true,
                badge: "Melhor Custo-Benefício",
              },
              {
                title: "2 UNIDADES",
                price: "R$ 297",
                cents: ",00",
                originalPrice: "R$ 398,00",
                perUnit: "R$ 148,50/un",
                link: "https://entrega.logzz.com.br/pay/mem60mkm8/liso2unidades",
                installment: "12x de R$ 30,33",
                features: ["2 Frascos Liso Mágico", "Frete Grátis", "Pague na entrega"],
                popular: false,
                badge: null,
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#C6A756]/20 to-[#C6A756]/5 border-2 border-[#C6A756] md:scale-105 md:-translate-y-2 z-10 shadow-2xl shadow-[#C6A756]/10'
                    : 'bg-white/[0.04] border border-white/10 hover:border-white/20'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="bg-[#C6A756] text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
                    Mais Vendido
                  </div>
                )}

                <div className={`p-6 md:p-8 flex flex-col flex-1 ${plan.popular ? '' : 'pt-8'}`}>
                  <h3 className="text-lg font-bold text-white/90 text-center mb-1">{plan.title}</h3>
                  {plan.badge && (
                    <span className="text-[10px] font-bold text-[#C6A756] uppercase tracking-wider text-center block mb-3">{plan.badge}</span>
                  )}

                  <div className="text-center mb-4">
                    <span className="text-white/40 line-through text-sm block">De {plan.originalPrice}</span>
                    <div className="flex items-baseline justify-center gap-0.5 mt-1">
                      <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg font-bold text-white">{plan.cents}</span>
                    </div>
                    <span className="text-white/40 text-xs block mt-1">ou {plan.installment}</span>
                    <span className="text-[#C6A756] text-xs font-semibold block mt-1">{plan.perUnit}</span>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A756] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.link}
                    className={`block w-full text-center font-bold py-3.5 rounded-full text-sm transition-all duration-300 ${
                      plan.popular
                        ? 'bg-[#C6A756] hover:bg-[#b89a4a] text-white shadow-lg shadow-[#C6A756]/20'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                    data-testid={`button-final-plan-${idx}`}
                  >
                    COMPRAR AGORA
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 max-w-3xl mx-auto"
          >
            {[
              { icon: Truck, text: "Frete Grátis" },
              { icon: ShieldCheck, text: "Compra Segura" },
              { icon: PackageCheck, text: "Pague na Entrega" },
              { icon: Star, text: "Garantia 7 dias" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[#C6A756]" />
                <span className="text-white/40 text-xs font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
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
                <p>Fabricante: ERL Ind. Terceirista de Cosméticos</p>
                <p>Registro ANVISA nº 4.02912-7</p>
                <p>Resp. Técnica: Luciana Camargo — CRQ: 024023543</p>
                <p>Cambuí/MG — Brasil</p>
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
