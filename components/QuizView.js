import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getDeck } from "../utils/api";
import TextButton from "./TextButton";

class QuizView extends React.Component {
  state = {
    showAnswer: false,
    questions: [],
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    endQuiz: false
  };
  constructor(props) {
    super(props);
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this);
    this.incrementCurrentQuestion = this.incrementCurrentQuestion.bind(this);
    this.incrementCorrect = this.incrementCorrect.bind(this);
    this.incrementIncorrect = this.incrementIncorrect.bind(this);
  }
  toggleShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };
  incrementCorrect = e => {
    e.preventDefault();
    this.setState({ correct: this.state.correct + 1 });
    this.incrementCurrentQuestion();
  };
  incrementIncorrect = () => {
    this.setState({ incorrect: this.state.incorrect + 1 });
    this.incrementCurrentQuestion();
  };
  incrementCurrentQuestion = () => {
    const { questions, currentQuestion } = this.state;
    const count = currentQuestion + 1;
    if (count < questions.length) {
      this.setState({ currentQuestion: count });
    } else {
      this.setState({ endQuiz: true });
    }
  };
  async componentDidMount() {
    const { id } = this.props;
    const deck = await getDeck(id);
    this.setState({ questions: deck.questions });
  }
  render() {
    const {
      questions,
      showAnswer,
      currentQuestion,
      correct,
      incorrect,
      endQuiz
    } = this.state;

    return (
      <React.Fragment>
        {endQuiz && (
          <View>
            <Text style={styles.title}>
              Your score is {correct} correct and {incorrect} incorrect
            </Text>
            <TextButton style={{ textAlign: "center", padding: 4, margin: 4 }}>
              End Quiz
            </TextButton>
          </View>
        )}
        {!endQuiz && (
          <View style={styles.quiz}>
            <View style={{ margin: 4, padding: 4 }}>
              <Text>
                {currentQuestion + 1} of {questions.length}
              </Text>
              {!showAnswer && questions.length > 0 && (
                <React.Fragment>
                  <Text style={styles.title}>
                    {questions[currentQuestion].question}
                  </Text>
                  <TextButton onPress={this.toggleShowAnswer}>
                    Answer
                  </TextButton>
                </React.Fragment>
              )}
              {showAnswer && questions.length > 0 && (
                <React.Fragment>
                  <Text style={styles.title}>
                    {questions[currentQuestion].answer}
                  </Text>
                  <TextButton onPress={this.toggleShowAnswer}>
                    Question
                  </TextButton>
                </React.Fragment>
              )}
            </View>
            <View style={{ margin: 4, padding: 4 }}>
              <Button
                color="green"
                title="Correct"
                onPress={this.incrementCorrect}
                style={{ fontColor: "#444" }}
              />
            </View>
            <View style={{ margin: 4, padding: 4 }}>
              <Button
                color="red"
                title="Incorrect"
                onPress={this.incrementIncorrect}
              />
            </View>
          </View>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  quiz: { borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 },
  title: { fontSize: 20, margin: 4, padding: 4, textAlign: "center" }
});
export default QuizView;
