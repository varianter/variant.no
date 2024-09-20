import { Card, Text } from "@sanity/ui";
import React, { useEffect, useState } from "react";
import {
  ArrayOfObjectsInput,
  ArrayOfObjectsInputProps,
  ArraySchemaType,
  LoadingBlock,
  useFormValue,
} from "sanity";

import { fetchWithToken } from "studio/lib/fetchWithToken";
import { LANDING_PAGE_REF_QUERY } from "studio/lib/queries/navigation";

type CustomCallToActionsProps = ArrayOfObjectsInputProps<
  { _key: string },
  ArraySchemaType<unknown>
>;

const CustomCallToActions: React.FC<CustomCallToActionsProps> = (props) => {
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [landingPageId, setLandingPageId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const documentId = useFormValue(["_id"]) as string;

  useEffect(() => {
    const fetchLandingId = async () => {
      try {
        setLoading(true);
        const landingId = await fetchWithToken<string>(LANDING_PAGE_REF_QUERY);
        setLandingPageId(landingId);
      } catch (error) {
        console.error("Failed to fetch navigation manager", error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLandingId();
  }, []);

  useEffect(() => {
    if (!landingPageId) return;

    const currentPageId = documentId?.startsWith("drafts.")
      ? documentId.split("drafts.")[1]
      : documentId;

    const isLanding = landingPageId === currentPageId;

    setIsLandingPage(isLanding);
  }, [documentId, landingPageId]);

  if (loading) {
    return <LoadingBlock />;
  }

  if (error) {
    return (
      <Card padding={[3, 3, 4]} radius={2} shadow={1} tone="critical">
        <Text align="center">Error: {error}</Text>
      </Card>
    );
  }

  if (!isLandingPage) {
    return (
      <Card padding={[3, 3, 4]} radius={2} shadow={1} tone="primary">
        <Text align="center">
          This feature is only available for landing pages
        </Text>
      </Card>
    );
  }
  return <ArrayOfObjectsInput {...props} />;
};

export default CustomCallToActions;
