import { Metadata } from "next";
import React from "react";

import Badge from "src/components/badge/Badge";
import EventInformation from "src/components/eventInformation/eventInformation";
import EventRegistration from "src/components/hubspot/eventRegistration/eventRegistration";
import { SanityImage } from "src/components/image/SanityImage";
import PageHeader from "src/components/navigation/header/PageHeader";
import { RichText } from "src/components/richText/RichText";
import Events from "src/components/sections/events/Events";
import Text from "src/components/text/Text";
import EventSpeakers from "src/components/utils/eventSpeakers/eventSpeakers";
import { generateMetadataFromSeo } from "src/utils/seo";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { EventsSection } from "studio/lib/interfaces/pages";
import { LanguageObject } from "studio/lib/interfaces/supportedLanguages";
import { EVENT_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { LANGUAGES_QUERY } from "studio/lib/queries/siteSettings";
import { EVENT_BY_KEY_QUERY } from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./event.module.css";

interface EventPageProps {
  params: Promise<{
    key: string;
    locale: "en" | "no";
  }>;
}

export async function generateMetadata(
  props: EventPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_KEY_QUERY, {
    key: params.key.toString(),
    language: params.locale,
  });

  const { eventTitle, _key, seo } = data.event;

  const baseMetadata = await generateMetadataFromSeo(
    {
      title: seo?.title || eventTitle,
      description: seo?.description,
      imageUrl: `/api/og?language=${params.locale}&key=${_key}`,
      keywords: seo?.keywords,
    },
    params.locale,
  );

  // Override the openGraph image to prevent Next.js optimization
  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/og?language=${params.locale}&key=${_key}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// TODO: Create as specialPage
export default async function EventPage(props: EventPageProps) {
  const params = await props.params;
  const { data } = await loadStudioQuery<{
    event: IEventPosting;
  }>(EVENT_BY_KEY_QUERY, {
    key: params.key.toString(),
    language: params.locale,
  });

  const { data: events } = await loadStudioQuery<{
    eventPostingsArray: IEventPosting[];
  }>(EVENT_POSTINGS_QUERY, { language: params.locale });

  const {
    eventTitle,
    date,
    locations,
    address,
    tags,
    _key,
    eventImage,
    subtitle,
    consultants,
    richTextInternalized,
    recordID,
    submitButtonText,
    companyRequired,
    time,
  } = data.event;

  const consultantsFirstNames =
    consultants?.map((n) => n.employeeFirstName) ?? [];

  const languages = await loadStudioQuery<LanguageObject[] | null>(
    LANGUAGES_QUERY,
  );

  const pathTranslations: InternationalizedString =
    languages?.data?.map((language) => ({
      _key: language.id,
      value: `event/${_key}`,
    })) ?? [];

  return (
    <div>
      <PageHeader
        language={params.locale}
        pathTranslations={pathTranslations}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.eventInfo}>
          <Text type="titleXL">{eventTitle}</Text>
          <Text type="subtitle">{subtitle}</Text>
          <EventInformation
            date={date}
            time={time}
            locations={locations}
            address={address}
            fontsize="labelL"
          />
        </div>
        {eventImage && (
          <div className={styles.eventImage}>
            <SanityImage image={eventImage} objectFit="cover" />
          </div>
        )}

        <div className={styles.description}>
          <div className={styles.tags}>
            {tags &&
              tags.map((tag, index) => (
                <Badge key={index} badgeColor="#FFFFFF" borderColor="#000000">
                  <Text type="labelL">{tag.tag}</Text>
                </Badge>
              ))}
            {consultantsFirstNames && (
              <EventSpeakers
                textType="labelL"
                consultantsFirstNames={consultantsFirstNames}
              />
            )}
          </div>
          {richTextInternalized && <RichText value={richTextInternalized} />}
        </div>
        {recordID && (
          <EventRegistration
            section={{
              _type: "eventRegistration",
              _key: _key,
              recordID: recordID.toString(),
              submitButtonText: submitButtonText,
              date: date,
              interests: tags.map((tag) => tag.tag),
              companyRequired: companyRequired,
            }}
            language={params.locale}
          />
        )}
      </div>

      <Events
        language={params.locale}
        section={{ ...events, allEvents: true } as EventsSection}
      />
    </div>
  );
}
