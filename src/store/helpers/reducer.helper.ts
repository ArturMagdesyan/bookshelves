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
