import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlesubmit = async (e) => {


        e.preventDefault();

        const data = { username, password };

        const res = await fetch("http://localhost:5000/login", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.message === "Login Successfull") {
            alert("Login Successful");

            localStorage.setItem("user", JSON.stringify(result.user));

            navigate("/");
        } else {
            alert(result.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-100 bg-gray-100">
            <div className="flex flex-col justify-center 
            rounded-xl shadow-xl bg-white w-11/12 sm:w-96 p-6 ">

                <form onSubmit={handlesubmit} className="flex flex-col gap-3 w-full">
                    
                    <h1 className="text-center text-2xl font-semibold mb-2">Login</h1>

                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-200 w-full p-2 rounded-xl"
                        type="text"
                        placeholder="Enter your Username"
                        required
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-200 w-full p-2 rounded-xl"
                        type="password"
                        placeholder="Enter your Password"
                        required
                    />

                    <button 
                        type="submit"
                        className="bg-blue-600 text-white w-full p-2 rounded-xl hover:bg-blue-700"
                          onClick={() => alert("This is just a Frontend Demo version")}

                    >
                        Login
                    </button>

                    <p className="mt-3 text-sm text-center">
                        Don't have an account?
                        <a href="/signup" className="text-blue-600 underline ml-1">
                            Signup
                        </a>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default Login;
