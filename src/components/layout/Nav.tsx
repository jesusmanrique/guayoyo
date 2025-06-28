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
              <UserButton appearance={{ elements: { userButtonPopoverCard: "bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl p-4" } }} />
            </li>
          </SignedIn>
          <SignedOut>
            <li>
              <SignUpButton mode="modal">
                <FuturisticButton variant="primary" size="md" className="ml-5 w-full md:w-auto">
                  Registro
                </FuturisticButton>
              </SignUpButton>
            </li>
            <li>
              <SignInButton mode="modal">
                <FuturisticButton variant="info" size="md" className="ml-2 w-full md:w-auto">
                  Login
                </FuturisticButton>
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
                <div className="flex justify-center mt-2">
                  <UserButton showName appearance={{ elements: { userButtonPopoverCard: "bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl p-4" } }} />
                </div>
              </li>
            </SignedIn>
            <SignedOut>
              <li>
                <SignUpButton mode="modal">
                  <FuturisticButton variant="primary" size="md" className="ml-5 w-full md:w-auto">
                    Registro
                  </FuturisticButton>
                </SignUpButton>
              </li>
              <li>
                <SignInButton mode="modal">
                  <FuturisticButton variant="info" size="md" className="ml-2 w-full md:w-auto">
                    Login
                  </FuturisticButton>
                </SignInButton>
              </li>
            </SignedOut>
          </ul>
        </div>
      )}
    </div>
  );
}
