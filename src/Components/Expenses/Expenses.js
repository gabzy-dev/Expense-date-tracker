import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Expenseslist from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  function newValue(selectedYear) {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredExpenses = props.item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>no item selected</p>;

  // if (filteredExpenses.le > 0) {
  //   expensesContent = filteredExpenses.map((expenses) => (
  //     <ExpenseItem
  //       key={expenses.id}
  //       title={expenses.title}
  //       amount={expenses.amount}
  //       date={expenses.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} valueFunction={newValue} />
        <ExpensesChart expenses={filteredExpenses} />
        <Expenseslist item={filteredExpenses} />

        {/* <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
