import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NewDeckView = () => {
  return (
    <View style={styles.deck}>
      <Text>This is the New Deck View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deck: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }
});

export default NewDeckView;
