import React from "react";
import { StyleSheet, View } from "react-native";
import CalculatorHome from "./src/screens/CalculatorHome";
import FBLoginButton from "./src/components/FBLoginButton";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CalculatorHome />
        <FBLoginButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25
  }
});
