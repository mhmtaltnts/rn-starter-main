import { View, Text } from "react-native";
import React from "react";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score="9"
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score="10"
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score="1"
      />
    </View>
  );
};

export default ImageScreen;
