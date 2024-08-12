export const theme = {
  name: "theme",
  title: "Theme",
  description:
    "Sets the section to either a primary or secondary component, mainly changing the background color of the component.",
  type: "string",
  options: {
    list: [
      { title: "Primary", value: "primary" },
      { title: "Secondary", value: "secondary" },
    ],
  },
  initialValue: "primary",
};
