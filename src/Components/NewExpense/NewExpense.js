import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function initialObjectHandler(values) {
    const initialObjects = {
      // title: inputTitle,
      // amount: inputAmount,
      // date: new Date(inputDate),
      ...values,
      id: Math.random().toString(),
    };
    props.onExpenseFormHandler(initialObjects);
  }

  return (
    <div className="new-expense">
      <ExpenseForm resultFromExpenseForm={initialObjectHandler} />
    </div>
  );
}

export default NewExpense;
