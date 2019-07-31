//flow

import type { ColorType } from "../types";
import { neutral } from "./Neutral";

export default (name: ColorType): string => {
  const colorsObject = {
    ...primary,
    ...neutral
  };
  return colorsObject[name];
};
