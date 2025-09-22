import { baseUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const topicId = searchParams.get("topicId");
  const page = searchParams.get("page") || "1";

  if (!topicId) {
    return NextResponse.json(
      { error: "Topic ID is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${baseUrl}articles/trending/${topicId}?page=${page}`,
      {
        headers: {
          "X-Client-Key": process.env.API_CLIENT_KEY ?? "web-12345",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      `Fetching from: ${baseUrl}articles/trending/${topicId}?page=${page}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("API proxy error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
