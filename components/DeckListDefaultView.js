import React, { Component } from "react";
import { View, FlatList } from "react-native";
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
  renderItem = ({ item }) => {
    return (
      <DeckSummary key={item.id} title={item.title} cardCount={item.cards} />
    );
  };
  render() {
    console.log("render called");
    const { decks } = this.state;
    console.log(decks);
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default DeckListDefaultView;
