// @flow

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "@components";
import { NavigationScreenProps } from "react-navigation";

type PropsType = {
  navigation: NavigationScreenProps
};

class SplashScreen extends React.Component<PropsType> {
  render(): React.Node {
    return (
      <View>
        <View>
          <Icon />
        </View>
        <View>
          <Text />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
