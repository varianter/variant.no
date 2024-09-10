import { SlugInputProps } from "sanity";
import styles from "./prefixedSlugInput.module.css";
import { useTheme } from "@sanity/ui";

type PrefixedSlugInputProps = SlugInputProps & {
  prefix: string;
};

const PrefixedSlugInput = ({ prefix, ...props }: PrefixedSlugInputProps) => {
  const theme = useTheme();
  const prefersDark = theme.sanity.v2?.color._dark ?? false;

  return (
    <div className={`${prefersDark ? `${styles.dark} ` : ""}${styles.wrapper}`}>
      <span className={styles.prefixWrapper}>{prefix}</span>
      {props.renderDefault(props)}
    </div>
  );
};

export default PrefixedSlugInput;
