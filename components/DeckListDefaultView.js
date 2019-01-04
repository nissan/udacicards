import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { getDecks } from "../utils/api";
import DeckSummary from "./DeckSummary";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";
export class DeckListDefaultView extends Component {
  async componentDidMount() {
    const decks = await getDecks();
    this.props.dispatch(receiveDecks(decks));
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
    const { decks } = this.props;
    if (decks !== undefined) {
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
      return <AppLoading />;
    }
  }
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
    paddingTop: 25
  }
});

const mapStateToProps = decks => {
  return {
    decks
  };
};
export default connect(mapStateToProps)(DeckListDefaultView);
