"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Configuración de partículas mejorada
    const particles: Particle[] = [];
    const particleCount = 150; // Aumentado de 50 a 150
    const colors = [
      "rgba(59, 130, 246, 0.8)",   // Azul más brillante
      "rgba(16, 185, 129, 0.8)",   // Verde más brillante
      "rgba(245, 158, 11, 0.8)",   // Amarillo más brillante
      "rgba(239, 68, 68, 0.8)",    // Rojo más brillante
      "rgba(139, 92, 246, 0.8)",   // Púrpura más brillante
      "rgba(236, 72, 153, 0.8)",   // Rosa más brillante
      "rgba(34, 197, 94, 0.8)",    // Verde esmeralda
      "rgba(14, 165, 233, 0.8)",   // Azul cielo
    ];

    // Crear partículas iniciales
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2, // Velocidad más alta
        vy: (Math.random() - 0.5) * 2, // Velocidad más alta
        size: Math.random() * 4 + 2, // Tamaño más grande (2-6px)
        opacity: Math.random() * 0.8 + 0.4, // Opacidad más alta (0.4-1.2)
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 200,
      });
    }

    // Función de animación mejorada
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Actualizar posición con movimiento más dinámico
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Añadir movimiento ondulante sutil
        particle.x += Math.sin(Date.now() * 0.001 + index) * 0.3;
        particle.y += Math.cos(Date.now() * 0.001 + index) * 0.3;

        // Rebotar en los bordes con más energía
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx = -particle.vx * 1.1; // Aumentar velocidad al rebotar
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy = -particle.vy * 1.1; // Aumentar velocidad al rebotar
        }

        // Mantener partículas dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Actualizar vida
        particle.life++;
        if (particle.life > particle.maxLife) {
          // Renovar partícula en lugar de eliminarla
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = (Math.random() - 0.5) * 2;
          particle.size = Math.random() * 4 + 2;
          particle.opacity = Math.random() * 0.8 + 0.4;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
          particle.life = 0;
          particle.maxLife = 100 + Math.random() * 200;
        }

        // Calcular opacidad basada en la vida
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * (1 - lifeRatio * 0.3);

        // Dibujar partícula con glow
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        
        // Glow exterior
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, particle.color.replace('0.8', '0.3'));
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo brillante
        ctx.fillStyle = particle.color.replace('0.8', '1');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Conectar partículas cercanas con líneas sutiles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) { // Distancia de conexión aumentada
              const opacity = (100 - distance) / 100 * 0.1; // Opacidad sutil
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ zIndex: 10 }}
    />
  );
} 