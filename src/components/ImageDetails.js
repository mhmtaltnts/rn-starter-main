import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ImageDetails = (props) => {
  return (
    <View style={styles.margin}>
      <Text style={styles.textstyle}>{props.title}</Text>
      <Image style={styles.image} source={props.imageSource} />
      <Text>İmage Score: {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginLeft: 20,
  },
  textstyle: {
    fontSize: 30,
  },
  image: {
    width: "300px",
    height: "300px",
    borderWidth: 1,
  },
});
export default ImageDetails;
