import { ReactElement, ReactNode, isValidElement } from "react";

export function getReactNodeTextContent(node: ReactNode): string {
  if (node == null) return "";

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getReactNodeTextContent).join("");
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    if (element.props.children) {
      return getReactNodeTextContent(element.props.children);
    }
  }

  return "";
}
