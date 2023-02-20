import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const ExpenseItemList = (props) => {
  const { expenses } = props;
  const [filterValue, setFilterValue] = useState("2023");

  const filterdExpenseList = expenses.filter((expense) => {
    const year = expense.date.getFullYear().toString();
    return year === filterValue;
  });

  const filterChanged = (data) => {
    setFilterValue(data);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        filterValue={filterValue}
        onFilterChange={filterChanged}
      />
      <ExpensesChart filterdExpenseList={filterdExpenseList}/>
      {filterdExpenseList && filterdExpenseList.length > 0 ? (
        filterdExpenseList.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} filterChanged={filterChanged} />;
        })
      ) : (
        <h2 className="expenses-list__fallback">Found No Expenses.</h2>
      )}
    </div>
  );
};

export default ExpenseItemList;
