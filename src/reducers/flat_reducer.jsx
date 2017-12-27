const flatReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return null;
  }

  switch (action.type) {
    case 'SELECT_FLAT':
      return action.payload;
    default:
      return state;
  }
};

export default flatReducer;

