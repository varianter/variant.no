import Text from "src/components/text/Text";

import styles from "./badge.module.css";

interface IBadge {
  children: React.ReactNode;
  badgeColor?: string;
  textColor?: string;
}

const Badge = ({
  children,
  badgeColor = "#EAEAEA",
  textColor = "#222424",
}: IBadge) => {
  const badgeColors = {
    backgroundColor: badgeColor,
    color: textColor,
  };
  return (
    <div className={styles.badgeWrapper} style={badgeColors}>
      <Text type="bodySmall">{children}</Text>
    </div>
  );
};

export default Badge;
