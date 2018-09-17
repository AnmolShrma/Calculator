import React, { Component } from "react";
import { StyleSheet, View, Button, Alert, Text } from "react-native";

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={ this.logIn } title="Facebook Login" color="#009688" />
        {/* <Text>hi</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    justifyContent: "center",
    alignItems: "center"
  },
  fbText: {
    fontSize: 40,
    color: "#36869f"
  }
});
