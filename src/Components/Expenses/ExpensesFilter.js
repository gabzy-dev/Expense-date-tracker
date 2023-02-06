import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const [firstYear, enteredValue] = useState(2022);
  // const [secondYear, secondValue] = useState(2021);
  // const [thirdYear, thirdValue] = useState(2020);
  // const [fourthYear, fourthValue] = useState(2021);

  // function firstYearSelected(event) {
  //   enteredValue(event.target.value);
  //   console.log(enteredValue);
  // }

  // function secondYearSelected(event) {
  //   secondValue(event.target.value);
  //   console.log(secondValue);
  // }

  // function thirdYearSelected(event) {
  //   thirdValue(event.target.value);
  //   console.log(thirdValue);
  // }

  // function fourthYearSelected(event) {
  //   fourthValue(event.target.value);
  //   console.log(fourthValue);
  // }

  function dropDownMenu(event) {
    props.valueFunction(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownMenu}>
          <option value1="2022">2022</option>
          <option value2="2021">2021</option>
          <option value3="2020">2020</option>
          <option value4="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
