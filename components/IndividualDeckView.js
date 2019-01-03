import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const IndividualDeckView = () => {
  return (
    <View style={styles.deck}>
      <Text>This is the Individual Deck View</Text>
      <Button title="Add Card" />
      <Button title="Start Quiz" />
    </View>
  );
};
const styles = StyleSheet.create({
  deck: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }
});
export default IndividualDeckView;
