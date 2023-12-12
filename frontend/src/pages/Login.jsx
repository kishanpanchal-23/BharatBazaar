import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {
  const  { handleLogin } = props; 
  const redirect = useNavigate();
  const [formvalue, setformvalue] = useState({
    email:"",
    password:""
  });
  
  const handleChange = (e) => {
    setformvalue({...formvalue,[e.target.name]:e.target.value});
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:8000/login`,formvalue);
    // console.log(res.data);
    setformvalue({...formvalue,email:"",password:""});
    handleLogin();
    redirect('/');
  }

  return (
    <div className="container loginpage">
    <form style={{border: '1px solid #ccc',marginTop:"0%"  }}>
       <h1>Login</h1>
      <p>Please fill in this form to Login.</p>
      <hr />
      <label htmlFor="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" value={formvalue.email} name="email" onChange={handleChange}  required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" value={formvalue.password} name="password" onChange={handleChange} required />
      {/* <hr /> */}
      <Link to={'/signup'}>Create Account</Link>
      <div style={{marginTop:"10px"}}  className="clearfix">
        <button type="submit" onClick={handleSubmit} className="signupbtn">Login</button>
      </div>
    </form>
  </div>
  )
}

export default Login