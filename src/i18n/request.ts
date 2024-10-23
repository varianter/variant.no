import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

console.log("requestLocale response", requestLocale);

  if (!locale || !routing.locales.includes(locale as "en" | "no")) {
    locale = routing.defaultLocale;
  }

  console.log("locale", locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
