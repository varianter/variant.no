import { Button } from "@sanity/ui";

export const OpenSharedButton = () => {
  const handleClick = () => {
    window.open("http://localhost:3000/shared", "_blank");
  };

  return <Button text="Go to Shared" onClick={handleClick} />;
};
