import React, { useState, useEffect } from "react";
import "./App.css"; // Importing the CSS file for styles

const Card = ({ children }) => <div className="card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>{children}</div>;

const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

const CardTitle = ({ children }) => <h2 className="card-title">{children}</h2>;

const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

const Edit2 = ({ size }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 17.25V21h3.75l11.25-11.25-3.75-3.75L3 17.25zM20.71 7.29a1 1 0 0 0 0-1.42l-2.58-2.58a1 1 0 0 0-1.42 0l-1.42 1.42 3.75 3.75 1.42-1.42z" />
  </svg>
);

const Trash2 = ({ size }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 6h18M9 6v12m3-12v12m6-12v12M4 6h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
  </svg>
);

const BudgetTracker = () => {
  const [budget, setBudget] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ title: "", amount: "" });
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    const storedBudget = localStorage.getItem("totalBudget");
    const storedExpenses = localStorage.getItem("expenses");
    if (storedBudget) {
      setTotalBudget(JSON.parse(storedBudget));
    }
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("totalBudget", JSON.stringify(totalBudget));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [totalBudget, expenses]);

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    const parsedBudget = parseFloat(budget);
    if (!isNaN(parsedBudget)) {
      setTotalBudget(parsedBudget);
      setBudget("");
    }
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (newExpense.title && newExpense.amount) {
      const parsedAmount = parseFloat(newExpense.amount);
      if (!isNaN(parsedAmount)) {
        setExpenses([
          ...expenses,
          { ...newExpense, amount: parsedAmount, id: Date.now() },
        ]);
        setNewExpense({ title: "", amount: "" });
      }
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (expense) => {
    setNewExpense({ title: expense.title, amount: expense.amount.toString() });
    deleteExpense(expense.id);
  };

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );
  const balance = totalBudget - totalExpenses;

  return (
    <div className="container">
      <h1 className="header">Budget Tracker</h1>

      <div className="grid">
        {/* Budget Input Card */}
        <Card>
          <CardHeader>
            <CardTitle>Set Your Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBudgetSubmit} className="form">
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter Total Budget"
                className="input"
              />
              <button type="submit" className="button">
                Set Budget
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Expense Input Card */}
        <Card>
          <CardHeader>
            <CardTitle>Add Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleExpenseSubmit} className="form">
              <input
                type="text"
                value={newExpense.title}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, title: e.target.value })
                }
                placeholder="Expense Title"
                className="input"
              />
              <input
                type="number"
                value={newExpense.amount}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, amount: e.target.value })
                }
                placeholder="Amount"
                className="input"
              />
              <button type="submit" className="button">
                Add Expense
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Summary Card */}
      <div className="summary-card">
        <div className="summary-grid">
          <div>
            <h3 className="summary-title">Total Budget</h3>
            <p className="summary-value">₹ {totalBudget}</p>
          </div>
          <div>
            <h3 className="summary-title">Total Expenses</h3>
            <p className="summary-value">₹ {totalExpenses}</p>
          </div>
          <div>
            <h3 className="summary-title">Remaining Balance</h3>
            <p className="summary-value">₹ {balance}</p>
          </div>
        </div>
      </div>

      {/* Expense List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="expense-list">
            {expenses.map((expense) => (
              <div key={expense.id} className="expense-item">
                <div className="expense-details">
                  <div className="expense-indicator"></div>
                  <div>
                    <h3 className="expense-title">{expense.title}</h3>
                    <p className="expense-amount">₹ {expense.amount}</p>
                  </div>
                </div>
                <div className="expense-actions">
                  <button
                    onClick={() => editExpense(expense)}
                    className="action-button"
                  >
                    <Edit2 size={20} />
                  </button>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="action-button"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetTracker;
