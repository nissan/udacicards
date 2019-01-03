import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
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
    return (
      <DeckSummary
        key={item.title}
        title={item.title}
        cardCount={item.cardCount}
        onPress={() => alert(`${item.title} pressed`)}
      />
    );
  };
  render() {
    const { decks } = this.state;
    return (
      <View style={styles.list}>
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
const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});
export default DeckListDefaultView;
