import { CSSProperties } from "react";

export const backgroundStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "1rem",
  backgroundColor: "#FFFFFF",
  fontSize: 60,
  fontFamily: "Britti Sans Regular",
  fontWeight: 700,
  color: "#FFFFFF",
};

export const blueBackgroundStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "6rem",
  width: "100%",
  height: "100%",
  backgroundColor: "#3840FF",
  borderRadius: "48px 48px 200px 48px",
  padding: "64px 100px",
};

export const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: "86px",
  fontFamily: "Britti Sans Regular",
};

export const subTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: "48px",
  fontFamily: "Britti Sans Regular",
  color: "#FFFFFF",
  minHeight: "24px",
  marginBottom: "2rem",
  height: "auto",
};

export const eventInfoContainerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  width: "100%",
  height: "auto",
  marginTop: "2rem",
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
