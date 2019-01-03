import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { getDecks } from "../utils/api";
import DeckSummary from "./DeckSummary";
export class DeckListDefaultView extends Component {
  state = {
    decks: {}
  };
  async componentDidMount() {
    const decks = await getDecks();
    this.setState({ decks });
  }
  renderItem = ({ item }) => {
    console.log("item", item);
    return (
      <DeckSummary
        key={item.title}
        title={item.title}
        cardCount={item.cardCount}
      />
    );
  };
  render() {
    const { decks } = this.state;
    return (
      <View
        style={{ borderStyle: "solid", borderWidth: 1, padding: 4, margin: 4 }}
      >
        <FlatList
          data={Object.keys(decks).map(key => ({
            title: decks[key].title,
            cardCount: decks[key].questions.length
          }))}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default DeckListDefaultView;
