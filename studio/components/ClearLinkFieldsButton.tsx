"use client";

import { Button } from "@sanity/ui";
import { useFormValue } from "sanity";

import { client } from "studio/lib/client";
import { linkID } from "studio/schemas/objects/link";

interface ClearLinkFieldsButtonProps {
  path: Array<string | { _key: string }>;
}

const ClearLinkFieldsButton = ({ path }: ClearLinkFieldsButtonProps) => {
  const documentId = useFormValue(["_id"]) as string;

  const isObjectWithKey = (
    item: string | { _key: string },
  ): item is { _key: string } => {
    return typeof item === "object" && "_key" in item;
  };

  const constructFieldPath = (
    path: Array<string | { _key: string }>,
  ): string => {
    if (!isObjectWithKey(path[1])) return "";

    const sectionKey = path[1]._key;
    if (!sectionKey) return "";

    if (path[2] === "posts" && isObjectWithKey(path[3])) {
      const postKey = path[3]._key;
      return `sections[_key=="${sectionKey}"].posts[_key=="${postKey}"].callToAction`;
    } else if (path[2] === "clearFields") {
      return `sections[_key=="${sectionKey}"].${linkID}`;
    } else {
      return `sections[_key=="${sectionKey}"].callToAction`;
    }
  };

  const fieldPath = constructFieldPath(path);

  const resetFields = async () => {
    try {
      const patch = client.patch(documentId).unset([fieldPath]);
      await patch.commit();
      console.log("Link fields cleared successfully");
    } catch (error) {
      console.error("Error clearing link fields:", error);
    }
  };

  return (
    <Button text="Clear Link Fields" onClick={resetFields} tone="critical" />
  );
};

export default ClearLinkFieldsButton;
