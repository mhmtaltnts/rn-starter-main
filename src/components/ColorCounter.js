import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrase ${color}`} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ColorCounter;
