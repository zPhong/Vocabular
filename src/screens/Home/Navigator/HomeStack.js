// @flow
import * as React from "react";
import { createStackNavigator, NavigationScreenProps } from "react-navigation";

const HomeStack = createSwitchNavigator(
  {
    ThemeSelect,
    Quiz
  },
  {
    initialRouteName: "ThemeSelect"
  }
);

export { HomeStack };
