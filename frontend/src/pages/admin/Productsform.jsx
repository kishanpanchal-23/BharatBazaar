import axios from 'axios';
import React, { useState } from 'react'

function Productsform() {

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');
  const [image, setimage] = useState(null);

  const handleChange = (e) =>{
    setimage(e.target.files[0]);
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    const res = await axios.post(`http://localhost:8000/products`,formData);
    // setformvalue({...formData,title:"",description:"",price:"",image:""})
    setTitle('');
    setdescription('');
    setprice('');
    setimage('');
    return res;
  }

  return (
    <div className='container productsform' >
  <form method='post' action='/store-data' encType='mutlipart/form-data' >
    <h1>Product Info</h1>
    <hr />
   <div className="mb-3">
     <label htmlFor="title" className="form-label">Title :-</label>
     <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}    />
   </div>
   <div className="mb-3">
     <label htmlFor="description" className="form-label">Description :-</label>
     <input type="text" name="description" value={description} 
     onChange={(e)=>{setdescription(e.target.value)}} />
   </div>
   <div className="mb-3">
     <label htmlFor="price" className="form-label">Price :-</label>
     <input type="number" name="price" value={price} onChange={(e)=>{setprice(e.target.value)}} 
     className="form-control" />
   </div>
   <div className="mb-3">
     <label htmlFor="image" className="form-label">Image :-</label>
     <input type="file" name="image" onChange={handleChange} className="form-control" />
   </div>
     <button style={{width:"30%",marginLeft:"0",marginTop:"10px"}} onClick={handleSubmit} type="submit" 
     className="btn btn-lg btn-outline-primary">Submit</button>
</form>
</div>
)}

export default Productsform