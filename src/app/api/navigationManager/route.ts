// app/api/navigationManager/route.ts
import { NextResponse } from "next/server";
import { client } from "studio/lib/client";
import { token } from "studio/lib/token";

// Ensure the client is configured with the token
const clientWithToken = client.withConfig({ token });

export interface NavigationManager {
  _id: string;
  _type: string;
  setLanding?: {
    _ref: string;
    _type: string;
  };
}

export async function GET() {
  try {
    const navigationManager: NavigationManager[] = await clientWithToken.fetch(
      '*[_type == "navigationManager"][]'
    );

    return NextResponse.json(navigationManager);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
