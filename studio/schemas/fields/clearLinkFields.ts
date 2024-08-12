import ClearLinkFieldsButton from "../../components/ClearLinkFieldsButton";

export const clearLinkFields = {
  name: "clearFields",
  title: "Remove Link",
  description:
    "If you want to remove the added link, you can clear the link fields below. The link will then be removed and no longer visible on your website.",
  type: "string",
  components: {
    input: ClearLinkFieldsButton,
  },
  hidden: false,
};
