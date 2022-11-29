// import React from 'react'
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-gb", { month: "long" });
  const day = props.date.toLocaleString("en-gb", { month: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
