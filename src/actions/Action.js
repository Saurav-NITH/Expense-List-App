export const addExpense = (entry) => {
  return {
    type: "ADD_EXPENSE",
    entry: entry,
  };
};
export const deleteExpense = (id) => {
  return {
    type: "DELETE_EXPENSE",
    id: id,
  };
};

// export const editExpense = (id) => {
//   return {
//     type: "EDIT_EXPENSE",
//     id: id,
//   };
// };
