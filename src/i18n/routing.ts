import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

const locales = ["en", "no", "se"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "no",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
