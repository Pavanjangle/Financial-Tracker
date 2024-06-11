import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <ul className="list-group">
            {transactions.map((transaction, index) => (
                <li key={index} className="list-group-item">
                    {transaction.date} - {transaction.category}: ${transaction.amount}
                </li>
            ))}
        </ul>
    );
};

export default TransactionList;
