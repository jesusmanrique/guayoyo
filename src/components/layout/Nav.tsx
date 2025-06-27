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

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const href = e.currentTarget.getAttribute("href");
  if (href?.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
      <div className={`flex-1 flex items-center${menuOpen ? ' hidden' : ''}`}>
        <Link className="btn btn-ghost text-xl hover-scale" href="/">
          <Image
            src="/guayoyoSvgGold.svg"
            width={100}
            height={100}
            alt="Menu Icon"
          />
        </Link>
        {pathname === "/" ? (
          <ul className="menu menu-horizontal px-1 ml-2 flex items-center gap-2">
            <li>
              <a href="#beneficios" onClick={handleNavClick} className="hover-glow">
                Beneficios
              </a>
            </li>
            <li ref={serviciosRef} className="relative">
              <button
                className="hover-glow flex items-center gap-1"
                onClick={() => setServiciosOpen((open) => !open)}
                type="button"
              >
                Servicios
                <svg className={`w-4 h-4 transition-transform ${serviciosOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {serviciosOpen && (
                <ul className="absolute left-0 mt-8 w-48 bg-base-200/80 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl p-2 z-50 animate-fade-in-scale">
                  <li>
                    <a href="#outOfTheBox" onClick={(e) => { handleNavClick(e); setServiciosOpen(false); }} className="hover-glow rounded-lg px-3 py-2 transition-colors hover:bg-primary/20">Listas para Usar</a>
                  </li>
                  <li>
                    <a href="#custom" onClick={(e) => { handleNavClick(e); setServiciosOpen(false); }} className="hover-glow rounded-lg px-3 py-2 transition-colors hover:bg-primary/20">Personalizado</a>
                  </li>
                  <li>
                    <a href="#consultoria" onClick={(e) => { handleNavClick(e); setServiciosOpen(false); }} className="hover-glow rounded-lg px-3 py-2 transition-colors hover:bg-primary/20">Consultoría</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#procesos" onClick={handleNavClick} className="hover-glow">
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
          {pathname !== "/" && (
            <>
              <li>
                <Link href="/contacto" className="hover-glow">Contacto</Link>
              </li>
              <li>
                <Link href="/blog" className="hover-glow">Blog</Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover-glow">Quienes Somos</Link>
              </li>
            </>
          )}
          <SignedIn>
            <li>
              <Link href="/dashboard" className="btn btn-primary font-bold hover-glow ml-2">Dashboard</Link>
            </li>
            <li>
              <UserButton />
            </li>
          </SignedIn>
          <SignedOut>
            <li>
              <SignUpButton mode="modal">
                <button className="btn btn-secondary ml-5 hover-glow glow-secondary">Registro</button>
              </SignUpButton>
            </li>
            <li>
              <SignInButton mode="modal">
                <button className="btn btn-neutral ml-2 hover-glow">Login</button>
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
          className="absolute top-full left-0 w-full bg-base-100 shadow-lg z-50 flex flex-col items-center lg:hidden glow-secondary animate-slide-in-up"
        >
          <ul className="menu menu-vertical w-full px-1">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover-glow">
                Inicio
              </Link>
            </li>
            {pathname === "/" && (
              <>
                <li>
                  <a
                    href="#beneficios"
                    onClick={(e) => {
                      handleNavClick(e);
                      setMenuOpen(false);
                    }}
                    className="hover-glow"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <button
                    className="hover-glow flex items-center gap-1 w-full text-left"
                    onClick={() => setServiciosOpen((open) => !open)}
                    type="button"
                  >
                    Servicios
                    <svg className={`w-4 h-4 transition-transform ${serviciosOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {serviciosOpen && (
                    <ul className="ml-4 mt-8 w-44 bg-base-200/80 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl p-2 z-50 animate-fade-in-scale">
                      <li>
                        <a
                          href="#outOfTheBox"
                          onClick={(e) => { handleNavClick(e); setServiciosOpen(false); setMenuOpen(false); }}
                          className="hover-glow rounded-lg px-3 py-2 transition-colors hover:bg-primary/20"
                        >
                          Listas para Usar
                        </a>
                      </li>
                      <li>
                        <a
                          href="#custom"
                          onClick={(e) => { handleNavClick(e); setServiciosOpen(false); setMenuOpen(false); }}
                          className="hover-glow rounded-lg px-3 py-2 transition-colors hover:bg-primary/20"
                        >
                          Personalizado
                        </a>
                      </li>
                      <li>
                        <a
                          href="#consultoria"
                          onClick={(e) => { handleNavClick(e); setServiciosOpen(false); setMenuOpen(false); }}
                          className="hover-glow rounded-lg px-3 py-2 transition-colors hover:bg-primary/20"
                        >
                          Consultoría
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#procesos"
                    onClick={(e) => {
                      handleNavClick(e);
                      setMenuOpen(false);
                    }}
                    className="hover-glow"
                  >
                    Procesos
                  </a>
                </li>
              </>
            )}
            <SignedIn>
              <li>
                <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="btn btn-primary font-bold hover-glow ml-2">
                  Dashboard
                </Link>
              </li>
              <li>
                <UserButton showName />
              </li>
            </SignedIn>
            <SignedOut>
              <li>
                <SignUpButton mode="modal">
                  <button className="btn btn-secondary ml-5 hover-glow glow-secondary">Registro</button>
                </SignUpButton>
              </li>
              <li>
                <SignInButton mode="modal">
                  <button className="btn btn-neutral ml-2 hover-glow">Login</button>
                </SignInButton>
              </li>
            </SignedOut>
          </ul>
        </div>
      )}
    </div>
  );
}
