import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckListDefaultView from "./components/DeckListDefaultView";
import IndividualDeckView from "./components/IndividualDeckView";
import NewDeckView from "./components/NewDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
import { setDummyData } from "./utils/_decks";

export default class App extends React.Component {
  render() {
    setDummyData();
    return (
      <View style={[styles.container, { paddingTop: 25 }]}>
        {/* <NewDeckView />
        <NewQuestionView />*/}
        {/* <QuizView questions={[{question: "Is this cool", answer: "Yes"}, ]} answer="Yes" /> */}
        <IndividualDeckView
          id="React"
          onAddCardPress={() => {
            alert("Add Card Pressed");
          }}
          onStartQuizPress={() => {
            alert("Start Quiz Pressed");
          }}
        />
        <DeckListDefaultView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
