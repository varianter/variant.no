import groq from "groq";
//import { createClient } from "studio/lib/sanity/client";

export async function getEventBySlug(slug: string, language: string) {
  console.log("Fetching event:", { slug, language }); // Debugging

  const query = groq`
    *[_type == "eventPostings" && language == $language && slug.current == $slug][0] {
      _key, 
      externalLink,
      "eventTitle": eventTitle, 
      locations[] -> { companyLocationName },
      date, 
      eventDescription, 
      tags,
      consultants
    }
  `;

  const event = await createClient.fetch(query, { slug, language });

  if (!event) {
    console.warn("No event found for slug:", slug);
  }

  return event;
}
