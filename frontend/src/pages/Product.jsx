import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Redux/cartSlice';


function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setproduct] = useState([]);

    const fetchdata = async() => {
      const res = await axios.get(`http://localhost:8000/products/${id}`);
      setproduct(res.data);
    } 
    
    useEffect(() => {
     fetchdata();
    },[]);

    const handleAdd = (product) =>{
        dispatch(addToCart(product));
    }

  return (
    <div className='container ProductPage'>
       <div className="row"  style={{ boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
         {product.map((item)=>(
                  <>
                    <div key={item.id} className="col-lg-6 left d-flex justify-content-center" >
                        <img src={'/images/'+item.img} alt="" />
                    </div>
                    <div className="col-lg-6 right flex-column d-flex justify-content-center gap-3" 
                    style={{color:"black"}} >
                      <h3>{item.title} </h3> 
                      <h4>{item.description}</h4>
                      <h4>Rs. {item.price}</h4>  
                      <div className='cartbtns' >
                        <button className='btn btn-outline-primary btn-sm m-0 mb-2'
                        onClick={()=>{handleAdd(item)}} >Add to Cart</button>
                        <button className='btn btn-outline-primary btn-sm m-0' >
                          buy Now
                        </button>
                      </div>   
                    </div>
                </>
          ))}
       </div>
    </div>
)}

export default Product;