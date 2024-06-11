import { combineReducers } from 'redux';
import authReducer from './authReducer';
import transactionReducer from './transactionReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    transactions: transactionReducer,
    categories: categoryReducer,
});

export default rootReducer;
