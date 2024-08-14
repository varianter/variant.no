import React, { useEffect, useState } from "react";
import {
  ArrayOfObjectsInput,
  ArrayOfObjectsInputProps,
  ArraySchemaType,
  useFormValue,
} from "sanity";
import { client } from "studio/lib/client";

type CustomCallToActionsProps = ArrayOfObjectsInputProps<
  { _key: string },
  ArraySchemaType<unknown>
>;

const CustomCallToActions = (props: CustomCallToActionsProps) => {
  const [isLandingPage, setIsLandingPage] = useState(false);
  const documentId = useFormValue(["_id"]) as string;

  useEffect(() => {
    const checkIfCurrentPageIsLandingPage = async () => {
      const navigationManager = await client.fetch(
        `*[_type == "navigationManager" && _id == "navigationManager"][0]{
        setLanding
      }`
      );

      const currentPageId = documentId?.startsWith("drafts.")
        ? documentId.split("drafts.")[1]
        : documentId;

      if (navigationManager.setLanding?._ref === currentPageId) {
        setIsLandingPage(true);
      } else {
        setIsLandingPage(false);
      }
    };

    checkIfCurrentPageIsLandingPage();
  }, [documentId]);

  if (!isLandingPage) {
    return null;
  }

  return <ArrayOfObjectsInput {...props} />;
};

export default CustomCallToActions;
