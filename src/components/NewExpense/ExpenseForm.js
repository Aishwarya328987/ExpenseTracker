import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onSaveExpenseData, toggleIsFormVisibleHandler } = props;

  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);


  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    if(e.target.value.trim().length > 0){
      setIsValidTitle(true);
    }
    setNewExpense((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    if(e.target.value.trim().length > 0){
      setIsValidAmount(true);
    }
    setNewExpense((prevState) => {
      return {
        ...prevState,
        amount: +e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    if(e.target.value.trim().length > 0){
      setIsValidDate(true);
    }
    setNewExpense((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(newExpense.title === ''){
      setIsValidTitle(false);
      return;
    } else if(newExpense.amount === ''){
      setIsValidAmount(false);
      return;
    } else if(newExpense.date === ''){
      setIsValidDate(false);
      return;
    }
    onSaveExpenseData(newExpense);
    setNewExpense((prevState) => {
      return {
        ...prevState,
        title: "",
        amount: "",
        date: "",
      };
    });
  };

  const cancelHandler = () => {
    toggleIsFormVisibleHandler();
  }

  return (
    <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
            style={{borderColor: isValidTitle ? '' : 'red'}}
              type="text"
              value={newExpense.title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
            style={{borderColor: isValidAmount ? '' : 'red'}}
              type="number"
              value={newExpense.amount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
            style={{borderColor: isValidDate ? '' : 'red'}}
              type="date"
              value={newExpense.date}
              min="2018-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
  );
};

export default ExpenseForm;
