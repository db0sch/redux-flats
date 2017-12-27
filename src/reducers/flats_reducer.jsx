const flatsReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;

