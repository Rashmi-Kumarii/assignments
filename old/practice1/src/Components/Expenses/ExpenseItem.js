import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import react,{useState} from "react";
function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title);

    const clickHandler=()=>{
      setTitle('Updated');
      console.log(title);
    }
  return (
    <li>
    <div className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </div>
    </li>
  );
}

export default ExpenseItem;
