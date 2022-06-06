import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setenterTitle] = useState("");
  const [enterAmount, setenterAmount] = useState("");

  const [enterDate, setenterDate] = useState("");
  // const [userInput,setuserInput]=useState(
  //     {
  //         entertitle:'',
  //         enterAmount:'',
  //         enterdate:'',
  //     });

  const titlechangeHandler = (event) => {
    console.log("title entered");
    setenterTitle(event.target.value);
    // setuserInput((prevState)=>{
    //   return{
    //     ...prevState,
    //     entertitle:event.target.value
    //   }
    // })
  };
  const amountchangeHandler = (event) => {
    console.log("title entered");
    setenterAmount(event.target.value);
    // setuserInput((prevState)=>{
    //   return{
    //     ...prevState,
    //     enterAmount:event.target.value
    //   }
    // });
  };
  const dateechangeHandler = (event) => {
    setenterDate(event.target.value);

    // setuserInput((prevState)=>{
    //   return{
    //     ...prevState,
    //     enterdate:event.target.value
    //   }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Js behavior
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    //for cleraing the form inputs ,bind the state with the input using value attribte
    setenterTitle("");
    setenterAmount("");
     setenterDate("");
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" 
          value={enterTitle} 
          onChange={titlechangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount} 
            min="0.01"
            step="0.01"
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"  
            value={enterDate} 
            min="2022-01-01"
            max="2024-01-01"
            onChange={dateechangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
