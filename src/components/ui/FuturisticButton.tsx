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
}

export default function FuturisticButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: FuturisticButtonProps) {
  const baseClasses = "relative overflow-hidden rounded-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-primary text-primary-content glow-primary hover:glow-primary",
    secondary: "bg-secondary text-secondary-content glow-secondary hover:glow-secondary",
    info: "bg-info text-info-content glow-info hover:glow-info",
    success: "bg-success text-success-content glow-success hover:glow-success",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const ButtonContent = () => (
    <>
      {/* Efecto de brillo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Contenido del botón */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Efecto de borde brillante */}
      <div className="absolute inset-0 rounded-lg border border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    >
      <ButtonContent />
    </button>
  );
} 