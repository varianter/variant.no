const RedirectThumbnail = ({ permanent }: { permanent: boolean }) => {
  return <span style={{ fontSize: "1.5rem" }}>{permanent ? "⮕" : "⇢"}</span>;
};

export default RedirectThumbnail;
