import React from "react";
import { View, Text, Button } from "react-native";

export const QuizView = () => {
  return (
    <View
      style={{ borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }}
    >
      <Text>This is the Quiz View</Text>
      <Button title="Correct" />
      <Button title="Incorrect" />
    </View>
  );
};

export default QuizView;
