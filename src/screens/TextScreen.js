import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPass) => setPassword(newPass)}
      />
      <Text>My password is {password}</Text>
      {password.length < 4 ? (
        <Text>Enter password at least 5 character</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderWidth: 1,
    borderColor: "black",
  },
});
export default TextScreen;
