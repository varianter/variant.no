"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type VersionQueryHandlerProps = {
  hasVersionParam: boolean;
  eventKey: string;
  locale: string;
};

export const VersionQueryHandler = ({
  hasVersionParam,
  eventKey,
  locale,
}: VersionQueryHandlerProps) => {
  const router = useRouter();
  const versionDate = new Date().getTime();

  useEffect(() => {
    if (!hasVersionParam) {
      router.replace(`/${locale}/event/${eventKey}?v=${versionDate}`, {
        scroll: false,
      });
    }
  }, [hasVersionParam, versionDate, eventKey, locale, router]);

  return null;
};
