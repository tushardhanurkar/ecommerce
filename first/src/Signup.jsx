import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignup(e){
        e.preventDefault();

        const data = { username, email, password };

        const res = await fetch("http://localhost:5000/signup", {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message);

        if(result.message === "Signup Successfull"){
            navigate("/login");
        }
    }

    return (
        <div className="flex justify-center items-center h-100 bg-gray-100">

            <div className="flex flex-col justify-center 
            rounded-xl shadow-xl bg-white w-11/12 sm:w-96 p-6">

                <form onSubmit={handleSignup} className="flex flex-col gap-3 w-full">

                    <h1 className="text-center text-2xl font-semibold mb-2">Signup</h1>

                    <input 
                        className="bg-gray-200 w-full p-2 rounded-xl"
                        type="text"
                        placeholder="Enter your name"
                        required
                        onChange={(e)=>setUsername(e.target.value)}
                    />

                    <input 
                        className="bg-gray-200 w-full p-2 rounded-xl"
                        type="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input 
                        className="bg-gray-200 w-full p-2 rounded-xl"
                        type="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button 
                      onClick={() => alert("This is just a Frontend Demo version")}

                        type="submit"
                        className="bg-blue-600 text-white w-full p-2 rounded-xl hover:bg-blue-700"
                    >
                        Sign Up
                    </button>
                </form>

            </div>

        </div>
    );
};

export default Signup;
