import React, { useState } from 'react';
import '../styles/style.css';
import axios from 'axios'; //POST LOCALHOST
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history=useNavigate();
  //const [formData, setFormData] = useState({ uname: '', email: '', upw: '', upw2: '' });
  //  const [error, setError] = useState('');
  //const [name, setName] = useState('');

    async function handleSubmit(e) {
      e.preventDefault();

     try{
      await axios.post("http://localhost:8000/register",{
        email,password
      })
      .then(res=>{
        if(res.data=="exist")
        {
          alert("User already registered")
        }
        else if(res.data == "notexist")
        {
          history("/home",{state:{id:email}})
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

   /* if (validateForm()) {
      alert('REGISTER SUCCESSFULLY');
      console.log('Form submitted:', formData);
    }*/
  };

  /*const validateForm = () => {
   const { uname, email, upw, upw2 } = formData;
    /*if (!uname) {
      setError('Enter the username');
      return false;
    }
    if (!email) {
      setError('Enter the email');
      return false;
    }
    if (!upw) {
      setError('Enter the password');
      return false;
    }
    if (!upw2) {
      setError('Enter confirm password');
      return false;
    }
    if (upw !== upw2) {
      setError('Passwords do not match');
      return false;
    }
    setError('');
    return true;
  };*/

  return (
    <div className="box">
      <form action="POST">
        <img src={`${process.env.PUBLIC_URL}/images/user.png`} className="old" alt="User" />
        <h1>Register Here</h1>
         <p>Email</p>
                <input                                          
                    type="email"
                    //value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    placeholder="Enter Email"
            />
                <p>Password</p>
                <input
                    type="password"
                    //value={password}                                                     
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="Enter Password"
                />
        <br /> 
        <br />
        <input type="submit" value="Register" className="last" onClick={handleSubmit}/>
        <br />
        <Link to="/">existing user, login?</Link>
      </form>
    </div>
  );
}

export default Register;
