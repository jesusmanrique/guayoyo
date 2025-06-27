export default function PrivacyPolicy() {
  const fecha = new Date().toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Caracas",
  });

  return (
    <main className="max-w-3xl pt-20 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="mb-4">
        <strong>Última actualización: {fecha}</strong>
      </p>
      <p className="mb-4">
        En Guayoyo nos comprometemos a proteger la privacidad de los datos de
        nuestros clientes y usuarios. Esta política describe cómo recopilamos,
        usamos, almacenamos y compartimos la información personal y datos de
        integración proporcionados por nuestros clientes y sus usuarios finales
        a través de nuestros servicios de automatización inteligente e
        integración API con plataformas de mensajería y redes sociales.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Qué información recopilamos
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Datos personales de clientes (nombre, correo electrónico, teléfono,
          datos de facturación).
        </li>
        <li>
          Datos de cuentas conectadas a plataformas de terceros (nombres de
          usuario, identificadores, correos asociados).
        </li>
        <li>
          Claves de API y tokens de acceso para WhatsApp, Instagram, Facebook,
          Telegram, Google, u otras plataformas de mensajería/redes sociales.
        </li>
        <li>
          Consentimiento y autorizaciones para la integración de APIs en nombre
          del cliente.
        </li>
        <li>
          Mensajes e interacciones automatizadas, registro de actividad y
          tráfico en las plataformas integradas (dependiendo de la configuración
          del cliente y la plataforma).
        </li>
        <li>
          Información técnica de la conexión (IP, dispositivo, logs de errores).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Uso de la información
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Proveer, mantener y mejorar nuestros servicios de automatización.
        </li>
        <li>
          Operar y administrar integraciones con APIs de WhatsApp, Instagram y
          similares, bajo autorización del cliente.
        </li>
        <li>
          Verificar la identidad y autenticidad de las cuentas conectadas, así
          como administrar claves y tokens de seguridad para el correcto
          funcionamiento.
        </li>
        <li>
          Procesar y automatizar mensajes, responder consultas, enviar
          notificaciones o realizar acciones conforme a los flujos definidos por
          el cliente.
        </li>
        <li>
          Monitorizar el uso para fines de calidad, soporte técnico y mejora
          continua.
        </li>
        <li>
          Cumplir con obligaciones legales y procesos regulatorios aplicables.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Conservación y seguridad de los datos
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Almacenamos la información y las credenciales de acceso bajo altos
          estándares de seguridad, y jamás compartimos ni divulgamos las
          claves/API keys fuera de nuestra infraestructura segura, excepto
          cuando sea requerido explícitamente por el cliente o por mandato
          legal.
        </li>
        <li>
          Implementamos controles de cifrado, autenticación y gestión de accesos
          para proteger los datos frente a accesos no autorizados.
        </li>
        <li>
          Solo conservamos los datos el tiempo estrictamente necesario para
          cumplir con los propósitos indicados, o mientras subsista la relación
          comercial con el cliente.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Compartición de datos con terceros
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          No compartimos información personal ni credenciales API con terceros,
          excepto:
          <ul className="list-disc ml-6 mt-2">
            <li>
              Cuando sea necesario para la integración técnica con plataformas
              específicas (por ejemplo, WhatsApp, Meta/Facebook, Instagram,
              Google) bajo las condiciones y términos de cada proveedor.
            </li>
            <li>Cuando el cliente lo solicite explícitamente.</li>
            <li>
              En cumplimiento de obligaciones legales, requerimientos de
              autoridad competente o casos de fuerza mayor.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Derechos del usuario y clientes
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>El cliente puede:</li>
        <ul className="list-disc ml-6">
          <li>
            Acceder, actualizar o corregir sus datos personales y
            configuraciones de integración.
          </li>
          <li>
            Solicitar la eliminación de sus datos o revocar el acceso de las
            integraciones en cualquier momento (salvo obligaciones legales que
            requieran su conservación).
          </li>
          <li>
            Consultar el registro de actividades y flujos automatizados
            realizados en su cuenta o plataforma.
          </li>
        </ul>
        <li>
          Para ejercer estos derechos, pueden contactarnos a través de{" "}
          <a
            href="mailto:soporte@guayoyo.tech"
            className="text-blue-600 underline"
          >
            soporte@guayoyo.tech
          </a>
          .
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Uso de servicios de terceros
      </h2>
      <p className="mb-4">
        Nuestras integraciones pueden requerir el uso de APIs, SDKs u otros
        servicios de terceros (como WhatsApp Business API, Meta Graph API,
        Instagram API, Telegram API, etc.), cuyas políticas de privacidad y
        condiciones de uso son independientes y ajenas a esta política.
        Recomendamos revisar los avisos de privacidad de cada proveedor externo
        vinculado.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Menores de edad</h2>
      <p className="mb-4">
        No ofrecemos servicios dirigidos a menores de edad ni recolectamos
        intencionadamente información de personas menores de [edad mínima según
        legislación local]. Si detectamos que se ha recopilado información de un
        menor, procederemos a eliminarla de inmediato.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Cambios en esta política
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho a modificar la presente política de privacidad
        en cualquier momento. Notificaremos a los clientes a través de los
        canales habituales ante cualquier actualización significativa que afecte
        la forma en que gestionamos los datos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contacto</h2>
      <p>
        Si tienes preguntas, inquietudes o solicitudes relacionadas con tu
        información personal y el uso de nuestras soluciones de automatización,
        puedes contactarnos en:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Correo electrónico:{" "}
          <a
            href="mailto:soporte@guayoyo.tech"
            className="text-blue-600 underline"
          >
            soporte@guayoyo.tech
          </a>
        </li>
        <li>
          Sitio web:{" "}
          <a
            href="https://www.guayoyo.tech"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.guayoyo.tech
          </a>
        </li>
      </ul>
      <p>
        Guayoyo garantiza la privacidad y protección de la información, obrando
        siempre bajo los más altos estándares de confidencialidad y seguridad en
        beneficio de sus clientes.
      </p>
    </main>
  );
}
