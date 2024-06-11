import React from 'react';
import BudgetColumn from './BudgetColumn';
import ExpensesColumn from './ExpensesColumn';
import TransactionForm from './TransactionForm';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <BudgetColumn />
                </div>
                <div className="col-md-6">
                    <ExpensesColumn />
                </div>
            </div>
            <TransactionForm />
        </div>
    );
};

export default Dashboard;
