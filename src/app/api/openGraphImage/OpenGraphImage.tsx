import { getBackground } from "./background";

interface OpenGraphImageProps {
  title: string;
  description?: string;
}

const OpenGraphImage = ({ title, description }: OpenGraphImageProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        background: getBackground(),
        width: "100%",
        height: "100%",
        padding: "0 75px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "70%",
          marginTop: "125px",
        }}
      >
        <span
          style={{
            fontFamily: "Recoleta",
            fontSize: 78,
          }}
        >
          {title}
        </span>
        {description && (
          <span
            style={{
              fontFamily: "Graphik",
              fontWeight: 400,
              fontSize: 36,
            }}
          >
            {description.length > 160
              ? description.substring(0, 160) + "[...]"
              : description}
          </span>
        )}
      </div>
    </div>
  );
};

export default OpenGraphImage;
