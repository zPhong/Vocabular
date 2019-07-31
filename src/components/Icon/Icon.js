// @flow

import * as React from "react";
import { AppName } from "./Svg";
import Svg from "react-native-svg";

type PropsType = {
  name: string,
  color?: string,
  width: number,
  height: number
};

const iconList = {
  AppName
};

export default class Icon extends React.Component<PropsType> {
  static defaultProps = {
    color: "#dcdcdc"
  };

  render(): React.Node {
    const { name, width, height, color } = this.props;
    const icon = iconList[name];
    return (
      <Svg width={width} height={height} viewBox={icon.viewBox}>
        {icon.svg({ color })}
      </Svg>
    );
  }
}
