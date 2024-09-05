import styles from "../salariesInput.module.css";
import SalaryNumberInput from "./SalaryNumberInput";
import { Grid } from "@sanity/ui";
import { Salaries } from "../utils/parseSalaries";

interface SalariesTableEditorProps {
  salaries: Salaries;
  onYearSalaryChange: (year: string, salary: number) => void;
}

const SalariesTableEditor = ({
  salaries,
  onYearSalaryChange,
}: SalariesTableEditorProps) => {
  return (
    <Grid columns={[2]}>
      <div className={styles.tableHeader}>
        <span className={styles.tableHeaderLabel}>Examination Year</span>
      </div>
      <div className={`${styles.tableHeader} ${styles.tableSalaryHeader}`}>
        <span className={styles.tableHeaderLabel}>Amount</span>
      </div>
      {Object.entries(salaries)
        .toSorted(([a], [b]) => Number(b) - Number(a))
        .map(([year, salary], index) => (
          <>
            <div key={year} className={styles.tableCell}>
              <label htmlFor={`salary-number-input-${year}`}>
                <span className={styles.tableYearLabel}>{year}</span>
              </label>
            </div>
            <div key={`${year}-salary`} className={styles.tableCell}>
              <SalaryNumberInput
                id={`salary-number-input-${year}`}
                value={salary}
                className={styles.tableSalaryInput}
                onChange={(s) => onYearSalaryChange(year, s)}
              />
            </div>
          </>
        ))}
    </Grid>
  );
};

export default SalariesTableEditor;
