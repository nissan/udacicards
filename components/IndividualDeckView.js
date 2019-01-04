import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { getDeck } from "../utils/api";

export class IndividualDeckView extends Component {
  state = {
    title: "",
    cardCount: 0
  };
  constructor(props) {
    super(props);
    this.startQuiz = this.startQuiz.bind(this);
    this.addCard = this.addCard.bind(this);
  }
  startQuiz = () => {
    this.props.onStartQuizPress();
  };
  addCard = () => {
    this.props.onAddCardPress();
  };
  async componentDidMount() {
    const { id } = this.props;
    const deck = await getDeck(id);
    this.setState({
      title: deck.title,
      cardCount: deck.questions.length
    });
  }
  render() {
    const { title, cardCount } = this.state;
    return (
      <View style={styles.deck}>
        <View style={{ margin: 4, padding: 4 }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ margin: 4, padding: 4 }}>
          <Text style={styles.count}>
            {cardCount} {Number(cardCount) === 1 ? " card" : " cards"}
          </Text>
        </View>
        <View style={{ margin: 4, padding: 4 }}>
          <TouchableOpacity style={styles.btnBlack} onPress={this.addCard}>
            <Text style={styles.btnTextWhite}>Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 4, padding: 4 }}>
          <TouchableOpacity style={styles.btnGray} onPress={this.startQuiz}>
            <Text style={styles.btnTextBlack}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  deck: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 4,
    margin: 4
  },
  title: { fontSize: 20, margin: 4, padding: 4, textAlign: "center" },
  count: { fontSize: 12, margin: 4, padding: 4, textAlign: "center" },
  btnGray: {
    margin: 4,
    padding: 4,
    alignItems: "center",
    backgroundColor: "gray"
  },
  btnBlack: {
    margin: 4,
    padding: 4,
    alignItems: "center",
    backgroundColor: "#000"
  },
  btnTextBlack: {
    padding: 20,
    color: "#000"
  },
  btnTextWhite: {
    padding: 20,
    color: "white"
  }
});

export default IndividualDeckView;
