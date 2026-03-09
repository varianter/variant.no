import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

const defaultLocale = process.env.NEXT_PUBLIC_SWEDISH ? "se" : "no";
const locales = process.env.NEXT_PUBLIC_SWEDISH ? ["se", "en"] : ["en", "no"];
export type Locale = (typeof locales)[number];

export const routing = defineRouting({ locales, defaultLocale: defaultLocale });

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
