import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREAMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  console.log(green);
  console.log(blue);
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() => {
          if (red >= 255) {
            setRed(red);
          } else {
            setRed(red + COLOR_INCREAMENT);
          }
        }}
        onDecrease={() => {
          if (red > 0) {
            setRed(red - COLOR_INCREAMENT);
          } else {
            setRed(red);
          }
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          if (blue >= 255) {
            setBlue(blue);
          } else {
            setBlue(blue + COLOR_INCREAMENT);
          }
        }}
        onDecrease={() => {
          if (blue <= 0) {
            setBlue(blue);
          } else {
            setBlue(blue - COLOR_INCREAMENT);
          }
        }}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => {
          if (green >= 255) {
            setGreen(green);
          } else {
            setGreen(green + COLOR_INCREAMENT);
          }
        }}
        onDecrease={() => {
          if (green <= 0) {
            setGreen(green);
          } else {
            setGreen(green - COLOR_INCREAMENT);
          }
        }}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
