const r =
  /^[\s\uFEFF\xA0\u3000\u200B-\u200D]+|[\s\uFEFF\xA0\u3000\u200B-\u200D]+$/g;

export const trimText = (text: string) => {
  return text == null ? "" : ("" + text).replace(r, "");
};
