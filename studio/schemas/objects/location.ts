import { defineField } from "sanity";
import { locationId } from "../documents/location";

const location = defineField({
  name: "location",
  title: "Location",
  description: "Reference to a company location",
  type: "reference",
  to: [{ type: locationId }],
});

export default location;
