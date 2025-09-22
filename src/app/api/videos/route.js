import { baseUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  try {
    const apiUrl = `${baseUrl}videos/list?page=${page}`;

    const response = await fetch(apiUrl, {
      headers: {
        "X-Client-Key": process.env.API_CLIENT_KEY ?? "web-12345",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("[Videos API] Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
