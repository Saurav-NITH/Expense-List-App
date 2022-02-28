import { useDispatch } from "react-redux";
import { deleteExpense } from "../actions/Action";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();
  // const handleEdit = () => {
  //   dispatch(editExpense(props.entry.id));
  // };
  const handleDelete = () => {
    dispatch(deleteExpense(props.entry.id));
  };
  return (
    <>
      <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
        <div className="">{props.entry.item}</div>
        <div className="">{props.entry.amount} INR</div>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        {/* <button className="btn-close" onClick={handleEdit}>
          Edit
        </button> */}
      </div>
    </>
  );
};

export default ExpenseItem;
