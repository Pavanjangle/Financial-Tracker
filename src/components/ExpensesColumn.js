import React from 'react';
import { useSelector } from 'react-redux';
import TransactionList from './TransactionList';

const ExpensesColumn = () => {
    const transactions = useSelector(state => state.transactions.transactions);

    return (
        <div>
            <h3>Expenses</h3>
            <TransactionList transactions={transactions.filter(t => t.type === 'expense')} />
        </div>
    );
};

export default ExpensesColumn;
