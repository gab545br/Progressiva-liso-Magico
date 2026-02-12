import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "./Button";

interface OfferCardProps {
  title: string;
  price: string;
  originalPrice: string;
  link: string;
  features: string[];
  isPopular?: boolean;
  savings?: string;
  image: string;
}

export function OfferCard({ 
  title, 
  price, 
  originalPrice, 
  link, 
  features, 
  isPopular = false,
  savings,
  image
}: OfferCardProps) {
  
  const handleBuy = () => {
    window.location.href = link;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-3xl overflow-hidden bg-white shadow-xl transition-all duration-300 ${
        isPopular ? 'border-2 border-yellow-500 scale-105 md:-translate-y-4 z-10 shadow-yellow-500/20' : 'border border-slate-100 hover:border-yellow-200'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
          Mais Vendido - Escolha das Clientes
        </div>
      )}

      {savings && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          Economize {savings}
        </div>
      )}

      <div className={`p-6 ${isPopular ? 'pt-12' : 'pt-8'}`}>
        <div className="h-48 rounded-xl bg-slate-50 mb-6 overflow-hidden flex items-center justify-center">
          <img src={image} alt={title} className="h-full w-full object-cover transform hover:scale-110 transition-duration-500" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 text-center mb-2">{title}</h3>
        
        <div className="flex justify-center items-center gap-2 mb-1">
          <span className="text-slate-400 line-through text-sm">De {originalPrice}</span>
        </div>
        
        <div className="text-center mb-6">
          <span className="text-sm text-slate-600">Por apenas</span>
          <div className="text-4xl font-bold text-slate-900 tracking-tight">{price}</div>
          <div className="text-xs text-green-600 font-semibold mt-1">Pagamento na Entrega</div>
        </div>

        <ul className="space-y-3 mb-8">
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
          variant={isPopular ? "primary" : "secondary"}
          className="w-full"
          size="lg"
          pulse={isPopular}
        >
          QUERO COMPRAR AGORA
        </Button>
        
        <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          Garantia de 7 dias ou seu dinheiro de volta
        </p>
      </div>
    </motion.div>
  );
}
