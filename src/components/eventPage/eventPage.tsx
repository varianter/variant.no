"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { SanityImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { getEventBySlug } from "studio/lib/queries/eventQueries";

import styles from "./eventPage.module.css";

export default function EventPage({ language }: { language: string }) {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEvent() {
      console.log("Fetching event for:", { slug, language }); // Debugging
      try {
        const data = await getEventBySlug(slug, language);
        if (!data) {
          console.error("Event not found:", slug);
          setError(true);
          return;
        }
        setEvent(data);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(true);
      }
    }
    fetchEvent();
  }, [slug, language]);

  if (error) return <p>Event not found. Check the slug or try again later.</p>;
  if (!event) return <p>Loading event...</p>;

  return (
    <div className={styles.container}>
      <Text type="h1">{event.eventTitle}</Text>
      <Text type="bodyBig">{event.eventDescription}</Text>

      {event.image && (
        <div className={styles.imageWrapper}>
          <SanityImage image={event.image} />
        </div>
      )}

      <Text type="labelRegular">
        Location:{" "}
        {event.locations.map((loc) => loc.companyLocationName).join(", ")}
      </Text>
    </div>
  );
}
