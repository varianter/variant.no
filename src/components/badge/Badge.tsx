import Text from "src/components/text/Text";
import { cn } from "src/utils/css";

import styles from "./badge.module.css";

interface IBadge {
  children: React.ReactNode;
  badgeColor?: string;
  textColor?: string;
  className?: string;
}

const DEFAULT_BADGE_COLOR = "#EAEAEA";
const DEFAULT_TEXT_COLOR = "#222424";

const Badge = ({ children, badgeColor, textColor, className }: IBadge) => {
  const badgeColors = {
    backgroundColor: badgeColor || DEFAULT_BADGE_COLOR,
    color: textColor || DEFAULT_TEXT_COLOR,
  };
  return (
    <div className={cn(styles.badgeWrapper, className)} style={badgeColors}>
      <Text type="bodySmall">{children}</Text>
    </div>
  );
};

export default Badge;
