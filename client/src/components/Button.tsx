import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg" | "xl";
  pulse?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", pulse = false, children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white shadow-lg shadow-yellow-500/30 border-none",
      secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20",
      outline: "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-50",
      whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl w-full md:w-auto",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2",
          variants[variant],
          sizes[size],
          pulse && "animate-pulse",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
