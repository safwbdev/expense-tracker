let transactions;

const contextReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "ADD_TRANSACTION":
      localStorage.setItem("transactions", JSON.stringify(transactions));
      transactions = [action.payload, ...state];
      return transactions;

    default:
      return state;
  }
};

export default contextReducer;
