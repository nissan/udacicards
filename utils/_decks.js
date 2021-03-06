import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "udacicards:decks";

export const dummyData = Object.assign({
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
});

export const setDummyData = async () => {
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
  return dummyData;
};
