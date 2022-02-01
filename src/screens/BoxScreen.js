import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box #1</Text>
      <Text style={styles.textTwoStyle}>Box #2</Text>
      <Text style={styles.textThreeStyle}>Box #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 1,
    margin: 20,
    height: 500,
  },
  textOneStyle: {
    borderWidth: 1,
  },
  textTwoStyle: {
    borderWidth: 1,
    flex: 1,
    alignSelf: "flex-start",
  },
  textThreeStyle: {
    borderWidth: 1,
  },
});
export default BoxScreen;
