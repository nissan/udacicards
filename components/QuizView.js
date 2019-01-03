import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const QuizView = () => {
  return (
    <View style={styles.quiz}>
      <Text>This is the Quiz View</Text>
      <Button title="Correct" />
      <Button title="Incorrect" />
    </View>
  );
};
const styles = StyleSheet.create({
  quiz: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }
});
export default QuizView;
