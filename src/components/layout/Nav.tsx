"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import FuturisticButton from "@/components/ui/FuturisticButton";

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, closeMenus?: () => void) => {
  const href = e.currentTarget.getAttribute("href");
  if (href?.startsWith("#")) {
    e.preventDefault();
    if (closeMenus) {
      closeMenus();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const serviciosRef = useRef<HTMLLIElement>(null);

  // Cierra el menú al hacer click fuera
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      // No cerrar el menú si el click fue dentro del popover de Clerk
      if ((event.target as HTMLElement).closest('.cl-userButtonPopoverCard')) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Cierra el menú de servicios al hacer click fuera
  useEffect(() => {
    if (!serviciosOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (serviciosRef.current && !serviciosRef.current.contains(event.target as Node)) {
        setServiciosOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [serviciosOpen]);

  return (
    <div className="navbar bg-transparent backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 glow-primary">
      <div className="flex-1 flex items-center hidden lg:flex">
        <Link className="btn btn-ghost text-xl hover-scale" href="/">
          <Image
            src="/guayoyo-logo.svg"
            width={140}
            height={40}
            alt="Guayoyo Logo"
            className="object-contain"
          />
        </Link>
        {pathname === "/" ? (
          <ul className="menu menu-horizontal px-1 ml-2 flex items-center gap-2">
            <li ref={serviciosRef} className="relative">
              <a href="#outOfTheBox" onClick={(e) => handleNavClick(e, () => {})} className="hover-glow">
                Servicios
              </a>
            </li>
            <li>
              <a href="#procesos" onClick={(e) => handleNavClick(e, () => {})} className="hover-glow">
                Procesos
              </a>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1 ml-2 flex items-center gap-2">
            <li>
              <Link href="/" className="hover-glow">Inicio</Link>
            </li>
          </ul>
        )}
      </div>
      {/* Enlaces a la derecha */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <Link href="/contacto" className="hover-glow">Contacto</Link>
          </li>
          <li>
            <Link href="/blog" className="hover-glow">Blog</Link>
          </li>
          <li>
            <Link href="/quienes-somos" className="hover-glow">Quienes Somos</Link>
          </li>
          <SignedIn>
            <li className="m-0 p-0 bg-transparent shadow-none border-none">
              <Link href="/dashboard" className="hidden md:inline-block m-0 p-0 bg-transparent shadow-none border-none">
                <FuturisticButton variant="primary" size="md">
                  Dashboard
                </FuturisticButton>
              </Link>
            </li>
            <li>
              <UserButton appearance={{ 
                elements: { 
                  userButtonPopoverCard: "backdrop-blur-lg bg-gradient-to-br from-white/15 via-[#1a2a3a]/30 to-[#3ee6ff]/10 border border-white/20 rounded-3xl shadow-2xl",
                  userButtonPopoverActionButton: "text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all",
                  userButtonPopoverActionButtonText: "text-white/90 hover:text-white transition-colors",
                  userButtonPopoverFooter: "border-white/20",
                  userButtonPopoverFooterAction: "text-white/70 hover:text-white transition-colors"
                } 
              }} />
            </li>
          </SignedIn>
          <SignedOut>
            <li className="flex flex-col gap-2 w-full lg:flex-row lg:gap-2 lg:w-auto">
              <SignUpButton mode="modal">
                <button className="glassmorph-btn bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white font-bold rounded-full px-6 py-3 shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300 w-full text-center lg:w-auto">
                  Registro
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="glassmorph-btn bg-gradient-to-r from-white/10 to-white/5 text-white border border-white/20 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300 w-full text-center lg:w-auto">
                  Login
                </button>
              </SignInButton>
            </li>
          </SignedOut>
        </ul>
      </div>
      {/* Botón hamburguesa solo en móvil */}
      <button
        className="lg:hidden btn btn-square btn-ghost ml-2"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full px-2 pt-3 pb-6 bg-black/80 backdrop-blur-md shadow-2xl z-50 flex flex-col items-center lg:hidden animate-slide-in-up rounded-b-2xl"
        >
          <ul className="menu menu-vertical w-full gap-1 divide-y divide-white/10 bg-transparent">
            <li>
              <Link href="/" onClick={(e) => { handleNavClick(e, () => { setMenuOpen(false); }); }} className="hover-glow rounded-xl px-4 py-3 text-base font-semibold">
                Inicio
              </Link>
            </li>
            {pathname === "/" && (
              <>
                <li className="lg:hidden">
                  <a
                    href="#outOfTheBox"
                    onClick={(e) => { handleNavClick(e, () => { setMenuOpen(false); }); }}
                    className="hover-glow rounded-xl px-4 py-3 text-base font-semibold"
                  >
                    Servicios
                  </a>
                </li>
                <li className="lg:hidden">
                  <a
                    href="#procesos"
                    onClick={(e) => { handleNavClick(e, () => { setMenuOpen(false); }); }}
                    className="hover-glow rounded-xl px-4 py-3 text-base font-semibold"
                  >
                    Procesos
                  </a>
                </li>
              </>
            )}
            <SignedIn>
              <li>
                <Link href="/dashboard" onClick={(e) => { handleNavClick(e, () => { setMenuOpen(false); }); }} className="btn btn-primary font-bold hover-glow rounded-xl px-4 py-3 mt-2">
                  Dashboard
                </Link>
              </li>
              <li>
                <div className="flex justify-center mt-2" onClick={e => e.stopPropagation()}>
                  <UserButton showName appearance={{ 
                    elements: { 
                      userButtonPopoverCard: "backdrop-blur-lg bg-gradient-to-br from-white/15 via-[#1a2a3a]/30 to-[#3ee6ff]/10 border border-white/20 rounded-3xl shadow-2xl",
                      userButtonPopoverActionButton: "text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all",
                      userButtonPopoverActionButtonText: "text-white/90 hover:text-white transition-colors",
                      userButtonPopoverFooter: "border-white/20",
                      userButtonPopoverFooterAction: "text-white/70 hover:text-white transition-colors"
                    } 
                  }} />
                </div>
              </li>
            </SignedIn>
            <SignedOut>
              <li className="flex flex-col gap-2 w-full lg:flex-row lg:gap-2 lg:w-auto">
                <SignUpButton mode="modal">
                  <button className="glassmorph-btn bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white font-bold rounded-full px-6 py-3 shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300 w-full text-center">
                    Registro
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="glassmorph-btn bg-gradient-to-r from-white/10 to-white/5 text-white border border-white/20 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300 w-full text-center">
                    Login
                  </button>
                </SignInButton>
              </li>
            </SignedOut>
          </ul>
        </div>
      )}
    </div>
  );
}
