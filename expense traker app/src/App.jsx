import React, { useState, useEffect } from "react";
import "./App.css"; // Importing the CSS file for styles

const Card = ({ children }) => (
  <div className="card" style={{ border: '1px solid #d1d1d1', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', backgroundColor: '#f0f8ff' }}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="card-header" style={{ borderBottom: '2px solid #4a90e2', marginBottom: '10px' }}>
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h2 className="card-title" style={{ fontSize: '1.5rem', color: '#4a90e2' }}>{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

const EditIcon = ({ size }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 17.25V21h3.75l11.25-11.25-3.75-3.75L3 17.25zM20.71 7.29a1 1 0 0 0 0-1.42l-2.58-2.58a1 1 0 0 0-1.42 0l-1.42 1.42 3.75 3.75 1.42-1.42z" />
  </svg>
);

const TrashIcon = ({ size }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 6h18M9 6v12m3-12v12m6-12v12M4 6h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
  </svg>
);

const BudgetTracker = () => {
  const [budgetAmount, setBudgetAmount] = useState("");
  const [expenseList, setExpenseList] = useState([]);
  const [currentExpense, setCurrentExpense] = useState({ title: "", amount: "" });
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    const storedBudget = localStorage.getItem("totalBudget");
    const storedExpenses = localStorage.getItem("expenses");
    if (storedBudget) {
      setTotalBudget(JSON.parse(storedBudget));
    }
    if (storedExpenses) {
      setExpenseList(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("totalBudget", JSON.stringify(totalBudget));
    localStorage.setItem("expenses", JSON.stringify(expenseList));
  }, [totalBudget, expenseList]);

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    const parsedBudget = parseFloat(budgetAmount);
    if (!isNaN(parsedBudget) && parsedBudget >= 0) {
      setTotalBudget(parsedBudget);
      setBudgetAmount("");
    }
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (currentExpense.title && currentExpense.amount) {
      const parsedAmount = parseFloat(currentExpense.amount);
      if (!isNaN(parsedAmount) && parsedAmount > 0) {
        setExpenseList([
          ...expenseList,
          { ...currentExpense, amount: parsedAmount, id: Date.now() },
        ]);
        setCurrentExpense({ title: "", amount: "" });
      }
    }
  };

  const deleteExpense = (id) => {
    setExpenseList(expenseList.filter((expense) => expense.id !== id));
  };

  const editExpense = (expense) => {
    setCurrentExpense({ title: expense.title, amount: expense.amount.toString() });
    deleteExpense(expense.id);
  };

  const totalExpenses = expenseList.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );
  const balance = totalBudget - totalExpenses;

  const resetBudget = () => {
    setTotalBudget(0);
    setExpenseList([]);
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#e6f7ff' }}>
      <h1 className="header" style={{ textAlign: 'center', color: '#333' }}>Budget Tracker</h1>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Budget Input Card */}
        <Card>
          <CardHeader>
            <CardTitle>Set Your Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBudgetSubmit} className="form">
              <input
                type="number"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                placeholder="Enter Total Budget"
                className="input"
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #4a90e2', width: '100%' }}
                min="0"
              />
              <button type="submit" className="button" style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#4a90e2', color: '#fff', border: 'none', cursor: 'pointer' }}>
                Set Budget
              </button>
              {totalBudget > 0 && (
                <button type="button" onClick={resetBudget} className="button" style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  Reset Budget
                </button>
              )}
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
                value={currentExpense.title}
                onChange={(e) =>
                  setCurrentExpense({ ...currentExpense, title: e.target.value })
                }
                placeholder="Expense Title"
                className="input"
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #4a90e2', width: '100%' }}
                required
              />
              <input
                type="number"
                value={currentExpense.amount}
                onChange={(e) =>
                  setCurrentExpense({ ...currentExpense, amount: e.target.value })
                }
                placeholder="Amount"
                className="input"
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #4a90e2', width: '100%', marginTop: '10px' }}
                min="0.01"
                step="0.01"
                required
              />
              <button type="submit" className="button" style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>
                Add Expense
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Summary Card */}
      <div className="summary-card" style={{ marginTop: '20px', padding: '20px', borderRadius: '8px', backgroundColor: '#f8f9fa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="summary-grid" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3 className="summary-title">Total Budget</h3>
            <p className="summary-value" style={{ fontSize: '1.2rem', color: '#333' }}>₹ {totalBudget}</p>
          </div>
          <div>
            <h3 className="summary-title">Total Expenses</h3>
            <p className="summary-value" style={{ fontSize: '1.2rem', color: '#333' }}>₹ {totalExpenses}</p>
          </div>
          <div>
            <h3 className="summary-title">Remaining Balance</h3>
            <p className="summary-value" style={{ fontSize: '1.2rem', color: '#333' }}>₹ {balance}</p>
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
            {expenseList.map((expense) => (
              <div key={expense.id} className="expense-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #d1d1d1' }}>
                <div className="expense-details" style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="expense-indicator" style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4a90e2', marginRight: '10px' }}></div>
                  <div>
                    <h3 className="expense-title" style={{ margin: '0', fontSize: '1rem' }}>{expense.title}</h3>
                    <p className="expense-amount" style={{ margin: '0', color: '#666' }}>₹ {expense.amount}</p>
                  </div>
                </div>
                <div className="expense-actions">
                  <button
                    onClick={() => editExpense(expense)}
                    className="action-button"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <EditIcon size={20} />
                  </button>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="action-button"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <TrashIcon size={20} />
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
