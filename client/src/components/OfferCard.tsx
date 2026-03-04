import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface OfferCardProps {
  title: string;
  price: string;
  originalPrice: string;
  link: string;
  features: string[];
  isPopular?: boolean;
  savings?: string;
  image: string;
  className?: string;
  installment?: string;
}

export function OfferCard({ 
  title, 
  price, 
  originalPrice, 
  link, 
  features, 
  isPopular = false,
  savings,
  image,
  className,
  installment
}: OfferCardProps) {
  
  const handleBuy = () => {
    window.location.href = link;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-3xl overflow-hidden bg-white shadow-xl transition-all duration-300 flex flex-col",
        isPopular ? 'border-2 border-[#C6A756] scale-105 md:-translate-y-4 z-10 shadow-lg' : 'border border-slate-100 hover:border-[#C6A756]/30',
        className
      )}
    >
      {isPopular && (
        <div className="absolute top-0 inset-x-0 bg-[#C6A756] text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
          MAIS VENDIDO
        </div>
      )}

      <div className={`p-6 flex flex-col flex-1 ${isPopular ? 'pt-12' : 'pt-8'}`}>
        <div className="aspect-square rounded-2xl bg-gradient-to-b from-amber-50/60 to-white mb-6 overflow-hidden flex items-center justify-center p-3">
          <img 
            src={image} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-all duration-500" 
          />
        </div>

        <h3 className="text-xl font-bold text-slate-800 text-center mb-2">{title}</h3>
        
        <div className="flex flex-col items-center gap-1 mb-6">
          <span className="text-slate-400 line-through text-sm">De {originalPrice}</span>
          
          {savings && (
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
              Economize {savings}
            </div>
          )}

          <div className="text-center mt-2">
            <span className="text-sm text-slate-600 block">Por apenas</span>
            <div className="text-4xl font-bold text-slate-900 tracking-tight">{price}</div>
            <div className="text-xs text-green-600 font-semibold mt-1">Pagamento na Entrega</div>
            {installment && (
              <div className="text-sm text-slate-500 mt-2">
                ou <span className="font-semibold text-slate-700">{installment}</span>
              </div>
            )}
          </div>
        </div>

        <ul className="space-y-3 mb-8 flex-1 min-h-[160px]">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
              <div className="mt-0.5 rounded-full bg-green-100 p-1">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <Button 
          onClick={handleBuy} 
          variant={isPopular ? "primary" : "primary"}
          className={cn(
            "w-full rounded-full font-bold transition-all duration-300",
            isPopular ? "text-white opacity-100" : "bg-black text-white hover:bg-slate-900"
          )}
          size="lg"
        >
          QUERO COMPRAR AGORA
        </Button>
        
        <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
          <Star className="w-3 h-3 fill-[#C6A756] text-[#C6A756]" />
          Garantia de 7 dias ou seu dinheiro de volta
        </p>
      </div>
    </motion.div>
  );
}
