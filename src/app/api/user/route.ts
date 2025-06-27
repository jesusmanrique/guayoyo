import { NextResponse } from "next/server";
import { getUser, createUser } from "@/repository/userRepository";

export async function POST(req: Request) {
  const userData = await req.json();

  const result = await createUser(userData);
  if ("success" in result) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: result.code }, { status: 500 });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email requerido" }, { status: 400 });
    }

    const result = await getUser(email);

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
    console.error("Error in GET /api/get-user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
