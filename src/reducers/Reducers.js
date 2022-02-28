import { combineReducers } from "redux";

const initState = [];
export const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        { ...action.entry, id: Math.floor(Math.random() * 99) },
      ];
    case "DELETE_EXPENSE":
      return state.filter((item) => item.id !== action.id);
    // case "EDIT_EXPENSE":
    //   return state.reduce((total, item) => (total = total + item.amount), 0);

    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  expense: expenseReducer,
});
