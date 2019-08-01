// @flow

import type { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

export type { TextStyleProp };
export type TypographyType = {
  title: TextStyleProp,
  body: TextStyleProp,
  head_line: TextStyleProp,
  sub_header: TextStyleProp,
  caption: TextStyleProp,
  button: TextStyleProp,
  display: TextStyleProp
};

export type ColorType =
  | "pr1000"
  | "pr950"
  | "pr900"
  | "pr850"
  | "pr800"
  | "pr750"
  | "pr700"
  | "pr650"
  | "pr600"
  | "pr550"
  | "pr500"
  | "pr450"
  | "pr400"
  | "pr350"
  | "pr300"
  | "pr250"
  | "pr200"
  | "pr150"
  | "pr100"
  | "pr50"
  | "pr0"
  | "ne1000"
  | "ne950"
  | "ne900"
  | "ne850"
  | "ne800"
  | "ne750"
  | "ne700"
  | "ne650"
  | "ne600"
  | "ne550"
  | "ne500"
  | "ne450"
  | "ne400"
  | "ne350"
  | "ne300"
  | "ne250"
  | "ne200"
  | "ne150"
  | "ne100"
  | "ne50"
  | "ne0";
