import { defineField } from "sanity";

export const domains = ["variant.no", "variant.se"] as const;

export const domainsField = defineField({
  name: "domains",
  type: "array",
  title: "Domains",
  description:
    "The customer case will only be shown on the domains checked here. IMPORTANT: Remember to have translations in the language for the domains you add here!",
  of: [{ type: "string" }],
  options: {
    list: domains.map((domain) => {
      return { title: domain, value: domain };
    }),
  },
  initialValue: domains.map((domain) => domain),
});
