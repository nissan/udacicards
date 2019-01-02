export const getAllDecks = async () => {
  return await [
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
};

export const getDeck = id => {
  return getAllDecks().map(deck => deck.id === id);
};
