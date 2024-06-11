// src/api/auth.js
export const authenticateUser = async (id, password) => {
    const users = [{ id: 'ABC', password: '123456' }];
    const user = users.find(user => user.id === id && user.password === password);
    return user ? { success: true } : { success: false };
};
