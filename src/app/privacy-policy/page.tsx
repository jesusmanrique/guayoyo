export default function page() {
  return (
    <main className="max-w-3xl pt-20 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="mb-4">
        En Guayoyo, valoramos y respetamos tu privacidad. Esta Política de
        Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos
        tu información personal cuando utilizas nuestro sitio web y servicios.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Información que recopilamos
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Información de contacto (nombre, correo electrónico, teléfono, etc.)
          que nos proporcionas al completar formularios o comunicarte con
          nosotros.
        </li>
        <li>
          Datos de uso y navegación, como dirección IP, tipo de dispositivo,
          navegador, páginas visitadas y tiempo de permanencia.
        </li>
        <li>
          Información proporcionada a través de nuestro chatbot o formularios de
          contacto.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Uso de la información
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Responder a tus consultas y solicitudes.</li>
        <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
        <li>
          Enviar información relevante sobre nuestros productos, servicios o
          actualizaciones (puedes darte de baja en cualquier momento).
        </li>
        <li>Cumplir con obligaciones legales.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Compartir información
      </h2>
      <p className="mb-4">
        No compartimos tu información personal con terceros, salvo cuando sea
        necesario para prestar nuestros servicios, cumplir con obligaciones
        legales o con tu consentimiento expreso.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Seguridad</h2>
      <p className="mb-4">
        Implementamos medidas de seguridad técnicas y organizativas para
        proteger tu información personal contra el acceso no autorizado, pérdida
        o alteración.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Tus derechos</h2>
      <p className="mb-4">
        Puedes acceder, rectificar o eliminar tus datos personales, así como
        oponerte a su tratamiento, enviando una solicitud a nuestro correo de
        contacto.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Cambios en la política
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar esta Política de Privacidad en
        cualquier momento. Publicaremos los cambios en esta página y, si son
        significativos, te lo notificaremos por los medios habituales.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta política o sobre el tratamiento de tus
        datos, puedes contactarnos en{" "}
        <a href="mailto:info@guayoyoa.tech" className="text-blue-600 underline">
          info@guayoyoa.tech
        </a>
        .
      </p>
    </main>
  );
}
