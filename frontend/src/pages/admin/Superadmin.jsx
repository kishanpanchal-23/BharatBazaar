import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Superadmin() {

  const redirect = useNavigate();

    const [formvalue, setformvalue] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        setformvalue({...formvalue,[e.target.name]:e.target.value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await axios.post(`http://localhost:8000/superadmin`,formvalue);
        // console.log(res);
        setformvalue({...formvalue,username:"",email:"",password:""});
        redirect('/admin');
        return res;
    }

  return (
    <form style={{border: '1px solid #ccc'}}>
  <div className="container">
    <h1>Superadmin Login</h1>
    <p>Please fill in this form to login.</p>
    <hr />
    <label htmlFor="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Name" value={formvalue.username} name="username" onChange={handleChange} required />
    <label htmlFor="email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" value={formvalue.email} name="email" onChange={handleChange}  required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" value={formvalue.password} name="password" onChange={handleChange}  required />
    <hr />
    {/* <p>if you've already registrater than <Link to={"/login"} >Login</Link></p> */}
    <div className="clearfix">
      <button type="submit" onClick={handleSubmit} className="signupbtn">Login</button>
    </div>
  </div>
</form>
  )
}

export default Superadmin