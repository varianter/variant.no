import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export type Locale = (typeof locales)[number];
const locales = ["en", "no"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "no",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
