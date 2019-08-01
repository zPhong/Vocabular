// @flow

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "../SplashScreen/SplashScreen";
import HomeStack from "../Home/Navigator/HomeStack";

const AppStack = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Home: HomeStack
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppStack);

export { AppContainer };
