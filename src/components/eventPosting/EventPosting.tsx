import Link from "next/link";

import Badge from "src/components/badge/Badge";
import Text from "src/components/text/Text";
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

  const consultantsFirstNames =
    eventPosting.consultants?.map((n) => n.employeeFirstName) ?? [];

  const eventPostingTags = eventPosting.tags?.map((tag) => tag.tag) ?? [];

  const getSlug = (slug: string | { current: string } | undefined) => {
    return typeof slug === "string" ? slug : slug?.current;
  };

  const Wrapper = eventPosting.slug || eventPosting.externalLink ? Link : "div";

  return (
    <Wrapper
      key={eventPosting._key}
      {...(eventPosting.slug || eventPosting.externalLink
        ? {
            href: eventPosting.slug
              ? `/${language}/events/${getSlug(eventPosting.slug)}`
              : eventPosting.externalLink,
          }
        : {})}
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
            {eventPostingTags.map((tag, index) => (
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
          <div className={`${styles.flex} ${styles.consultants}`}>
            <Text type="labelRegular">
              <span>【 </span>
            </Text>
            {consultantsFirstNames.map((name) => (
              <Text
                key={name}
                className={styles.dotSeperator}
                type="labelRegular"
              >
                {name}
              </Text>
            ))}
            <Text type="labelRegular">
              <span> 】</span>
            </Text>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
