import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const result = await login(email, password);
        if (!result.success) {
            setError(result.error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login; 