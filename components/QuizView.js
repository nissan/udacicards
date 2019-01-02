import React from "react";
import { View, Text } from "react-native";

export const QuizView = () => {
  return (
    <View>
      <Text>This is the Quiz View</Text>
      <Button title="Correct" />
      <Button title="Incorrect" />
    </View>
  );
};

export default QuizView;
