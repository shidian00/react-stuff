import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY = [
  { id: 1, title: "test1", amount: 100, date: new Date(2022, 2, 2) },
  { id: 2, title: "test2", amount: 200, date: new Date(2022, 4, 3) },
  { id: 3, title: "test3", amount: 300, date: new Date(2020, 2, 5) },
  { id: 4, title: "test4", amount: 300, date: new Date(2020, 2, 5) },
  { id: 5, title: "test5", amount: 300, date: new Date(2019, 2, 5) },
];
function app() {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expenses} />
    </div>
  );
}

export default app;
