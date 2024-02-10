import React, { useState, useContext } from "react";
import userContext from "../Context/UserContext";

function Login() {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName,passWord})
    }
    return (
        <div>
            <h2>Log in</h2>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="useName" />
            {"    "}
            <input type="text" value={passWord} onChange={(e) => setPassWord(e.target.value)} placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;