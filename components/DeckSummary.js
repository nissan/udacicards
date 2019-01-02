import React from "react";
import { View, Text } from "react-native";

export const DeckSummary = ({ title, cardCount }) => {
  return (
    <View>
      <Text
        style={{ fontSize: 20, margin: 4, padding: 4, textAlign: "center" }}
      >
        {title}
      </Text>
      <Text
        style={{ fontSize: 12, margin: 4, padding: 4, textAlign: "center" }}
      >
        {" "}
        {cardCount}
      </Text>
    </View>
  );
};

export default DeckSummary;
