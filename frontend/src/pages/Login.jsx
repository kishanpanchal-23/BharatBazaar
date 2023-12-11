import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetUserData } from '../Redux/authSlice';

function Login() {

  const redirect = useNavigate();
  const dispatch = useDispatch();
  // const [userData, setUserData] = useState([])
  const [formvalue, setformvalue] = useState({
    email:"",
    password:""
  })
  
  const handleChange = (e) => {
    setformvalue({...formvalue,[e.target.name]:e.target.value});
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:8000/login`,formvalue);
    const token = res.data.token 
    localStorage.setItem("usertoken",token );
    setformvalue({...formvalue,email:"",password:""});
    dispatch(SetUserData(res.data.user))
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
      <Link to={'/signup'}>For Registrater</Link>
      <div style={{marginTop:"10px"}}  className="clearfix">
        <button type="submit" onClick={handleSubmit} className="signupbtn">Login</button>
      </div>
    </form>
  </div>
  )
}

export default Login