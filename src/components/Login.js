import React, { useState } from 'react';
import './term.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    //const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history=useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault(); //default

        // Basic validation
       /* if (email === '' || password === '') {
            setError('Please enter both username and password');
            return;
        }*/

        // Perform login logic here (e.g., API call)

        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist")
                {
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist")
                {
                    alert("user not register")
                }
            })
            .catch(e=>
            {
                alert("wrong details")
                console.log(e)
            }
            )
        }
        catch(e)
        {
            console.log(e);
        }
        // If login successful
       // alert('Login successfully')
        // Reset fields if needed
       // setEmail('');
       // setPassword('');
       // setError('');
    };

    return (
        <div className="box">
            <img src={require('../images/user.png')} className="old" alt="User Icon" />

            <h1>Login Here</h1>
            <form action="POST" >
                <p>Email</p>
                <input                                         
                    type="email"
                   // value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="Enter Email"
                />

                <p>Password</p>
                <input
                    type="password"
                   // value={password}                                                    
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="Enter Password"
                />
                <br />
                
                <br />
                <input type="submit"  className="last" onClick={handleSubmit}/>
                <br />
                <br />
                <Link to="/register">Register for a new account?</Link>
            </form>
        </div>
    );
};

export default Login;
