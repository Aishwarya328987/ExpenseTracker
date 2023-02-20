import { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const {onAddingExpense} = props;

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            date: new Date(data.date),
            id: Math.random().toString()
        }
        onAddingExpense(expenseData);
        setIsFormVisible(false);
    }

    const toggleIsFormVisibleHandler = () => {
        if(isFormVisible){
            setIsFormVisible(false);
        } else {
            setIsFormVisible(true);
        }
      };

    return (
        <div className='new-expense'>
            {!isFormVisible && <button onClick={toggleIsFormVisibleHandler}>Add Expense</button>}
            {isFormVisible && <ExpenseForm toggleIsFormVisibleHandler={toggleIsFormVisibleHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
}

export default NewExpense;