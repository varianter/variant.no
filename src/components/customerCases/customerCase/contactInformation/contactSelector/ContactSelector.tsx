"use client";

import { useState } from "react";

import Button from "src/components/buttons/Button";
import CustomerCaseEmployeeCard from "src/components/customerCaseEmployeeCard/CustomerCaseEmployeeCard";
import { ChewbaccaEmployee } from "src/types/employees";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";

import styles from "./contactSelector.module.css";

export type ContactByLocationMap = {
  [locationId: string]: ChewbaccaEmployee;
};

export interface ContactSelectorProps {
  language: string;
  locations: CompanyLocation[];
  contactByLocation: ContactByLocationMap;
  employeePageSlug?: string;
}

export default function ContactSelector({
  language,
  locations,
  contactByLocation,
  employeePageSlug,
}: ContactSelectorProps) {
  const locationIds = Object.keys(contactByLocation);

  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    locationIds.length === 0 ? locationIds[0] : null,
  );

  if (locationIds.length === 0) {
    return;
  }

  const selectedOrDefaultLocationId = selectedLocationId ?? locationIds[0];

  return (
    <>
      <div className={styles.locationSection}>
        {locations.map((location) => (
          <Button
            type={
              location._id === selectedOrDefaultLocationId
                ? "primary"
                : "secondary"
            }
            size={"small"}
            background={
              location._id === selectedOrDefaultLocationId ? "dark" : "light"
            }
            key={location._id}
            onClick={() => setSelectedLocationId(location._id)}
          >
            {location.companyLocationName}
          </Button>
        ))}
      </div>
      <div className={styles.consultantSection}>
        <CustomerCaseEmployeeCard
          currentLanguage={language}
          employee={contactByLocation[selectedOrDefaultLocationId]}
          employeePageSlug={employeePageSlug}
        />
      </div>
    </>
  );
}
