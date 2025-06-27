import { NextResponse } from "next/server";
import {
  getClientByDocument,
  createClient,
} from "@/repository/clientRepository";

export async function POST(req: Request) {
  const clientData = await req.json();

  const result = await createClient(clientData);
  if ("success" in result) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: result.code }, { status: 500 });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const document = searchParams.get("document");

    if (!document) {
      return NextResponse.json(
        { error: "Documento requerido" },
        { status: 400 }
      );
    }

    const result = await getClientByDocument(document);

    if (result === null) {
      return NextResponse.json({
        exists: false,
        message: "Registro no existe",
      });
    }

    if ("code" in result && result.code) {
      return NextResponse.json({ error: result.code }, { status: 500 });
    }

    return NextResponse.json({ exists: true, success: true, data: result });
  } catch (error) {
    console.error("Error in GET /api/get-client:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
