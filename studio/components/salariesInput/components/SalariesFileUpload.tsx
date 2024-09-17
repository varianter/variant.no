import { UploadIcon } from "@sanity/icons";
import { Box, Inline, Text } from "@sanity/ui";
import { ChangeEvent, MouseEvent, useState } from "react";

import styles from "studio/components/salariesInput/salariesInput.module.css";
import {
  Salaries,
  SalariesParseError,
  SalariesParseErrorType,
  salariesFromCsvString,
} from "studio/components/salariesInput/utils/parseSalaries";

const UPLOAD_CSV_INPUT_ID = "upload-csv-input";

interface SalariesFileUploadProps {
  hasValue?: boolean;
  onSalariesChanged: (salaries: Salaries) => void;
  onParseErrors: (errors: SalariesParseError[]) => void;
}

const SalariesFileUpload = ({
  hasValue,
  onSalariesChanged,
  onParseErrors,
}: SalariesFileUploadProps) => {
  const [filename, setFilename] = useState<string | null>(null);

  async function handleFileRead(e: ProgressEvent<FileReader>): Promise<void> {
    const fileData = e.target?.result;
    if (fileData === null || typeof fileData !== "string") {
      onParseErrors([{ error: SalariesParseErrorType.INVALID_FORMAT }]);
      setFilename(null);
      return;
    }
    const salariesParseResult = salariesFromCsvString(fileData);
    if (!salariesParseResult.ok) {
      onParseErrors(salariesParseResult.error);
      setFilename(null);
      return;
    }
    onSalariesChanged(salariesParseResult.value);
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files !== null && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === "text/csv") {
        setFilename(file.name);
        const reader = new FileReader();
        reader.onload = handleFileRead;
        reader.readAsText(file);
      } else {
        onParseErrors([{ error: SalariesParseErrorType.INVALID_FORMAT }]);
      }
    }
  }

  function handleOnClick(e: MouseEvent<HTMLInputElement>) {
    /*
     resets input to allow subsequent uploads of the same file
     has the downside that the file input will be cleared even if the user only cancels the file dialog without uploading a file
    */
    e.currentTarget.value = "";
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
        onClick={handleOnClick}
        accept=".csv"
      />
      <Inline space={2}>
        <Box className={styles.uploadButtonWrapper}>
          <label
            htmlFor={UPLOAD_CSV_INPUT_ID}
            className={`${styles.uploadButtonContent}${hasValue ? ` ${styles.hasValue}` : ""}`}
          >
            <UploadIcon className={styles.uploadButtonIcon} />
            <span className={styles.uploadButtonText}>
              {hasValue ? "Re-upload" : "Upload"} (.csv)
            </span>
          </label>
        </Box>
        {filename && (
          <Text muted size={1}>
            {filename}
          </Text>
        )}
      </Inline>
    </div>
  );
};

export default SalariesFileUpload;
