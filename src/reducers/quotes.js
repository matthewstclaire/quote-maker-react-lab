export default (state = [], action) => {
  let idx;

  switch (action.type) {
    case 'ADD_QUOTE':
      idx = state.quotes.findIndex((quote) => quote.id === action.id);
      return {
        ...state,
        quotes: [...state.quotes.slice(0, idx), ...state.quotes.slice(idx + 1)],
      };

    default:
      return state;
  }
};
