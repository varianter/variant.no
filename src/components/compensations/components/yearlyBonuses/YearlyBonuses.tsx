import Text from "src/components/text/Text";
import { formatAsCurrency } from "src/utils/i18n";
import { BonusPage } from "studio/lib/interfaces/compensations";
import { LocaleDocument } from "studio/lib/interfaces/locale";

import styles from "./yearlyBonuses.module.css";

interface YearlyBonusesProps {
  bonuses: BonusPage[];
  locale: LocaleDocument;
}

const YearlyBonuses = ({ bonuses, locale }: YearlyBonusesProps) => {
  return (
    <div className={styles.wrapper}>
      <Text type={"h3"}>Historisk bonus</Text>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <Text>År</Text>
            </th>
            <th className={styles.bonusHeader}>
              <Text>Beløp</Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {bonuses
            .sort((a, b) => b.year - a.year)
            .map((bonus) => (
              <tr key={bonus._key}>
                <th>
                  <Text type={"small"}>{bonus.year}</Text>
                </th>
                <td className={styles.bonusCell}>
                  <Text type={"small"}>
                    {formatAsCurrency(
                      bonus.bonus,
                      locale.locale,
                      locale.currency,
                    )}
                  </Text>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default YearlyBonuses;
