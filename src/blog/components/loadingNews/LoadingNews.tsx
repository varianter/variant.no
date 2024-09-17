import Text from "src/components/text/Text";

import styles from "./loadingNews.module.css";

const LoadingNews = () => {
  return (
    <div className={styles.wrapper}>
      <Text className={styles.loading}>Loading...</Text>
    </div>
  );
};

export default LoadingNews;
