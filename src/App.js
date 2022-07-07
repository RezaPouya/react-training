import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";

const App = () => {
  const expenses = [
    { id: "01", title: "car", amount: "25.4$", date: new Date() },
    { id: "02", title: "car", amount: "25.4$", date: new Date() },
  ];
  return (
    <div>
      <h2>Hello World!</h2>
      <Card>
        <ExpenseItem id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} ></ExpenseItem>
        <ExpenseItem id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} ></ExpenseItem>
      </Card>
    </div>
  );
};

export default App;
