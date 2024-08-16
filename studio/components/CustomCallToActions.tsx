import React, { useEffect, useState } from "react";
import {
  ArrayOfObjectsInput,
  ArrayOfObjectsInputProps,
  ArraySchemaType,
  LoadingBlock,
  useFormValue,
} from "sanity";
import { Text, Card } from "@sanity/ui";
import { NavigationManager } from "src/app/api/navigationManager/route";

type CustomCallToActionsProps = ArrayOfObjectsInputProps<
  { _key: string },
  ArraySchemaType<unknown>
>;

const CustomCallToActions: React.FC<CustomCallToActionsProps> = (props) => {
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [navigationManager, setNavigationManager] = useState<
    NavigationManager[] | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const documentId = useFormValue(["_id"]) as string;

  useEffect(() => {
    const fetchNavigationManager = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/navigationManager");

        if (!res.ok) {
          throw new Error("Failed to fetch navigation manager");
        }

        const data: NavigationManager[] = await res.json();
        setNavigationManager(data);
      } catch (err) {
        console.error("Failed to fetch navigation manager", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNavigationManager();
  }, []);

  useEffect(() => {
    if (!navigationManager) return;

    const currentPageId = documentId?.startsWith("drafts.")
      ? documentId.split("drafts.")[1]
      : documentId;

    const isLanding = navigationManager[0]?.setLanding?._ref === currentPageId;

    setIsLandingPage(isLanding);
  }, [documentId, navigationManager]);

  if (loading) {
    return <LoadingBlock />;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
