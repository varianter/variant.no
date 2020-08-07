import React from "react";
import Lottie, { Options } from "react-lottie";
import * as blob1 from "./blob-1.json";
import * as blob2 from "./blob-2.json";
import * as blob3 from "./blob-3.json";

export type BlobVariations = "blob-1" | "blob-2" | "blob-3";

export type BlobProps = {
  className?: string;
  variation?: BlobVariations;
};

export default function Blob({ className, variation = "blob-1" }: BlobProps) {
  return (
    <div className={className}>
      <Lottie options={createDefaultOptions(typeToImport(variation))} />
    </div>
  );
}

const createDefaultOptions = (animationData: unknown): Options => ({
  loop: false,
  autoplay: true,
  animationData,

  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

function typeToImport(variation: BlobVariations) {
  switch (variation) {
    case "blob-1":
      return blob1;
    case "blob-2":
      return blob2;
    case "blob-3":
      return blob3;
  }
}
