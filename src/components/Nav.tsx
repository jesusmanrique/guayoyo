import Image from "next/image";

export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="https://guayoyo.tech">
          {" "}
          <Image
            src="/guayoyoSvgGold.svg"
            width={100}
            height={100}
            alt="Menu Icon"
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#beneficios">Beneficios</a>
          </li>
          <li>
            <details>
              <summary>Servicios</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="#outOfTheBox">OOTB</a>
                </li>
                <li>
                  <a href="#custom">Customizadas</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#">Procesos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
