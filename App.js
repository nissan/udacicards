import { AppLoading } from "expo";
import React from "react";
import AppNavigator from "./components/AppNavigator";
import { setDummyData } from "./utils/_decks";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { receiveDecks } from "./actions";

export default class App extends React.Component {
  state = {
    ready: false
  };
  componentDidMount() {
    setDummyData().then(data => {
      this.setState({ ready: true });
    });
  }
  render() {
    const { ready } = this.state;
    if (!ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={createStore(reducer)}>
        <AppNavigator />
      </Provider>
    );
  }
}
