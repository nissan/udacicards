import React from "react";
import { View, Text, Button } from "react-native";

export const IndividualDeckView = () => {
  return (
    <View>
      <Text>This is the Individual Deck View</Text>
      <Button title="Add Card" />
      <Button title="Start Quiz" />
    </View>
  );
};

export default IndividualDeckView;
