import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Editdata() {
  
    const redirect = useNavigate();
    const {id} = useParams();

    const [formvalue, setformvalue] = useState([])

    const fetchdata = async() => {
        const responce = await axios.get(`http://localhost:8000/superadmin/admins/${id}`)
        setformvalue({...formvalue,username:responce.data.username,password:responce.data.password})
    } 
    const handleChange = (e) => {
        setformvalue({...formvalue,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        fetchdata();
    },[]);
    
    const handleEdit = async(e) => {
        e.preventDefault();
       const res = await axios.put(`http://localhost:8000/superadmin/admins/${id}`,formvalue);
       setformvalue({...formvalue,username:"",password:""});
       redirect('/admin');
       return res; 
    }

  return (
    <div className="container adminEditForm">
    <form style={{border:"1px solid gray",marginTop:"0px"}}>
   
      <h1>Edit Page </h1>
      <p>Edit here for<strong> Admin's</strong></p>
      <hr />
      <label htmlFor="text"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" value={formvalue.username} name="username" onChange={handleChange}  required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" value={formvalue.password} name="password" onChange={handleChange} required />
      {/* <hr /> */}
      {/* <Link to={'/'}>For Registrater</Link> */}
      <div style={{marginTop:"10px"}}  className="clearfix">
        <button type="submit" onClick={handleEdit} className="signupbtn">Save</button>
      </div>
      </form>
    </div>
  )
}

export default Editdata