import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{} Calculator</Text>
        <Text style={styles.headerText}>I am at location</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
      margin:5,
      fontWeight: "bold",
  }
});
