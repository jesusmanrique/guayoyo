'use client'
import React, { useState, Suspense } from "react";
import FuturisticButton from "@/components/ui/FuturisticButton";
import { MdDashboard, MdBuild, MdPeople, MdSettings, MdHelp } from "react-icons/md";

const SECCIONES = [
  { key: "resumen", label: "Resumen", icon: <MdDashboard size={22} /> },
  { key: "automatizaciones", label: "Automatizaciones", icon: <MdBuild size={22} /> },
  { key: "usuarios", label: "Usuarios", icon: <MdPeople size={22} /> },
  { key: "configuracion", label: "Configuración", icon: <MdSettings size={22} /> },
  { key: "soporte", label: "Soporte", icon: <MdHelp size={22} /> },
];

function DashboardSkeleton() {
  return (
    <div className="min-h-screen flex bg-base-100/60 animate-pulse">
      <aside className="w-64 min-h-screen bg-base-200 border-r border-white/20 p-6 flex flex-col gap-4 shadow-lg z-20">
        <div className="h-10 w-3/4 bg-base-300 rounded mb-8 mx-auto" />
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="h-10 w-full bg-base-300 rounded mb-2" />
        ))}
      </aside>
      <main className="flex-1 p-8 mt-20 flex flex-col items-start justify-start bg-base-200 border border-white/20 rounded-xl m-8 shadow-lg min-h-[80vh]">
        <div className="w-full h-16 bg-base-300 rounded mb-6" />
        <div className="w-full h-64 bg-base-300 rounded-xl mb-6" />
      </main>
    </div>
  );
}

function Resumen() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-white">Resumen</h2>
      <p className="text-white mb-6">Bienvenido a tu panel de control. Aquí puedes ver un resumen de tu actividad, automatizaciones activas y métricas clave.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta 1 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-white mb-2">Actividad Reciente</h3>
          <div className="w-full h-32 bg-base-200/40 rounded-xl mb-2 flex items-center justify-center text-white">
            {/* Aquí irá el gráfico de actividad */}
            <span className="text-sm">[Gráfico de actividad]</span>
          </div>
        </div>
        {/* Tarjeta 2 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-white mb-2">Estadisticas Mensuales</h3>
          <div className="w-full h-32 bg-base-200/40 rounded-xl mb-2 flex items-center justify-center text-white">
            {/* Aquí irá el gráfico de automatizaciones */}
            <span className="text-sm">[Gráfico de canales]</span>
          </div>
        </div>
        {/* Tarjeta 3 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-white mb-2">Usuarios Registrados</h3>
          <div className="w-full h-32 bg-base-200/40 rounded-xl mb-2 flex items-center justify-center text-white">
            {/* Aquí irá el gráfico de usuarios */}
            <span className="text-sm">[Gráfico de usuarios]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Automatizaciones() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Automatizaciones</h2>
      <p className="text-white mb-2">Gestiona y monitorea tus automatizaciones aquí.</p>
      <ul className="list-disc list-inside text-white">
        <li>WhatsApp Bot: Activo</li>
        <li>Integración Notion: En espera</li>
        <li>Chatbot Web: Activo</li>
      </ul>
    </div>
  );
}

function Usuarios() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Usuarios</h2>
      <p className="text-white mb-2">Administra los usuarios de tu empresa y sus permisos.</p>
      <ul className="list-disc list-inside text-white">
        <li>Juan Pérez - Admin</li>
        <li>María Gómez - Usuario</li>
        <li>Carlos Ruiz - Usuario</li>
      </ul>
    </div>
  );
}

function Configuracion() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Configuración</h2>
      <p className="text-white mb-2">Ajusta la configuración de tu cuenta y preferencias del sistema.</p>
      <ul className="list-disc list-inside text-white">
        <li>Notificaciones: Activadas</li>
        <li>Idioma: Español</li>
        <li>Zona horaria: GMT-4</li>
      </ul>
    </div>
  );
}

function Soporte() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Soporte</h2>
      <p className="text-white mb-2">¿Tienes dudas o problemas? Contáctanos y te ayudaremos.</p>
      <ul className="list-disc list-inside text-white">
        <li>Email: <a href="mailto:soporte@guayoyo.tech" className="text-info underline">soporte@guayoyo.tech</a></li>
        <li>WhatsApp: <a href="https://wa.me/584142074541" className="text-success underline">+58 414 2074541</a></li>
      </ul>
    </div>
  );
}

const COMPONENTES: Record<string, React.FC> = {
  resumen: Resumen,
  automatizaciones: Automatizaciones,
  usuarios: Usuarios,
  configuracion: Configuracion,
  soporte: Soporte,
};

function DashboardContent() {
  const [seccion, setSeccion] = useState("resumen");
  const [collapsed, setCollapsed] = useState(false);
  const Componente = COMPONENTES[seccion] || Resumen;

  return (
    <div className="min-h-screen flex bg-base-100/60">
      {/* Menú lateral */}
      <aside className={`fixed top-20 left-0 transition-all duration-300 min-h-[calc(100vh-5rem)] bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col gap-4 shadow-lg z-20 overflow-hidden ${collapsed ? 'w-16' : 'w-64'}`}>
        {/* Botón colapsar/expandir siempre dentro del padding superior */}
        <button
          className={`mt-0 absolute top-5 ${collapsed ? 'left-1/2 -translate-x-1/2' : 'right-2'} w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/20 transition z-30 opacity-70`}
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? 'Expandir menú' : 'Colapsar menú'}
        >
          {/* Icono chevron, cambia dirección según estado */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{transform: !collapsed ? 'rotate(180deg)' : 'rotate(0deg)'}}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Opciones del menú */}
        <div className="flex flex-col gap-2 mt-20 w-full">
          {SECCIONES.map((sec) => (
            <FuturisticButton
              key={sec.key}
              className={`w-[90%] mx-auto font-semibold text-white transition-all duration-300 overflow-hidden ${collapsed ? 'text-xs px-0 py-0 min-w-0 flex items-center justify-center' : 'px-0 py-0'} mb-2`}
              onClick={() => setSeccion(sec.key)}
            >
              {!collapsed ? sec.label : sec.icon}
            </FuturisticButton>
          ))}
        </div>
      </aside>
      {/* Área de contenido */}
      <div className={`flex-1 pt-20 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
        <main className="p-8 flex flex-col items-start justify-start bg-white/10 backdrop-blur-md border border-white/20 rounded-xl m-8 shadow-lg min-h-[80vh]">
          <Componente />
        </main>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}
