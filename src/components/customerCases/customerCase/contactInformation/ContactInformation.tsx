import Button from "src/components/buttons/Button";
import CustomerCaseConsultants from "src/components/customerCases/customerCase/sections/customerCaseConsultants/CustomerCaseConsultants";
import Text from "src/components/text/Text";
import { getDraftModeInfo } from "src/utils/draftmode";
import { fetchEmployeesByEmails } from "src/utils/employees";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

import styles from "./contactInformation.module.css";

//TODO: Create SanityField type for Sales Contact in location schema use it to fetch employee data from chewbacca.
const consultantsResult = await fetchEmployeesByEmails(["amn@variant.no"]);

const ContactInformation = async () => {
  const { perspective } = getDraftModeInfo();

  const [companyLocations] = await Promise.all([
    loadStudioQuery<CompanyLocation[]>(
      COMPANY_LOCATIONS_QUERY,
      {},
      { perspective },
    ),
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        {/* TODO: translation */}
        <Text type={"h3"}>
          Trenger du hjelp med lignende eller noe helt annet?
        </Text>
        <Text type="bodyBig"> Kontakt salg! </Text>
      </div>
      <div className={styles.locationSection}>
        {/* TODO: add logic for location buttons */}
        {companyLocations &&
          companyLocations.data.map((location) => (
            <Button type="secondary" key={location._id}>
              {location.companyLocationName}
            </Button>
          ))}
      </div>
      {consultantsResult.ok && (
        <CustomerCaseConsultants
          language={"no"}
          consultants={consultantsResult.value}
        />
      )}
    </div>
  );
};
export default ContactInformation;
