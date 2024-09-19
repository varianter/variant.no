import { ReactNode, isValidElement } from "react";

export function getReactNodeTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return node.toString();
  }

  if (Array.isArray(node)) {
    return node.map(getReactNodeTextContent).join("");
  }

  if (isValidElement(node)) {
    const children = node.props.children;
    if (children) {
      return getReactNodeTextContent(children);
    }
  }

  return "";
}
