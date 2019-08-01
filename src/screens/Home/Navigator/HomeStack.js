// @flow

import {
  createStackNavigator,
  withNavigation,
  createAppContainer
} from "react-navigation";
import QuizScreen from "../QuizScreen/QuizScreen";

const HomeStack = createStackNavigator(
  {
    // ThemeSelect,
    QuizScreen
  },
  {
    initialRouteName: "QuizScreen",
    headerMode: "none"
  }
);

export default withNavigation(HomeStack);
