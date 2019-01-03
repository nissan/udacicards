import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckListDefaultView from "./components/DeckListDefaultView";
import IndividualDeckView from "./components/IndividualDeckView";
import NewDeckView from "./components/NewDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { setDummyData } from "./utils/_decks";

export default class App extends React.Component {
  render() {
    setDummyData();
    return (
      <View style={styles.container}>
        {/* <NewDeckView />
        <NewQuestionView />
        <QuizView />
        <IndividualDeckView /> */}
        <DeckListDefaultView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
