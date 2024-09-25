import Text from "src/components/text/Text";
import { BonusObject } from "studio/lib/interfaces/compensations";

import styles from "./yearlyBonuses.module.css";

interface YearlyBonusesProps {
  bonuses: BonusObject[];
}

const YearlyBonuses = ({ bonuses }: YearlyBonusesProps) => {
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
                  <Text type={"small"}>{bonus.bonus}</Text>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default YearlyBonuses;
