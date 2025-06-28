import CustomErrorMessage from "src/components/customErrorMessage/CustomErrorMessage";
import { homeLink } from "src/components/utils/linkTypes";

export default function NotFound() {
  return (
    <CustomErrorMessage
      title="404 — Something went wrong"
      body="The page you are looking for does not exist. There may be an error in the URL, or the page may have been moved or deleted."
      link={homeLink}
    />
  );
}
