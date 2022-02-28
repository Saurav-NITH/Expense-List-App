import { useSelector } from "react-redux";
import ExpenseItem from "./Expense";

const ExpenseList = () => {
  const expenseList = useSelector((state) => state.expense);
  // console.log(expenseList);
  return (
    <div className="mt-3">
      <h4 className="display-6 text-center">Expense Entries</h4>
      <hr />
      <div className="list-group">
        {expenseList.map((el) => (
          <ExpenseItem entry={el} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
