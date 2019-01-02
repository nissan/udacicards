import React from "react";
import { View, Text, Button } from "react-native";

export const IndividualDeckView = () => {
  return (
    <View
      style={{ borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }}
    >
      <Text>This is the Individual Deck View</Text>
      <Button title="Add Card" />
      <Button title="Start Quiz" />
    </View>
  );
};

export default IndividualDeckView;
