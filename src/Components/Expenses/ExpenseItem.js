import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [newTitle, setTitle] = useState(props.title);

  // function manageClick() {
  //   setTitle("updated");
  //   console.log(newTitle);
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price ">${props.amount}</div>
        </div>
        {/* <button>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
