// src/redux/actions/authActions.js
import { authenticateUser } from '../../api/auth';

export const login = (id, password) => async (dispatch) => {
    try {
        const res = await authenticateUser(id, password);
        if (res.success) {
            dispatch({ type: 'LOGIN_SUCCESS' });
        } else {
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error logging in', error);
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};
