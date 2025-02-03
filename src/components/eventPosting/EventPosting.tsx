import Link from "next/link";

import Badge from "src/components/badge/Badge";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IEventPosting } from "studio/lib/interfaces/eventPosting";

import styles from "./eventPosting.module.css";

function sortAlphabetically(list: string[]) {
  return list.sort((a, b) => a.localeCompare(b ?? "") ?? 0);
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
    eventPosting.locations.map(
      (location: CompanyLocation) => location.companyLocationName,
    ),
  ).join(", ");

  let consultantsFirstNames;

  if (eventPosting.consultants) {
    consultantsFirstNames = eventPosting.consultants.map(
      (n) => n.employeeFirstName,
    );
  }

  const Wrapper = eventPosting.externalLink ? "a" : "div";

  return (
    <Link
      key={eventPosting._key}
      href={`/${language}/${eventPosting._key}`}
      className={styles.eventPosting}
    >
      <div className={styles.flex}>
        {eventPosting.date && (
          <Text type={"labelRegular"}>{eventPosting.date}</Text>
        )}
        {eventPosting.date && showLocations && <span> · </span>}
        {showLocations && (
          <Text type={"labelRegular"}>{eventPostingLocations}</Text>
        )}
      </div>
      <Text type={"h3"} className={styles.eventTitle}>
        {eventPosting.eventTitle}
      </Text>

      <Text type={"bodySmall"}>{eventPosting.eventDescription}</Text>
      <div className={`${styles.flex} ${styles.eventCardBottomfield}`}>
        <div>
          {eventPosting.tags &&
            eventPosting.tags
              .filter((tag) => tag)
              .map((tag, index) => (
                <Badge
                  key={index}
                  className={styles.themes}
                  badgeColor={"#FAFAFA"}
                  borderColor={"#2D2D2D"}
                >
                  {tag.trim()}
                </Badge>
              ))}
        </div>
        {consultantsFirstNames && (
          <div className={`${styles.flex} ${styles.consultants}`}>
            <Text type={"labelRegular"}>
              <span>【 </span>
            </Text>
            {consultantsFirstNames.map((name) => (
              <Text
                key={name}
                className={styles.dotSeperator}
                type={"labelRegular"}
              >
                {name}
              </Text>
            ))}
            <Text type={"labelRegular"}>
              <span> 】</span>
            </Text>
          </div>
        )}
      </div>
    </Link>
  );
}
