import ExpenseItem from "./components/ExpenseItem";

function app() {
  const expense = [
    { id: 1, title: "test1", amount: 100, date: new Date(2022, 2, 2) },
    { id: 2, title: "test2", amount: 200, date: new Date(2022, 2, 3) },
    { id: 3, title: "test3", amount: 300, date: new Date(2022, 2, 5) },
  ];
  return (
    <div>
      <h1>Hello World testing</h1>
      {expense.map((data, index) => {
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

export default app;
