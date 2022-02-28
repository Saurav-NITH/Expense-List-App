import React, { useState } from "react";
import Title from "./component/Heading";
import ExpenseList from "./component/ExpenseList";

import AddExpense from "./component/AddExpense";
const App = () => {
  return (
    <div className="container">
      <Title />
      <AddExpense />
      <ExpenseList />
    </div>
  );
};

export default App;
