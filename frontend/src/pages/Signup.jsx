import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {

  const [formvalue, setformvalue] = useState({
    username:"",
    email:"",
    password:""
  });

  const handleChange = (e) =>{
    setformvalue({...formvalue,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:8000/signup`,formvalue);
    console.log(res);
    setformvalue({...formvalue,username:"",email:"",password:""})
  }

 
  
  return (
  <div className="container-fulid signuppage">
    <form style={{border: '1px solid #ccc'}}>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Name" value={formvalue.username} name="username" onChange={handleChange} required />
    <label htmlFor="email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" value={formvalue.email} name="email" onChange={handleChange}  required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" value={formvalue.password} name="password" onChange={handleChange}  required />
    <hr />
    <p>if you've already registrater than <Link to={"/login"} >Login</Link></p>
    <div className="clearfix">
      <button type="submit" onClick={handleSubmit} className="signupbtn">Sign Up</button>
    </div>
    </form>
  </div>

  )
}

export default Signup;