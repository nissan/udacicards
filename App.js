import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckListDefaultView from "./components/DeckListDefaultView";
import IndividualDeckView from "./components/IndividualDeckView";
import NewDeckView from "./components/NewDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
export default class App extends React.Component {
  render() {
    console.log("Starting render");
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <NewDeckView />
        <NewQuestionView />
        <QuizView />
        <IndividualDeckView />
        <DeckListDefaultView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
