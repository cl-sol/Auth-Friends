import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
    const [credentials, setCredentials] = useState({
        id: "",
        username: "",
        password: "",
    });
    
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        return axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            setIsLoading(false);
            history.push("/friends");
        })
        .catch(err => console.log({err: err.message}));
    }

    function handleChanges(e) {
        e.persist();
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username
            </label>
            <input
                type="text"
                name="username"
                value={credentials.name}
                onChange={handleChanges}
            />
            <label htmlFor="password">
                Password
            </label>
            <input
                type="text"
                name="password"
                value={credentials.password}
                onChange={handleChanges}
            />
            {isLoading ? "Loading..." : <button className="login-button">Log In</button>}
        </form>
    )
}

export default Login;