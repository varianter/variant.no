import React from "react";

import Text, { TextType } from "src/components/text/Text";
import formatDate from "src/components/utils/formatDate";
import { ILocation } from "studio/lib/interfaces/eventPosting";

import styles from "./eventInformation.module.css";

interface EventInformationProps {
  date?: string;
  time?: string;
  locations?: ILocation[];
  address?: string | undefined;
  fontsize?: TextType;
}

export default function EventInformation({
  date,
  time,
  locations,
  address,
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
      {date && <Text type={fontsize}>{formatDate(date)}</Text>}
      {time && <Text type={fontsize}>{time}</Text>}
      {locations && <Text type={fontsize}>{eventPostingLocations}</Text>}
      {address && <Text type={fontsize}>{address}</Text>}
    </div>
  );
}
