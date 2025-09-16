import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    // Verify webhook secret
    if (secret !== process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Get the request body to extract document information
    const body = await request.json();
    const { _id } = body;

    // Revalidate specific document by ID
    if (_id) {
      revalidateTag(_id);
    }

    const revalidatedTags = [...(_id ? [_id] : [])];

    return NextResponse.json({
      revalidated: true,
      tags: revalidatedTags,
      document: { _id },
    });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating cache" },
      { status: 500 },
    );
  }
}
