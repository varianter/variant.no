import React from "react";

import Text, { TextType } from "src/components/text/Text";
import { ILocation } from "studio/lib/interfaces/eventPosting";

import styles from "./eventInformation.module.css";

interface EventInformationProps {
  date?: string;
  time?: string;
  locations?: ILocation[];
  showLocations?: boolean;
  fontsize?: TextType;
}

export default function EventInformation({
  date,
  time,
  locations,
  showLocations,
  fontsize = "labelRegular",
}: EventInformationProps) {
  function sortAlphabetically(list: string[]) {
    return list.sort((a, b) => a.localeCompare(b));
  }

  const eventPostingLocations =
    locations &&
    sortAlphabetically(locations.map((loc) => loc.locationString)).join(", ");

  return (
    <div className={styles.eventInformation}>
      {date && <Text type={fontsize}>{date}</Text>}
      {time && <Text type={fontsize}>{time}</Text>}
      {locations && showLocations && (
        <Text type={fontsize}>{eventPostingLocations}</Text>
      )}
    </div>
  );
}
