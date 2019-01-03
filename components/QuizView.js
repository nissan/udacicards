import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class QuizView extends React.Component {
  state = {
    showAnswer: false
  };
  constructor(props) {
    super(props);
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this);
  }
  toggleShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };
  render() {
    const { questions, answers } = this.props;
    const { showAnswer } = this.state;

    return (
      <View style={styles.quiz}>
        {!showAnswer && (
          <React.Fragment>
            <Text>{question}</Text>
            <Button title="Answer" onPress={this.toggleShowAnswer} />
          </React.Fragment>
        )}
        {showAnswer && (
          <React.Fragment>
            <Text>{answer}</Text>
            <Button title="Question" onPress={this.toggleShowAnswer} />
          </React.Fragment>
        )}
        <Text>This is the Quiz View</Text>
        <Button title="Correct" />
        <Button title="Incorrect" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quiz: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }
});
export default QuizView;
