"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div className="navbar bg-base-300 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          <Image
            src="/guayoyoSvgGold.svg"
            width={100}
            height={100}
            alt="Menu Icon"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {pathname === "/" ? (
            <>
              <li>
                <a href="#beneficios" onClick={handleNavClick}>
                  Beneficios
                </a>
              </li>
              <li>
                <details>
                  <summary>Servicios</summary>
                  <ul className="bg-base-300 rounded-t-none p-2">
                    <li>
                      <a href="#outOfTheBox" onClick={handleNavClick}>
                        OOTB
                      </a>
                    </li>
                    <li>
                      <a href="#custom" onClick={handleNavClick}>
                        Customizadas
                      </a>
                    </li>
                    <li>
                      <a href="#consultoria" onClick={handleNavClick}>
                        Consultoria
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#procesos" onClick={handleNavClick}>
                  Procesos
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/demo">Quienes somos</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
