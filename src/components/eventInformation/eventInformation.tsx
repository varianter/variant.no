import React from "react";

import Text from "src/components/text/Text";
import { ILocation } from "studio/lib/interfaces/eventPosting";

import styles from "./eventInformation.module.css";

interface EventInformationProps {
  date?: string;
  time?: string;
  locations?: ILocation[];
  showLocations?: boolean;
}

export default function EventInformation({
  date,
  time,
  locations,
  showLocations,
}: EventInformationProps) {
  function sortAlphabetically(list: string[]) {
    return list.sort((a, b) => a.localeCompare(b));
  }

  const eventPostingLocations =
    locations &&
    sortAlphabetically(locations.map((loc) => loc.locationString)).join(", ");

  return (
    <div className={styles.eventInformation}>
      {date && <Text type="labelRegular">{date}</Text>}
      {time && <Text type="labelRegular">{time}</Text>}
      {locations && showLocations && (
        <Text type="labelRegular">{eventPostingLocations}</Text>
      )}
    </div>
  );
}
