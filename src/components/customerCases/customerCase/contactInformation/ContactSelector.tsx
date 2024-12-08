"use client";

import { useState } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import { Tag } from "src/components/tag";
import { ChewbaccaEmployee } from "src/types/employees";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";

import styles from "./contactInformation.module.css";

export type ContactByLocationMap = {
  [locationId: string]: ChewbaccaEmployee;
};

export interface ContactSelectorProps {
  language: string;
  locations: CompanyLocation[];
  contactByLocation: ContactByLocationMap;
  employeePageSlug?: string;
  background: "dark" | "light";
}

export default function ContactSelector({
  language,
  locations,
  contactByLocation,
  employeePageSlug,
  background = "light",
}: ContactSelectorProps) {
  const locationIds = Object.keys(contactByLocation);

  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    locationIds[0],
  );

  if (locationIds.length === 0) {
    return;
  }

  const selectedOrDefaultLocationId = selectedLocationId ?? locationIds[0];
  console.log(selectedLocationId);

  return (
    <>
      <div className={styles.contactSelector}>
        <div className={styles.tagList} role="tablist">
          {locations.map((location) => (
            <Tag
              key={location._id}
              type="button"
              role="tab"
              background={background}
              aria-selected={selectedLocationId === location._id}
              aria-controls={`panel-${location._id}`}
              id={`tab-${location._id}`}
              active={selectedLocationId === location._id}
              onClick={() => setSelectedLocationId(location._id)}
              text={location.companyLocationName}
            />
          ))}
        </div>
        <div className={styles.employeeCard}>
          <div>
            <EmployeeCard
              language={language}
              employee={contactByLocation[selectedOrDefaultLocationId]}
              employeePageSlug={employeePageSlug}
            />
          </div>
        </div>
      </div>
    </>
  );
}
