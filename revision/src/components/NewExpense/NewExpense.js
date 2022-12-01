import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function (props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const [formVisibility, setFormVisibility] = useState(true);
  const startEditingHandler = () => {
    setFormVisibility(false);
  };

  const stopEditingHandler = () => {
    setFormVisibility(true);
  };
  return (
    <div className="new-expense">
      {!formVisibility ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditingHandler={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
}
