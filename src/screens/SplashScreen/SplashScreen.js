// @flow

import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Icon, Text } from "@components";
import { getColor } from "@themes";

type PropsType = {
  navigation: NavigationScreenProps
};

const LogoWidth = Dimensions.get("window").width;
const LogoHeight = (LogoWidth * 3) / 4;

class SplashScreen extends React.Component<PropsType> {
  componentDidMount() {
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate("Home");
    }, 3000);
  }

  render(): React.Node {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="AppName" width={LogoWidth} height={LogoHeight} />
        </View>
        <View style={styles.loadingContainer}>
          <Text type="display" color="white">
            loading ....
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor("bg"),
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoContainer: {
    marginTop: "15%"
  },
  loadingContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SplashScreen;
