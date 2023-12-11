import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
  
  const redirect = useNavigate();
  const [data, setdata] = useState([]);
  
  const fetchdata = async() =>{
    const responce = await axios.get(`http://localhost:8000/superadmin/admins`);
    setdata(responce.data); 
  };

  useEffect(()=>{
    fetchdata();
  },[]);

  const handleDelete = async(id) => {
     const responce = await axios.delete(`http://localhost:8000/superadmin/admins/${id}`);
     fetchdata(responce);
  }

  return (
    <div className='container admin' >
        <table className="table">
          <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
           </tr>
        </thead>
  {
    data.map((item,index)=>(
     <tbody>
          <tr key={index} >
          <th scope="row">{item.id}</th>
          <td>{item.username}</td>
          <td>{item.password}</td>
          <td><button className='btn btn-outline-primary' onClick={()=>{redirect('/editdata/'+item.id)}} >Edit</button></td>
          <td><button className='btn btn-outline-danger' onClick={()=>{handleDelete(item.id)}} >Delete</button></td>
          </tr>
        </tbody>
      ))
  }
</table>
    </div>
  )
}

export default Admin