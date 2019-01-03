import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NewQuestionView = () => {
  return (
    <View style={styles.question}>
      <Text>This is the New Question View</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  question: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }
});
export default NewQuestionView;
