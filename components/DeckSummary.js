import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const DeckSummary = ({ title, cardCount, onPress }) => {
  return (
    <View style={styles.summary}>
      <Button style={styles.title} title={title} onPress={onPress} />
      <Text style={styles.count}>
        {cardCount} {Number(cardCount) === 1 ? " card" : " cards"}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  summary: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 },
  title: { fontSize: 20, margin: 4, padding: 4, textAlign: "center" },
  count: { fontSize: 12, margin: 4, padding: 4, textAlign: "center" }
});
export default DeckSummary;
