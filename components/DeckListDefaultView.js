import React, { Component } from "react";
import { View } from "react-native";
import { getAllDecks } from "../utils/api";
import DeckSummary from "./DeckSummary";
export class DeckListDefaultView extends Component {
  state = {
    decks: []
  };
  async componentDidMount() {
    console.log("componentDidMount called");
    const decks = await getAllDecks();
    this.setState({ decks });
  }
  render() {
    console.log("render called");
    const { decks } = this.state;
    console.log(decks);
    return (
      <View>
        {Object.keys(decks).map(key => (
          <DeckSummary
            key={decks[key].id}
            title={decks[key].title}
            cardCount={decks[key].cards}
          />
        ))}
      </View>
    );
  }
}

export default DeckListDefaultView;
