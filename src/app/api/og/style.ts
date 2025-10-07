import { CSSProperties } from "react";

export const backgroundStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  padding: "1rem",
  width: "100%",
  fontSize: 60,
  fontFamily: "Britti Sans Regular",
  fontWeight: 700,
  color: "#FFFFFF",
};

export const blueBackgroundStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  alignContent: "space-between",
  backgroundColor: "#3840FF",
  borderRadius: "48px 48px 200px 48px",
  padding: "64px 100px",
};

export const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: "86px",
  fontFamily: "Britti Sans Regular",
  maxHeight: "172px",
  overflow: "hidden",
};

export const subTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: "48px",
  lineHeight: "57px",
  fontFamily: "Britti Sans Regular",
  color: "#FFFFFF",
  minHeight: "24px",
  marginTop: "1rem",
  marginBottom: "2rem",
  maxHeight: "144px",
  overflow: "hidden",
};

export const eventInfoContainerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  width: "100%",
  height: "auto",
  position: "absolute",
  bottom: "70px",
  left: "100px",
};

export const eventInfoStyle: CSSProperties = {
  fontSize: "38px",
  fontFamily: "Britti Sans Regular",
  color: "#FFFFFF",
};

export const imgStyle: CSSProperties = {
  width: "175px",
  height: "42px",
  position: "absolute",
  bottom: "70px",
  left: "100px",
};

export const dot: CSSProperties = {
  width: "0.5rem",
  height: "0.5rem",
};
