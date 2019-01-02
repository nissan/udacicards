import React from "react";
import { View, Text } from "react-native";

export const DeckSummary = ({ title, cardCount }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{cardCount}</Text>
    </View>
  );
};

export default DeckSummary;
