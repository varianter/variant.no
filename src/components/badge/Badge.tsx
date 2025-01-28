import Text from "src/components/text/Text";
import { getTextColor } from "src/utils/color/getTextColor";
import { cn } from "src/utils/css";

import styles from "./badge.module.css";

interface IBadge {
  children: React.ReactNode;
  badgeColor?: string;
  className?: string;
  borderColor?: string;
}

const DEFAULT_BADGE_COLOR = "#EAEAEA";

const Badge = ({ children, badgeColor, className, borderColor }: IBadge) => {
  const bgColor = badgeColor ?? DEFAULT_BADGE_COLOR;
  const textColor = getTextColor(bgColor);
  const brColor = borderColor ?? "";

  return (
    <div
      className={cn(styles.badgeWrapper, className)}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        ...(brColor && {
          borderColor: brColor,
          borderWidth: "1px",
          borderStyle: "solid",
        }),
      }}
    >
      <Text type="bodySmall">{children}</Text>
    </div>
  );
};

export default Badge;
