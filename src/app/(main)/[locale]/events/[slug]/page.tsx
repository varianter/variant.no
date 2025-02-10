import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EVENT_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

export default async function EventPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  let eventPostings: IEventPosting[] = [];

  const { data } = await loadStudioQuery<{
    eventPostingsArray: IEventPosting[];
  }>(EVENT_POSTINGS_QUERY, { language: params.locale });
  eventPostings = data?.eventPostingsArray ?? [];

  const event = eventPostings.find(
    (e: IEventPosting) => e.slug === params.slug,
  );
  eventPostings = data?.eventPostingsArray ?? [];

  if (!event) {
    return <p>Eventet finnes ikke.</p>;
  }

  return (
    <div>
      <h1>{event.eventTitle}</h1>
      <p>{event.eventDescription}</p>
      <p>Dato: {event.date}</p>
      <p>Sted: {event.locations?.join(", ")}</p>
      {event.externalLink && (
        <a href={event.externalLink} target="_blank" rel="noopener noreferrer">
          Mer info
        </a>
      )}
    </div>
  );
}
