import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function (props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expense.filter((expense) => {
    if (filteredYear)
      return expense.date.getFullYear().toString() === filteredYear;
    else return true;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />

      {/* This also work  */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses found !!</p>} */}
    </Card>
  );
}
