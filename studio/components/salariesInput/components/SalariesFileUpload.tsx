import styles from "../salariesInput.module.css";
import { Box } from "@sanity/ui";
import { UploadIcon } from "@sanity/icons";
import {
  Salaries,
  salariesFromCsvString,
  SalariesParseError,
  SalariesParseErrorType,
} from "../utils/parseSalaries";
import { ChangeEvent } from "react";

const UPLOAD_CSV_INPUT_ID = "upload-csv-input";

interface SalariesFileUploadProps {
  onSalariesChanged: (salaries: Salaries) => void;
  onParseErrors: (errors: SalariesParseError[]) => void;
}

const SalariesFileUpload = ({
  onSalariesChanged,
  onParseErrors,
}: SalariesFileUploadProps) => {
  async function handleFileRead(e: ProgressEvent<FileReader>): Promise<void> {
    const fileData = e.target?.result;
    if (fileData === null || typeof fileData !== "string") {
      onParseErrors([{ error: SalariesParseErrorType.INVALID_FORMAT }]);
      return;
    }
    const salariesParseResult = salariesFromCsvString(fileData);
    if (!salariesParseResult.ok) {
      onParseErrors(salariesParseResult.error);
      return;
    }
    onSalariesChanged(salariesParseResult.value);
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files !== null && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === "text/csv") {
        const reader = new FileReader();
        reader.onload = handleFileRead;
        reader.readAsText(file);
      } else {
        onParseErrors([{ error: SalariesParseErrorType.INVALID_FORMAT }]);
      }
    }
    // reset to allow subsequent uploads of the same file
    e.target.value = "";
  }

  return (
    <div>
      {/*
        Using label for hidden input as a custom file upload button, based on:
        https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#using_a_label_element_to_trigger_a_hidden_file_input_element
      */}
      <input
        id={UPLOAD_CSV_INPUT_ID}
        className={styles.uploadInput}
        type={"file"}
        onChange={handleFileChange}
        accept=".csv"
      />
      <Box className={styles.uploadButtonWrapper}>
        <label
          htmlFor={UPLOAD_CSV_INPUT_ID}
          className={styles.uploadButtonContent}
        >
          <UploadIcon className={styles.uploadButtonIcon} />
          <span className={styles.uploadButtonText}>Upload (.csv)</span>
        </label>
      </Box>
    </div>
  );
};

export default SalariesFileUpload;
