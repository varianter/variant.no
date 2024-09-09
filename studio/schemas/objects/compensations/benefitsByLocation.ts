import { defineField } from "sanity";
import { location, locationID } from "../locations";
import { companyLocationNameID } from "studio/schemas/documents/companyLocation";
import { benefitId } from "studio/schemas/documents/benefit";
import { checkForDuplicateLocations, DocumentWithLocation } from "./utils/validation";


export const benefitsByLocation = defineField({
  name: "benefitsByLocation",
  title: "Benefits by Location",
  description:
    "Specify the benefits offered at each office location. A benefit is only associated with a single location",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          ...location,
          description:
            "Select the office location for which you are entering benefits information. Each location must be unique.",
          validation: (Rule) => Rule.required(),
        },
        defineField({
          name: "benefitsGroup",
          title: "Benefits Group",
          description:
            "Enter the benefits offered at the location selected above.",
          type: "array",
          of: [{ type: benefitId }],
        }),
      ],
      preview: {
        select: {
          location: `${locationID}.${companyLocationNameID}`,
          benefitsGroup: "benefitsGroup",
        },
        prepare({ location, benefitsGroup }) {
          const benefitsCount = benefitsGroup ? benefitsGroup.length : 0;
          return {
            title: location
              ? `Benefits group for ${location}`
              : "No location selected",
            subtitle: `Number of benefits: ${benefitsCount}`,
          };
        },
      },
    },
  ],
  validation: (Rule) =>
    Rule.custom((benefitsByLocation) => {
      const isNotDuplicate: boolean = checkForDuplicateLocations(
        benefitsByLocation as DocumentWithLocation[] | undefined,
      );
      return (
        isNotDuplicate ||
        "Each location should be listed only once in the benefits list."
      );
    }),
});
