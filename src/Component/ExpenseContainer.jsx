import React, { useState, useEffect } from 'react'
import Form from './form.jsx'
import { v4 as uuid } from 'uuid'
import History from './History.jsx';
import BalanceContainer from './BalanceContainer.jsx';
import CurrentItem from './CurrentItem.jsx';

function ExpenseContainer() {
  const [expense, setExpense] = useState([]);

  // Add expense (and update state)
  async function addExpense(title, amount) { 
    try {
      const response = await fetch("http://localhost:5555/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, amount })
      });

      const data = await response.json();
      console.log("Expense added:", data);

      // Refresh expense list
      getExpense();
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  }

  // Fetch all expenses
async function getExpense() {
  try {
    const response = await fetch('http://localhost:5555/get');
    const data = await response.json();

    // ✅ backend sends { message, expenses: [...] }
    setExpense(data.expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
  }
}


  // Delete expense
  async function deleteExpense(id) {
    try {
      await fetch(`http://localhost:5555/delete/${id}`, {
        method: "DELETE"
      });
      getExpense();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  }

  // Load expenses on mount
  useEffect(() => {
    getExpense();
  }, []);

  return (
    <div className="expense-container">
      <BalanceContainer expense={expense} />
      <Form addExpense={addExpense} />
      <History expense={expense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default ExpenseContainer;
