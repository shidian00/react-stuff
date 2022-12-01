import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
export default function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((data, index) => {
        return (
          <ExpenseItem
            key={index}
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </ul>
  );
}
