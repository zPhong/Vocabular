// @flow
import * as React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  NavigationScreenProps
} from "react-navigation";

const AppStack = createSwitchNavigator(
  {
    Splash,
    Home
  },
  {
    initialRouteName: "Splash"
  }
);

const AppContainer = createAppContainer(AppStack)
);

export { AppContainer };
