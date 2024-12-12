import { ContactBoxSection } from "studio/lib/interfaces/pages";

import { fetchEmployeesWithTags, getEmployeesPageSlug } from "./api";
import ContactBoxContent from "./ContactBoxContent";

export interface ContactBoxProps {
  section: ContactBoxSection;
  language: string;
}

export default async function ContactBox({
  section,
  language,
}: ContactBoxProps) {
  const employeesPageSlug = await getEmployeesPageSlug(language);

  if (!employeesPageSlug) {
    return null;
  }

  const contactPoints = fetchEmployeesWithTags(section.contactPoints);

  return (
    <ContactBoxContent
      data={section}
      language={language}
      employeesPageSlug={employeesPageSlug}
      contactPoints={contactPoints}
    />
  );
}
