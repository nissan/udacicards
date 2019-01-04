import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
          <Button
            style={styles.btnAddCard}
            title="Add Card"
            onPress={this.addCard}
            color="black"
          />
        </View>
        <View style={{ margin: 4, padding: 4 }}>
          <Button
            style={styles.btnStartQuiz}
            title="Start Quiz"
            onPress={this.startQuiz}
            color="blue"
          />
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
  btnAddCard: {
    margin: 4,
    padding: 4,
    textAlign: "center"
  },
  btnStartQuiz: {
    margin: 4,
    padding: 4,
    textAlign: "center"
  }
});

export default IndividualDeckView;
