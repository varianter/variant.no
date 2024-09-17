import { NextResponse } from "next/server";

import { client } from "studio/lib/client";
import { token } from "studio/lib/token";

// Configure the client with the token
const clientWithToken = client.withConfig({ token });

interface FetchRequestBody {
  query: string;
  params?: Record<string, unknown>;
}

export async function POST(req: Request) {
  try {
    const { query, params }: FetchRequestBody = await req.json();

    if (typeof query !== "string" || !query.trim()) {
      return NextResponse.json({ error: "Invalid query" }, { status: 400 });
    }

    const data = await clientWithToken.fetch(query, params || {});

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
