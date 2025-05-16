import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                setToken(data.token);
                localStorage.setItem('token', data.token);
                return { success: true };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            return { success: false, error: 'Login failed' };
        }
    };

    const signup = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                setToken(data.token);
                localStorage.setItem('token', data.token);
                return { success: true };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            return { success: false, error: 'Signup failed' };
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
} 