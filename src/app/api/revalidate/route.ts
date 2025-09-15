// import { revalidateTag } from "next/cache";
// import { NextRequest, NextResponse } from "next/server";
//
// export async function POST(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const secret = searchParams.get("secret");
//
//     // Verify webhook secret
//     if (secret !== process.env.WEBHOOK_SECRET) {
//       return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
//     }
//
//     // Revalidate pageBuilder data
//     revalidateTag("pageBuilder");
//
//     // Also revalidate general queries if needed
//     revalidateTag("queries");
//
//     return NextResponse.json({ revalidated: true, tags: ["pageBuilder"] });
//   } catch (err) {
//     return NextResponse.json(
//       { message: "Error revalidating pageBuilder" },
//       { status: 500 },
//     );
//   }
// }

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("🔄 Revalidation webhook called");

    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    // Verify webhook secret
    if (secret !== process.env.WEBHOOK_SECRET) {
      console.log("❌ Invalid secret provided");
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    console.log("✅ Revalidating pageBuilder tags...");

    // Revalidate pageBuilder data
    revalidateTag("pageBuilder");
    revalidateTag("queries");

    console.log("🎉 Revalidation complete");
    return NextResponse.json({ revalidated: true, tags: ["pageBuilder"] });
  } catch (err) {
    console.error("💥 Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating pageBuilder" },
      { status: 500 },
    );
  }
}
