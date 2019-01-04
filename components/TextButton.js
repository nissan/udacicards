import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { red } from "../utils/colors";

export const TextButton = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.plain, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plain: {
    textAlign: "center",
    color: red
  }
});

export default TextButton;
