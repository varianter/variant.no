import { defineField } from "sanity";
import { companyLocationsID } from "../documents/companyLocations";

export const locationsID = "locations";
export const locationID = "location";

export const location = defineField({
  name: locationID,
  type: "reference",
  title: "Select a location",
  description:
    "Select the office location this content applies to. If it applies to all locations, you can leave this field empty.",
  to: [{ type: companyLocationsID }],
  options: {
    disableNew: true,
  },
});

export const locations = defineField({
  name: locationsID,
  type: "array",
  title: "Relevant Locations",
  description:
    "You can tailor this content to specific office locations by selecting them here. If the content applies to all locations, just leave this field empty.",
  of: [location],
});
