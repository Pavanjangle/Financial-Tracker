import React from 'react';
import { useSelector } from 'react-redux';

const BudgetColumn = () => {
    const transactions = useSelector(state => state.transactions.transactions);
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpenses;

    return (
        <div>
            <h3>Budget</h3>
            <p>Total Income: ${totalIncome}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Balance: ${balance}</p>
        </div>
    );
};

export default BudgetColumn;
