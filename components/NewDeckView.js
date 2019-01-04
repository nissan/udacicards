import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { saveDeckTitle } from "../utils/api";
import { connect } from "react-redux";
import { addDeck } from "../actions";

export class NewDeckView extends Component {
  state = {
    title: ""
  };
  constructor(props) {
    super(props);
    this.addDeck = this.addDeck.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }
  addDeck = () => {
    const { title } = this.state;
    if (title !== undefined && title !== "") {
      saveDeckTitle(title);
      const deck = { [title]: { title, questions: [] } };
      this.props.dispatch(addDeck(deck));
      this.setState({ title: "" });
    }
  };
  onTitleChange = title => {
    this.setState(() => ({ title }));
  };
  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView style={styles.deck}>
        <Text style={{ alignSelf: "center" }}>
          What is the title of your new deck?
        </Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={this.onTitleChange}
          value={title}
          style={styles.input}
        />
        <TouchableOpacity style={styles.btnGray} onPress={this.addDeck}>
          <Text style={styles.btnTextBlack}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 50
  },
  btnGray: {
    margin: 4,
    padding: 4,
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 5
  },
  btnTextBlack: {
    padding: 20,
    color: "#000"
  }
});

export default connect()(NewDeckView);
