import Text from "src/components/text/Text";
import styles from "./postHero.module.css";
import BackButton from "src/components/buttons/BackButton";

const formatDate = (date: string | number | Date): string => {
  const d: Date = new Date(date);
  const year: string = String(d.getFullYear()).slice(-2);
  const month: string = String(d.getMonth() + 1).padStart(2, "0");
  const day: string = String(d.getDate()).padStart(2, "0");

  return `${day}.${month}.${year}`;
};

const PostHero = ({ title, date }: { title: string; date: string }) => {
  const formattedDate: string = formatDate(date);
  return (
    <div className={styles.hero}>
      <BackButton />
      <Text type="h1">{title}</Text>
      <Text type="bodyLarge">Published {formattedDate}</Text>
    </div>
  );
};

export default PostHero;
