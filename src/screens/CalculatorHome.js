import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import CalculatorButtons from "../components/CalculatorButtons";


export default class CalculatorHome extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      initialValue: "0",
      operator: null,
      firstValue: "",
      secondValue: "",
      nextValue: false
    };
    this.state = this.initialState;
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = input => {
    const {
      initialValue,
      operator,
      firstValue,
      secondValue,
      nextValue
    } = this.state;
    switch (input) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.setState({
          initialValue: initialValue === "0" ? input : initialValue + input
        });
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input
          });
        } else {
          this.setState({
            secondValue: secondValue + input
          });
        }
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        this.setState({
          nextValue: true,
          operator: input,
          initialValue:
            (operator !== null
              ? initialValue.substr(0, initialValue.length - 1)
              : initialValue) + input
        });
        break;

      case ".":
        let dot = initialValue.toString().slice(-1);
        this.setState({
          initialValue: dot !== "." ? initialValue + input : initialValue
        });
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input
          });
        } else {
          this.setState({
            secondValue: secondValue + input
          });
        }
        break;

      case "=":
        let result = eval(initialValue);
        this.setState({
          initialValue: result % 1 === 0 ? result : result.toFixed(2),
          firstValue: result % 1 === 0 ? result : result.toFixed(2),
          secondValue: "",
          operator: null,
          nextValue: false
        });
        break;

      case "AC":
        this.setState(this.initialState);
        break;

      case "DEL":
        let string = initialValue.toString();
        let newString = string.slice(0, string.length - 1);
        let length = string.length;
        this.setState({
          initialValue: length === 1 ? "0" : newString,
          firstValue: length === 1 ? "" : newString
        });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{this.state.initialValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <CalculatorButtons handleOnPress={this.handleInput} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultContainer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#36869f"
  },
  inputContainer: {
    flex: 8,
    backgroundColor: "#4ab7d8"
  },
  resultText: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    padding: 20,
    textAlign: "right"
  }
});
