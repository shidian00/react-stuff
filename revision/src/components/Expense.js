import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function (props) {
  return (
    <div>
      {props.expense.map((data, index) => {
        return (
          <ExpenseItem
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </div>
  );
}
