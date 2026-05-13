import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextBox from "../../common/textbox/TextBox";
import Button from "../../common/button/Button";


function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3001/login", { 
                email, 
                password
            });
            const token = response.data.data.token;
            const userEmail = response.data.data.email;
            localStorage.setItem("token", token);
            localStorage.setItem("email", userEmail);
            navigate("/main");
        } catch (error) {
            alert("Login failed: " + error);
        }
    };
    return (
        <div>
            <TextBox 
                id="email" 
                label="Email" 
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextBox 
                id="password" 
                label="Password" 
                isPassword={true}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} text="Login" />
        </div>
    );
}

export default Login;