import React, { useState } from "react";
import "./ExpenseForm.css";

//title inpput
function ExpenseForm(props) {
  const [inputTitle, setEnteredTitle] = useState("");
  const [inputAmount, setAmount] = useState("");
  const [inputDate, setDate] = useState("");
  const [hideExpense, setShowExpense] = useState(false);

  function ChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  // amount input
  function enterAmount(event) {
    setAmount(event.target.value);
    console.log(setAmount);
  }

  //date input
  function enterDate(event) {
    setDate(event.target.value);
    console.log(setDate);
  }

  //function for form submission.
  function subitForm(event) {
    event.preventDefault();

    const initialObjects = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    console.log(initialObjects);

    props.resultFromExpenseForm(initialObjects);
    setEnteredTitle("");
    setAmount("");
    setDate("");
  }
  // props.resultFromExpenseForm(initialObjects);
  // setEnteredTitle("");
  // setAmount("");
  // setDate("");

  return (
    <>
      {hideExpense ? (
        <form onSubmit={subitForm}>
          <div className="new-expense_controls">
            <div className="new-expense__control input">
              <label>Title</label>
              <input value={inputTitle} type="text" onChange={ChangeHandler} />
            </div>
            <div className="new-expense__control input">
              <label>amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={inputAmount}
                onChange={enterAmount}
              />
            </div>
            <div className="new-expense__control input">
              <label>Date</label>
              <input
                value={inputDate}
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={enterDate}
              />
            </div>
          </div>
          <div className="new-expense__actions ">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setShowExpense(true)}>addNewExpense</button>
      )}
      <button onClick={() => setShowExpense(false)}>discard</button>
    </>
  );
}

export default ExpenseForm;
