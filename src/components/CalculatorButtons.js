import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const buttons = [
  ["AC", "DEL"],
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"]
];

export default class CalculatorButtons extends Component {
  render() {
    const { handleOnPress } = this.props;
    let rows = buttons.map((buttonRows, index) => {
      let row = buttonRows.map((button, buttonIndex) => {
        return (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handleOnPress(button)}
            key={`btn-${buttonIndex}`}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        );
      });
      return (
        <View style={styles.inputRow} key={`row-${index}`}>
          {row}
        </View>
      );
    });
    return rows;
    return { rows };
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    margin: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 30
  },
  inputRow: {
    flex: 1,
    flexDirection: "row"
  }
});
