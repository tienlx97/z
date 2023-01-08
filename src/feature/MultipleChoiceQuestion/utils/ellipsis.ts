import { trimText } from "./trim";

export const ellipsis = (text: string, maxLength: number) => {
  return text
    ? text.length > maxLength + 1
      ? trimText(text.substring(maxLength)) + "…"
      : text
    : "";
};
