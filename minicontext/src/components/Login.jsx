import { useState, useContext } from 'react'
import userContext from '../context/userContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
    return (
        <>
            <div className="login-container">
                <h2>Login to dashboard</h2>
                <form>
                    <div className="input-container">
                    <label htmlFor="username">Username </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="Username" placeholder="Enter username" />
                    </div>
                    <div className="input-container">
                    <label htmlFor="password">Password </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="password" name="password" placeholder="Enter password" />
                    </div>
                    <button onClick={handleSubmit} className="submit-btn" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}


export default Login;