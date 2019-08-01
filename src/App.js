/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AppContainer } from "@screens/Navigator";
import { getColor } from "@themes";

const App = (): React.Node => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor={getColor("bg")} />
    <AppContainer />
  </SafeAreaView>
);

export default App;
