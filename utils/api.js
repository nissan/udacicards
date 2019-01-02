export const decks = [
  {
    id: 1,
    title: "udacicards",
    cards: 3
  },
  {
    id: 2,
    title: "new deck",
    cards: 0
  },
  {
    id: 3,
    title: "New deck 2",
    cards: 0
  }
];

export const getDecks = async () => {
  return await decks;
};

export const getDeck = id => {
  return decks.map(deck => deck.id === id);
};

export const saveDeckTitle = title => {
  const newTitle = {
    title,
    count: 0
  };
  decks.push(newTitle);
};
