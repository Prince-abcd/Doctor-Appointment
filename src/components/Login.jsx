import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notifyLoginSuccess } from './Message.jsx';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            notifyLoginSuccess();
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '400px' }}>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" >Login</button>
                </form>
            </div>
        </div>

    )

};

export default Login;
