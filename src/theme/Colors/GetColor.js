// @flow

import { darkTheme } from "./Colors";
import type { ColorType } from "../types";

export default (name: ColorType): string => darkTheme[name];
