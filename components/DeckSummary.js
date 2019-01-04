import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export const DeckSummary = ({ title, cardCount, onPress }) => {
  return (
    <View style={styles.summary}>
      <TouchableOpacity style={styles.btnBlue} onPress={onPress}>
        <Text style={styles.btnTextWhite}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.count}>
        {cardCount} {Number(cardCount) === 1 ? " card" : " cards"}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  summary: {
    flex: 1,
    padding: 4,
    margin: 4,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  btnBlue: {
    margin: 4,
    padding: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTextWhite: {
    padding: 4,
    color: "white",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    fontSize: 18,
    textAlign: "center",
    color: "white"
  }
});
export default DeckSummary;
