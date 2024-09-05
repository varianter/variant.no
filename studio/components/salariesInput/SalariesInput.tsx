import { set, StringInputProps } from "sanity";
import { Inline, Stack, Text, useToast } from "@sanity/ui";
import {
  Salaries,
  salariesAsStoredString,
  salariesFromStoredString,
  SalariesParseError,
} from "./utils/parseSalaries";
import { SalariesParseErrorsToastDescription } from "./components/SalariesParseErrorsToastDescription";
import SalariesFileUpload from "./components/SalariesFileUpload";
import SalariesTableEditor from "./components/SalariesTableEditor";

export const SalariesInput = (props: StringInputProps) => {
  const toast = useToast();

  const salaries =
    props.value === undefined
      ? undefined
      : salariesFromStoredString(props.value);

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

  function handleSalariesChangedFromFile(salariesFromFile: Salaries) {
    props.onChange(set(salariesAsStoredString(salariesFromFile)));
  }

  function handleSalariesFileParseErrors(errors: SalariesParseError[]) {
    toast.push({
      title: "Invalid salaries data",
      description: <SalariesParseErrorsToastDescription errors={errors} />,
      status: "error",
      duration: 10000,
    });
  }

  return (
    <Stack space={4}>
      <Inline space={2}>
        <SalariesFileUpload
          onSalariesChanged={handleSalariesChangedFromFile}
          onParseErrors={handleSalariesFileParseErrors}
        />
        {salaries && Object.keys(salaries).length && (
          <Text muted size={1}>
            replaces all values below
          </Text>
        )}
      </Inline>
      {salaries && (
        <SalariesTableEditor
          salaries={salaries}
          onYearSalaryChange={handleYearSalaryChange}
        />
      )}
    </Stack>
  );
};
