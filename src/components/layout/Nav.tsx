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

  return (
    <div className="navbar bg-transparent backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 glow-primary">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl hover-scale" href="/">
          <Image
            src="/guayoyoSvgGold.svg"
            width={100}
            height={100}
            alt="Menu Icon"
          />
        </Link>
      </div>
      {/* Hamburger menu for mobile */}
      <div className="lg:hidden flex-none">
        <button
          className="btn btn-square btn-ghost hover-glow"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
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
      </div>
      {/* Desktop menu */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1">
          <SignedIn>
            <li>
              <Link href="/" className="hover-glow">Inicio</Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover-glow">dashboard</Link>
            </li>
            <UserButton />
          </SignedIn>
          {pathname === "/" ? (
            <SignedOut>
              <li>
                <a href="#beneficios" onClick={handleNavClick} className="hover-glow">
                  Beneficios
                </a>
              </li>
              <li>
                <details>
                  <summary className="hover-glow">Servicios</summary>
                  <ul className="bg-base-100 rounded-t-none p-2 glow-secondary">
                    <li>
                      <a href="#outOfTheBox" onClick={handleNavClick} className="hover-glow">
                        plug & play
                      </a>
                    </li>
                    <li>
                      <a href="#custom" onClick={handleNavClick} className="hover-glow">
                        Customizadas
                      </a>
                    </li>
                    <li>
                      <a href="#consultoria" onClick={handleNavClick} className="hover-glow">
                        Consultoria
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#procesos" onClick={handleNavClick} className="hover-glow">
                  Procesos
                </a>
              </li>

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
          ) : (
            <SignedOut>
              <li>
                <Link href="/" className="hover-glow">Inicio</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover-glow">Contacto</Link>
              </li>
              <li>
                <Link href="/blog" className="hover-glow">Blog</Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover-glow">Quienes somos</Link>
              </li>
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
          )}
        </ul>
      </div>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-base-100 shadow-lg z-50 flex flex-col items-center lg:hidden glow-secondary animate-slide-in-up"
        >
          <ul className="menu menu-vertical w-full px-1">
            <SignedIn>
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className="hover-glow">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="hover-glow">
                  dashboard
                </Link>
              </li>
              <li>
                <UserButton showName />
              </li>
            </SignedIn>
            {pathname === "/" ? (
              <SignedOut>
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
                  <details>
                    <summary className="hover-glow">Servicios</summary>
                    <ul className="bg-base-100 rounded-t-none p-2 glow-secondary">
                      <li>
                        <a
                          href="#outOfTheBox"
                          onClick={(e) => {
                            handleNavClick(e);
                            setMenuOpen(false);
                          }}
                          className="hover-glow"
                        >
                          plug & play
                        </a>
                      </li>
                      <li>
                        <a
                          href="#custom"
                          onClick={(e) => {
                            handleNavClick(e);
                            setMenuOpen(false);
                          }}
                          className="hover-glow"
                        >
                          Customizadas
                        </a>
                      </li>
                      <li>
                        <a
                          href="#consultoria"
                          onClick={(e) => {
                            handleNavClick(e);
                            setMenuOpen(false);
                          }}
                          className="hover-glow"
                        >
                          Consultoria
                        </a>
                      </li>
                    </ul>
                  </details>
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
                <li>
                  <SignUpButton mode="modal">
                    <button
                      className="btn btn-secondary w-full hover-glow glow-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      Registro
                    </button>
                  </SignUpButton>
                </li>
                <li>
                  <SignInButton mode="modal">
                    <button
                      className="btn btn-neutral w-full hover-glow"
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </button>
                  </SignInButton>
                </li>
              </SignedOut>
            ) : (
              <SignedOut>
                <li>
                  <Link href="/" onClick={() => setMenuOpen(false)} className="hover-glow">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" onClick={() => setMenuOpen(false)} className="hover-glow">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover-glow">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quienes-somos"
                    onClick={() => setMenuOpen(false)}
                    className="hover-glow"
                  >
                    Quienes somos
                  </Link>
                </li>
                <li>
                  <SignUpButton mode="modal">
                    <button
                      className="btn btn-secondary w-full hover-glow glow-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      Registro
                    </button>
                  </SignUpButton>
                </li>
                <li>
                  <SignInButton mode="modal">
                    <button
                      className="btn btn-neutral w-full hover-glow"
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </button>
                  </SignInButton>
                </li>
              </SignedOut>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
