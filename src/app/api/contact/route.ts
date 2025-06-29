import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Verificar que la API key esté configurada
    if (!process.env.WEBHOOK_N8N_API_KEY) {
      console.error("WEBHOOK_N8N_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { nombre, email, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Envío al webhook externo
    const response = await fetch("https://guayoyo-n8n.wwpige.easypanel.host/webhook/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.WEBHOOK_N8N_API_KEY!,
      },
      body: JSON.stringify({
        nombre,
        email,
        mensaje,
        timestamp: new Date().toISOString(),
        source: "guayoyo-website"
      }),
    });

    if (!response.ok) {
      console.error("Error del webhook:", response.status, response.statusText);
      return NextResponse.json(
        { error: "Error interno del servidor" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje enviado con éxito" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error procesando formulario de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 