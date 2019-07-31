/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { SafeAreaView } from "react-native";

import { AppContainer } from "@screens/Navigator";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
