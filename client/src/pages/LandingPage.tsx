import { useState, useRef } from "react";
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
  PackageCheck
} from "lucide-react";

import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { OfferCard } from "@/components/OfferCard";
import { useCreateLead } from "@/hooks/use-leads";
import { useToast } from "@/hooks/use-toast";

// Import images
import imgBefore1 from "@assets/8_1770932876365.webp";
import imgBefore2 from "@assets/7_1770932876366.webp";
import imgResult1 from "@assets/5_1770932876367.jpg";
import imgResult2 from "@assets/3_1770932876368.jpg";
import imgProductHero from "@assets/pt1_1770941481606.png";
import imgProduct1 from "@assets/pt1_1770941481606.png";
import imgProduct2 from "@assets/Pt2_1770941481605.png";
import imgProduct3 from "@assets/pt3_1770941481604.png";
import imgTestimonial1 from "@assets/tp1_1770941481602.png";
import imgTestimonial2 from "@assets/tp2_1770941481601.png";
import imgTestimonial3 from "@assets/tp3_1770941481564.png";
import imgReview from "@assets/Tp4_1770941481564.png";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offerSectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const createLead = useCreateLead();

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
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">Liso<span className="text-yellow-500">Mágico</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-yellow-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" onClick={scrollToOffer} className="animate-pulse">
              COMPRAR AGORA
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-800"
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
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-4">
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-slate-700 hover:text-yellow-600"
                  >
                    {item.label}
                  </a>
                ))}
                <Button onClick={() => { setIsMenuOpen(false); scrollToOffer(); }} className="w-full">
                  COMPRAR AGORA
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50 to-transparent -z-10 rounded-l-full opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl -z-10 opacity-60" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-6 border border-green-200 shadow-sm">
                <Truck className="w-4 h-4" />
                PAGAMENTO SOMENTE NA ENTREGA
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
                Liso Perfeito <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Sem Riscos</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Conquiste o cabelo dos sonhos com brilho espelhado e zero frizz na primeira aplicação. 
                Sinta-se segura: <span className="font-bold text-slate-900">você só paga quando receber o produto em casa.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="xl" onClick={scrollToOffer} className="w-full sm:w-auto shadow-yellow-500/40">
                  QUERO MEU LISO MÁGICO
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  Compra Segura
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  4.9/5 Avaliações
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={imgProductHero} alt="Liso Mágico Produto" className="w-full h-auto object-cover" />
                
                {/* Float Card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold overflow-hidden">
                          <img src={`https://randomuser.me/api/portraits/women/${20+i}.jpg`} alt="User" />
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">
                      <span className="font-bold text-slate-900">+12k</span> clientes felizes
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-800">"Melhor progressiva que já usei! O brilho é surreal."</p>
                </div>
              </div>
              
              {/* Decorative circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-100 rounded-full -z-10 blur-3xl opacity-50 animate-pulse" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- BENEFITS STRIP --- */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Brilho Espelhado", desc: "Acabamento profissional" },
              { icon: Clock, title: "Aplicação Rápida", desc: "Resultado em minutos" },
              { icon: ShieldCheck, title: "Zero Formol", desc: "Seguro para sua saúde" },
              { icon: Truck, title: "Entrega Expressa", desc: "Pagamento na entrega" },
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

      {/* --- BEFORE AND AFTER --- */}
      <section id="results" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Resultados Reais" 
            subtitle="Veja a transformação que o Liso Mágico proporciona na primeira aplicação."
          />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { before: imgBefore1, after: imgResult1, label: "Cabelos Crespos" },
              { before: imgBefore2, after: imgResult2, label: "Cabelos Ondulados" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-2 h-80">
                  <div className="relative h-full">
                    <img src={item.before} alt="Antes" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      ANTES
                    </div>
                  </div>
                  <div className="relative h-full">
                    <img src={item.after} alt="Depois" className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      DEPOIS
                    </div>
                  </div>
                </div>
                
                {/* Middle Divider */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-lg z-10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
                
                <div className="bg-white p-4 text-center border-t border-slate-100">
                  <p className="font-bold text-slate-800">{item.label}</p>
                  <div className="flex justify-center gap-1 mt-1">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button onClick={scrollToOffer} variant="outline" className="mx-auto">
              VER MAIS RESULTADOS
            </Button>
          </div>
        </div>
      </section>

      {/* --- BENEFITS DETAIL --- */}
      <section id="benefits" className="py-24 bg-rose-50/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader 
                title="Por que escolher o Liso Mágico?" 
                className="text-left mx-0"
              />
              
              <div className="space-y-6">
                {[
                  { title: "Liso na 1ª Aplicação", desc: "Fórmula potente que alinha os fios instantaneamente sem danificar." },
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

              <div className="mt-10">
                <Button onClick={scrollToOffer} size="lg">QUERO ESSES BENEFÍCIOS</Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={imgTestimonial1} alt="Mulher com cabelo lindo" className="w-full h-auto" />
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-200 rounded-full -z-10 blur-3xl opacity-60" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-rose-200 rounded-full -z-10 blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (PAYMENT) --- */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="Compra 100% Segura" subtitle="Pague somente quando receber o produto" light />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Faça seu Pedido", desc: "Escolha seu kit abaixo e preencha seus dados.", icon: ThumbsUp },
              { step: "02", title: "Envio Imediato", desc: "Nossa equipe prepara e envia seu pacote.", icon: PackageCheck },
              { step: "03", title: "Entrega em Casa", desc: "Receba no conforto do seu lar via Correios.", icon: Truck },
              { step: "04", title: "Pagamento", desc: "Pague ao entregador somente na hora da entrega.", icon: CheckCircle2 }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold text-white/10 mb-4 font-display">{item.step}</div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white font-sans">{item.title}</h4>
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OFFERS (CRITICAL) --- */}
      <section id="offers" ref={offerSectionRef} className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Escolha seu Kit Ideal" 
            subtitle="Ofertas por tempo limitado. Aproveite o Frete Grátis!" 
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Offer 1 */}
            <OfferCard 
              title="Kit Iniciante"
              price="R$ 97,90"
              originalPrice="R$ 149,90"
              link="https://app.coinzz.com.br/checkout/1-progressiva-liso-magico-0"
              features={["1 Frasco Liso Mágico", "Manual de Aplicação", "Garantia de 7 dias"]}
              image={imgProduct1}
            />

            {/* Offer 2 - BEST SELLER */}
            <OfferCard 
              title="Kit Tratamento Completo"
              price="R$ 167,90"
              originalPrice="R$ 299,90"
              link="https://app.coinzz.com.br/checkout/2-unidades-kozjf-0"
              features={["2 Frascos Liso Mágico", "Frete Grátis", "Manual de Aplicação", "Garantia de 7 dias"]}
              isPopular={true}
              savings="45%"
              image={imgProduct2}
            />

            {/* Offer 3 */}
            <OfferCard 
              title="Kit Salão em Casa"
              price="R$ 197,90"
              originalPrice="R$ 449,90"
              link="https://app.coinzz.com.br/checkout/3-unidades-mwl93-0"
              features={["3 Frascos Liso Mágico", "Frete Grátis Expresso", "Manual de Aplicação", "Garantia VIP"]}
              savings="56%"
              image={imgProduct3}
            />
          </div>

          {/* Secure Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['Compra Segura', 'Privacidade Protegida', 'Entrega Garantida', 'Satisfação 100%'].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <ShieldCheck className="w-5 h-5" /> {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF (Testimonial Image) --- */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="Quem usa, ama!" subtitle="Veja o que estão falando nas redes sociais" />
          
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img src={imgReview} alt="Depoimentos Clientes" className="w-full h-auto" />
          </div>

          <div className="mt-12">
            <Button onClick={scrollToOffer}>
              <span className="flex items-center gap-2">
                VER MAIS DEPOIMENTOS
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 bg-slate-50">
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
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                  {/* Fake social icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Links Rápidos</h5>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-yellow-500">Início</a></li>
                <li><a href="#offers" className="hover:text-yellow-500">Comprar Agora</a></li>
                <li><a href="#how-it-works" className="hover:text-yellow-500">Rastrear Pedido</a></li>
                <li><a href="#" className="hover:text-yellow-500">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-yellow-500">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Atendimento</h5>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Seg a Sex: 09h às 18h
                </li>
                <li>contato@lisomagico.com.br</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            &copy; 2024 Liso Mágico. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
