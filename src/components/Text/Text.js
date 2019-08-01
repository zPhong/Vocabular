// @flow
import * as React from "react";
import { Text } from "react-native";
import { getColor, typography } from "@themes";
import type { TextStyleProp, TextType, ColorType } from "@themes";

export type TextPropsType = {
  children: React.Node,
  style?: TextStyleProp,
  color?: ColorType,
  type?: TextType
};

const GText = (props: TextPropsType): React.Node => {
  const { children, style, color, type, ...rest } = props;
  const fontStyle = type ? typography[type] : {};
  const calculatedColor = color ? { color: getColor(color) } : {};

  return (
    <Text style={[fontStyle, calculatedColor, style]} {...rest}>
      {children}
    </Text>
  );
};

GText.defaultProps = {
  alpha: 1,
  color: "ne1000",
  type: "body1",
  style: {},
  animated: false
};

export default GText;
