import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const DeckSummary = ({ title, cardCount }) => {
  return (
    <View style={styles.summary}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{cardCount}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  summary: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 },
  title: { fontSize: 20, margin: 4, padding: 4, textAlign: "center" },
  count: { fontSize: 12, margin: 4, padding: 4, textAlign: "center" }
});
export default DeckSummary;
