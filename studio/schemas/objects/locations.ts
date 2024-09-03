import { defineField } from "sanity";
import { locationId } from "../documents/location";

const locations = defineField({
  name: "locations",
  type: "array",
  title: "Relevant Locations",
  description:
    "You can tailor this content to specific office locations by selecting them here. If the content applies to all locations, just leave this field empty.",
  of: [
    {
      title: "Select a location",
      type: "reference",
      to: [{ type: locationId }],
      options: {
        disableNew: true,
      },
    },
  ],
});

export default locations;
