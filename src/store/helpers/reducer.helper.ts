export const removeShelve = (state, shelveId) => {
  state = state.shelves.filter(shelve => {
    return shelve.id !== shelveId;
  });

  return state;
};

export const updateShelve = (state, newShelve) => {
  const shelvesClone = JSON.parse(JSON.stringify(state.shelves));
  const { id, name } = newShelve;
  const index: number = shelvesClone.findIndex(shelve => shelve.id === id);

  shelvesClone[index].name = name;

  return shelvesClone;
};

export const createBook = (state, shelveId, book) => {
  const shelvesClone = JSON.parse(JSON.stringify(state.shelves));
  shelvesClone.find(shelves => shelves.id === shelveId).books.push(book);

  return shelvesClone;
};

export const removeBook = (state, shelveId, bookId) => {
  const shelvesClone = JSON.parse(JSON.stringify(state.shelves));
  const shelve = shelvesClone.find(shelves => shelves.id === shelveId);

  shelve.books = shelve.books
    .filter(book => {
      return book.id !== bookId;
    });

  return shelvesClone;
};
