// src/components/TransactionForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../redux/actions/transactionActions';
import { addCategory } from '../redux/actions/categoryActions';

const TransactionForm = () => {
    const [type, setType] = useState('income');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTransaction({ type, amount: parseFloat(amount), category, date }));
        setAmount('');
        setCategory('');
        setDate('');
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        const newCategory = prompt('Enter new category');
        if (newCategory) {
            dispatch(addCategory(newCategory));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="type">Type</label>
                <select className="form-control" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
                <button className="btn btn-secondary" onClick={handleAddCategory}>Add Category</button>
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
