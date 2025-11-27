import React, { Fragment } from "react";

import DotSeparator from "src/components/dotSeparator/dotSeparator";
import Text, { TextType } from "src/components/text/Text";
import formatDate from "src/components/utils/formatDate";
import { ILocation } from "studio/lib/interfaces/eventPosting";

import styles from "./eventInformation.module.css";

interface EventInformationProps {
  date?: string;
  time?: string;
  locations?: ILocation[];
  address?: string;
  fontsize?: TextType;
}

export default function EventInformation({
  date,
  time,
  locations,
  address,
  fontsize = "label",
}: EventInformationProps) {
  function sortAlphabetically(list: string[]) {
    return list.sort((a, b) => a.localeCompare(b));
  }

  const eventPostingLocations =
    locations &&
    sortAlphabetically(locations.map((loc) => loc.locationString)).join(", ");

  return (
    <div className={styles.eventInformation}>
      {date && (
        <Fragment>
          <Text type={fontsize}>{formatDate(date)}</Text>
          <DotSeparator />
        </Fragment>
      )}
      {time && (
        <Fragment>
          <Text type={fontsize}>{time}</Text>
          <DotSeparator />
        </Fragment>
      )}
      {locations && (
        <Fragment>
          <Text type={fontsize}>{eventPostingLocations}</Text>
          <DotSeparator />
        </Fragment>
      )}
      {address && <Text type={fontsize}>{address}</Text>}
    </div>
  );
}
