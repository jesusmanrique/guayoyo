import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-base-300/50 backdrop-blur-md py-6 flex flex-col items-center glow-primary relative z-20">
      <div className="flex gap-6 mb-2">
        <a
          href="https://instagram.com/guayoyoagencia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-amber-400 transition hover-scale"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/584142074541"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-500 transition hover-scale"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://t.me/GuayoyTechSofiaBot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 transition 
          hover-scale"
          aria-label="Telegram"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577321167568"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-600 transition hover-scale"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="flex gap-6 mb-2">
        <Link href="/contacto" className="hover:text-info transition text-base ">
          Contacto
        </Link>
        <Link href="/blog" className="hover:text-info transition text-base ">
          Blog
        </Link>
        <Link
          href="/quienes-somos"
          className="hover:text-info transition text-base "
        >
          Quienes Somos
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:text-info transition text-base "
        >
          Política de Privacidad
        </Link>
      </div>
      <div className="text-sm text-gray-500">
        © {new Date().getFullYear()} Guayoyo. Todos los derechos reservados.
      </div>
    </footer>
  );
}
