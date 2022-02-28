import react from "react";
import { useState } from "react";
import { addExpense } from "../actions/Action";
import { useDispatch } from "react-redux";
const AddExpense = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({ item, amount }));
    setItem("");
    setAmount(0);
  };

  return (
    <div className="border border-info rounded p-4 mt-3">
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Expense</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="description">Amount</label>
          <input
            type="text"
            id="Amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-3">Add the Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
