"use client";
import { ReactNode } from "react";

interface FuturisticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "info" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function FuturisticButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: FuturisticButtonProps) {
  // Gradiente azul-cian pill
  const gradientBg = "bg-gradient-to-r from-[#5caaff] to-[#3ee6ff]";
  const baseClasses = `glassmorph-btn ${gradientBg} relative overflow-hidden rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl z-10`;
  
  const variantClasses = {
    primary: "text-white",
    secondary: "text-white/90",
    info: "text-white",
    success: "text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-5 text-2xl",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const ButtonContent = () => (
    <>
      {/* Contenido del botón */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Borde brillante sutil */}
      <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none z-10" style={{boxShadow:'0 0 16px 2px rgba(255,255,255,0.08)'}} />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${buttonClasses} group inline-block`}
        onClick={onClick}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      className={`${buttonClasses} group`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <ButtonContent />
    </button>
  );
} 