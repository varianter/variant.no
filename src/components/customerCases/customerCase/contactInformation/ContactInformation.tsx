import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

import ContactBoxContent from "src/components/sections/contact-box/ContactBoxContent";

import { fetchLocationsWithContact, getEmployeePageSlug } from "./api";

interface ContactInformationProps {
  language: string;
}

export default async function ContactInformation({
  language,
}: ContactInformationProps) {
  const employeePageSlug = await getEmployeePageSlug(language);
  const contactPoints = fetchLocationsWithContact();

  const t = await getTranslations("contact_information");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactBoxContent
        data={{
          basicTitle: t("help"),
          optionalSubtitle: t("contact_sale"),
          background: "light",
        }}
        language={language}
        employeesPageSlug={employeePageSlug}
        contactPoints={contactPoints}
      />
    </Suspense>
  );
}
