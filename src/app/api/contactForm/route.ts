import { NextResponse } from "next/server";
import { PubSub } from "@google-cloud/pubsub";

export interface ContactData {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
}

const pubsub = new PubSub({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_CLOUD_KEYFILE,
});

const topicName = process.env.PUBSUB_TOPIC_NAME;

export async function POST(req: Request) {
  try {
    const formData: ContactData = await req.json();

    const message = {
      email: formData.email,
      data: {
        message: `[Website request] ${formData.message}`,
        user: {
          id: "-",
          name: formData.name,
          email: formData.email,
        },
        company: { id: "-", name: formData.company || "-" },
      },
      template: "contact-us",
    };

    const messageId = await pubsub
      .topic(topicName as string)
      .publishMessage({ json: message });

    console.log(`Message ${messageId} published.`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error publishing message:", error);
    return NextResponse.json(
      {
        error: "Form was not sent due to a technical error. Please try again.",
      },
      { status: 500 },
    );
  }
}

export function OPTIONS() {
  return NextResponse.json({ allow: ["POST"] });
}
