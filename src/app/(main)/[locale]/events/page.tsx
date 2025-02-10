import EventsPage from "src/components/eventsPage/eventsPage";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { EVENT_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

export default async function IEventsPage({
  params,
}: {
  params: { locale: string };
}) {
  let eventPostings: IEventPosting[] = [];

  const { data } = await loadStudioQuery<{
    eventPostingsArray: IEventPosting[];
  }>(EVENT_POSTINGS_QUERY, { language: params.locale });
  eventPostings = data?.eventPostingsArray ?? [];

  return (
    <>
      <EventsPage params={params} eventPostings={eventPostings}></EventsPage>
    </>
  );
}
