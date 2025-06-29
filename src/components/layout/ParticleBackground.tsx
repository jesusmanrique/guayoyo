"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  connections: number[];
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
      if (canvas.parentElement) {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Configuración de partículas neuronales
    const particles: Particle[] = [];
    const particleCount = 80; // Menos partículas para mejor rendimiento
    const neuronColor = "rgba(0, 255, 255, 0.9)"; // Cian eléctrico unicolor
    const connectionColor = "rgba(0, 255, 255, 0.3)"; // Color para conexiones

    // Crear partículas iniciales
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5, // Movimiento más suave
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1.5, // Tamaño más pequeño para aspecto neuronal
        opacity: Math.random() * 0.6 + 0.4,
        life: Math.random() * 100,
        maxLife: 150 + Math.random() * 100,
        connections: [], // Array para almacenar índices de partículas conectadas
      });
    }

    // Función para establecer conexiones neuronales
    const establishConnections = () => {
      particles.forEach((particle, particleIdx) => {
        particle.connections = [];
        particles.forEach((otherParticle, otherIndex) => {
          if (particleIdx !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Conectar partículas cercanas (como neuronas)
            if (distance < 120 && particle.connections.length < 3) {
              particle.connections.push(otherIndex);
            }
          }
        });
      });
    };

    // Establecer conexiones iniciales
    establishConnections();

    // Función de animación neuronal
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar conexiones primero (para que estén detrás de las partículas)
      particles.forEach((particle) => {
        particle.connections.forEach(connectionIndex => {
          const connectedParticle = particles[connectionIndex];
          if (connectedParticle) {
            const dx = particle.x - connectedParticle.x;
            const dy = particle.y - connectedParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              // Crear gradiente para las conexiones
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y, 
                connectedParticle.x, connectedParticle.y
              );
              gradient.addColorStop(0, connectionColor);
              gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.6)");
              gradient.addColorStop(1, connectionColor);
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(connectedParticle.x, connectedParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      particles.forEach((particle) => {
        // Movimiento neuronal más orgánico
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Añadir movimiento ondulante sutil (como impulsos neuronales)
        const time = Date.now() * 0.001;
        particle.x += Math.sin(time) * 0.5;
        particle.y += Math.cos(time) * 0.5;

        // Rebotar en los bordes con comportamiento neuronal
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx = -particle.vx * 0.8;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy = -particle.vy * 0.8;
        }

        // Mantener partículas dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Actualizar vida
        particle.life++;
        if (particle.life > particle.maxLife) {
          // Renovar partícula
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 1.5;
          particle.vy = (Math.random() - 0.5) * 1.5;
          particle.size = Math.random() * 3 + 1.5;
          particle.opacity = Math.random() * 0.6 + 0.4;
          particle.life = 0;
          particle.maxLife = 150 + Math.random() * 100;
          particle.connections = [];
        }

        // Calcular opacidad basada en la vida
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * (1 - lifeRatio * 0.2);

        // Dibujar partícula neuronal con glow
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        
        // Glow exterior neuronal
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, neuronColor);
        gradient.addColorStop(0.3, "rgba(0, 255, 255, 0.4)");
        gradient.addColorStop(0.7, "rgba(0, 255, 255, 0.1)");
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo brillante de la neurona
        ctx.fillStyle = "rgba(0, 255, 255, 1)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Punto central más brillante (como sinapsis)
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Reestablecer conexiones periódicamente
      if (Math.random() < 0.01) { // 1% de probabilidad por frame
        establishConnections();
      }

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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ zIndex: 0 }}
    />
  );
} 