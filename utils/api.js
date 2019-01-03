import { AsyncStorage } from "react-native";
import { DECKS_STORAGE_KEY } from "./_decks";

export const getDecks = async () => {
  const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return JSON.parse(decks);
};

export const getDeck = id => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data[id];
  });
};

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: { title, questions: [] }
    })
  );
};

export const addCardToDeck = (title, card) => {
  const decks = AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
  const deck = decks[title];
  deck.questions.push(card);
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({ [title]: decks })
  );
};
