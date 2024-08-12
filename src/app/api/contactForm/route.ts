import { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const formData: ContactData = req.body;

    try {
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

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error publishing message:", error);
      return res.status(500).json({
        error: "Form was not sent due to a technical error. Please try again.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
