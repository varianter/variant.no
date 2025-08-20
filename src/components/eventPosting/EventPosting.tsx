import Link from "next/link";
import { useTranslations } from "next-intl";
import { ElementType } from "react";

import Badge from "src/components/badge/Badge";
import Text from "src/components/text/Text";
import EventSpeakers from "src/components/utils/eventSpeakers/eventSpeakers";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";

import styles from "./eventPosting.module.css";

function sortAlphabetically(list: string[]) {
  return list.sort((a, b) => a.localeCompare(b));
}

interface EventPostingProps {
  eventPosting: IEventPosting;
  showLocations?: boolean;
  language: string;
}

export default function EventPosting({
  eventPosting,
  showLocations = true,
  language,
}: EventPostingProps) {
  const eventPostingLocations = sortAlphabetically(
    eventPosting.locations.map((loc) => loc.locationString),
  ).join(", ");
  const t = useTranslations("event_section");

  const consultantsFirstNames =
    eventPosting.consultants?.map((n) => n.employeeFirstName) ?? [];

  const eventPostingTags = eventPosting.tags?.map((tag) => tag.tag) ?? [];

  const isInternal = eventPosting.createInternalPage;
  const isExternal = eventPosting.externalLink;

  const Wrapper: ElementType = isInternal || isExternal ? Link : "div";

  const linkProps =
    isInternal || isExternal
      ? {
          href: isInternal
            ? `/${language}/event/${eventPosting._key}`
            : eventPosting.externalLink,
          target: isExternal ? "_blank" : undefined,
          "aria-label": `${t("go_to_event")} ${eventPosting.eventTitle}`,
        }
      : {};

  return (
    <Wrapper
      key={eventPosting._key}
      {...linkProps}
      className={styles.eventPosting}
    >
      <div className={styles.flex}>
        {eventPosting.date && (
          <Text type="labelRegular">{eventPosting.date}</Text>
        )}
        {eventPosting.date && showLocations && <span> · </span>}
        {showLocations && (
          <Text type="labelRegular">{eventPostingLocations}</Text>
        )}
      </div>

      <Text type="h3" className={styles.eventTitle}>
        {eventPosting.eventTitle}
      </Text>
      <Text type="bodySmall">{eventPosting.eventDescription}</Text>

      <div className={`${styles.flex} ${styles.eventCardBottomfield}`}>
        {eventPostingTags.length > 0 && (
          <div>
            {eventPostingTags
              .filter((tag) => tag)
              .map((tag, index) => (
                <Badge
                  key={index}
                  className={styles.themes}
                  badgeColor="#FAFAFA"
                  borderColor="#2D2D2D"
                >
                  {tag}
                </Badge>
              ))}
          </div>
        )}

        {consultantsFirstNames?.length > 0 && (
          <EventSpeakers
            textType="labelRegular"
            consultantsFirstNames={consultantsFirstNames}
          />
        )}
      </div>
    </Wrapper>
  );
}
