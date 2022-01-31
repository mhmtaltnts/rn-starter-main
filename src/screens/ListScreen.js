import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Haso", age: 26, key: "1" },
    { name: "Hüso", age: 63, key: "2" },
    { name: "Muso", age: 25, key: "3" },
    { name: "Kuso", age: 58, key: "4" },
    { name: "Kuso", age: 45, key: "5" },
    { name: "Kuso", age: 47, key: "6" },
    { name: "Kuso", age: 80, key: "7" },
    { name: "Kusoffffffff ", age: 85, key: "8" },
    { name: "Kusof ", age: 41, key: "9" },
    { name: "Kuso      fff", age: 36, key: "10" },
    { name: "Kuso        f ", age: 10, key: "11" },
    { name: "Kuso  fgrr", agey: 6, key: "12" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.key}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name:{item.name}-Age:{item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
