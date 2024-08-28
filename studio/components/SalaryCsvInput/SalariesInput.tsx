import { set, StringInputProps } from "sanity";
import { Box, Grid, Inline, Stack, Text, useTheme, useToast } from "@sanity/ui";
import { ChangeEvent } from "react";
import styles from "./salariesInput.module.css";
import { UploadIcon } from "@sanity/icons";
import {
  salariesAsStoredString,
  salariesFromCsvString,
  salariesFromStoredString,
} from "./salariesParseUtils";
import { SalariesParseErrorsToastDescription } from "./SalariesParseErrorsToastDescription";
import SalaryNumberInput from "./SalaryNumberInput";

const UPLOAD_CSV_INPUT_ID = "upload-csv-input";

export const SalariesInput = (props: StringInputProps) => {
  const toast = useToast();
  const theme = useTheme();
  const prefersDark = theme.sanity.v2?.color._dark ?? false;

  const salaries =
    props.value === undefined
      ? undefined
      : salariesFromStoredString(props.value);

  async function handleFileRead(e: ProgressEvent<FileReader>): Promise<void> {
    const fileData = e.target?.result;
    if (fileData === null || typeof fileData !== "string") {
      toast.push({
        title: "Invalid data",
        description: "Verify the file content and try again.",
        status: "error",
      });
      return;
    }
    const salariesParseResult = salariesFromCsvString(fileData);
    if (!salariesParseResult.ok) {
      toast.push({
        title: "Invalid salaries data",
        description: (
          <SalariesParseErrorsToastDescription
            errors={salariesParseResult.error}
          />
        ),
        status: "error",
      });
      return;
    }
    props.onChange(set(salariesAsStoredString(salariesParseResult.value)));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files !== null && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === "text/csv") {
        const reader = new FileReader();
        reader.onload = handleFileRead;
        reader.readAsText(file);
      } else {
        toast.push({
          title: "Invalid salaries file type",
          description: "Verify the file extension and try again.",
          status: "error",
        });
      }
    }
    // reset to allow subsequent uploads of the same file
    e.target.value = "";
  }

  function handleYearSalaryChange(year: string, salary: number): void {
    props.onChange(
      set(
        salariesAsStoredString({
          ...salaries,
          [year]: salary,
        }),
      ),
    );
  }

  return (
    <Stack space={4} className={prefersDark ? styles.darkTheme : ""}>
      <Inline space={2}>
        <div>
          {/*https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#using_a_label_element_to_trigger_a_hidden_file_input_element*/}
          <input
            id={UPLOAD_CSV_INPUT_ID}
            className={styles.uploadInput}
            type={"file"}
            onChange={handleFileChange}
            accept=".csv"
          />
          <Box className={styles.uploadButtonWrapper}>
            <button className={styles.uploadButton} tabIndex={-1}>
              <label
                htmlFor={UPLOAD_CSV_INPUT_ID}
                className={styles.uploadButtonContent}
              >
                <UploadIcon
                  color={"black"}
                  className={styles.uploadButtonIcon}
                />
                <span className={styles.uploadButtonText}>Upload (.csv)</span>
              </label>
            </button>
          </Box>
        </div>
        {salaries && Object.keys(salaries).length && (
          <Text muted size={1}>
            replaces all values below
          </Text>
        )}
      </Inline>
      {salaries && (
        <Grid columns={[2]}>
          {Object.entries(salaries)
            .toSorted(([a], [b]) => Number(b) - Number(a))
            .map(([year, salary], index) => (
              <>
                <div
                  key={year}
                  className={`${prefersDark ? styles.darkTheme : ""} ${styles.csvTableCell}`}
                >
                  <label htmlFor={`salary-number-input-${year}`}>
                    <span className={styles.csvTableYearLabel}>{year}</span>
                  </label>
                </div>
                <div
                  key={`${year}-salary`}
                  className={`${prefersDark ? styles.darkTheme : ""}  ${styles.csvTableCell}`}
                >
                  <SalaryNumberInput
                    id={`salary-number-input-${year}`}
                    value={salary}
                    className={styles.csvTableSalaryInput}
                    onChange={(s) => handleYearSalaryChange(year, s)}
                  />
                </div>
              </>
            ))}
        </Grid>
      )}
    </Stack>
  );
};
