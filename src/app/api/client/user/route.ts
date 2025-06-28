import { NextResponse } from "next/server";
import { getUserClient } from "@/repository/userClientRepository";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }
    const result = await getUserClient(userId);

    if (result === null) {
      return NextResponse.json({
        exists: false,
        message: "Client not found",
      });
    }

    if ("code" in result && result.code) {
      return NextResponse.json({ error: result.code }, { status: 500 });
    }

    return NextResponse.json({ exists: true, success: true, data: result });
  } catch (error) {
    console.error("Error in GET /api/client/user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
