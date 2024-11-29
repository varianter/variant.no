import Text from "src/components/text/Text";

import styles from "./badge.module.css";

interface IBadge {
  children: React.ReactNode;
  badgeColor?: string;
  textColor?: string;
}

const DEFAULT_BADGE_COLOR = "#EAEAEA";
const DEFAULT_TEXT_COLOR = "#222424";

const Badge = ({ children, badgeColor, textColor }: IBadge) => {
  const badgeColors = {
    backgroundColor: badgeColor || DEFAULT_BADGE_COLOR,
    color: textColor || DEFAULT_TEXT_COLOR,
  };
  return (
    <div className={styles.badgeWrapper} style={badgeColors}>
      <Text type="bodySmall">{children}</Text>
    </div>
  );
};

export default Badge;
