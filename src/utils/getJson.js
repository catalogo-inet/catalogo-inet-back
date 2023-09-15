import { createRequire } from "module";

export const getJson = async (url) => {
  const r = createRequire(import.meta.url);
  const json = await r(url);
  return json;
};
