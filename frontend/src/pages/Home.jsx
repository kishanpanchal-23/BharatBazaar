import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add } from "../Redux/cartSlice";

function Home(props) { 

  const dispatch = useDispatch();
  const redirect = useNavigate();
  const [products, setproducts] = useState([]);
  const { searchproducts, selectedCategory} = props;

  const fetchdata = async () => {
    const res = await axios.get(`http://localhost:8000/products`);
    setproducts(res.data);
  };

  const productsFilter = products.filter((product)=> {
   const matchsCategory = !selectedCategory || product.category === selectedCategory;  
   const matchesSearch = product.description.toLowerCase().includes(searchproducts)
   return matchsCategory && matchesSearch;
  });    

  useEffect(() => {
    fetchdata();
  }, []);
  
  const handleAdd = (product) => {
    dispatch(add(product));
  }

  return (
    <div className="container-fluid home">
      <div className="row  d-flex flex-row gap-4 justify-content-center">
        {productsFilter.map((item, index) => {
              return (
              <div className="col-sm-6 col-lg-3 card my-3 p-0" key={index}
              style={{ width: "18rem",cursor:"pointer", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src={"./images/"+item.img} className="card-img-top p-3" alt="Product_img" 
                style={{objectFit:"contain",height:"200px"}} 
                onClick={()=>{redirect('/product/'+ item.id)}} />
                <div className="card-body">
                  <h5 className="card-title"> <strong>{item.title}</strong></h5>
                  <p className="card-text">{item.description} </p>
                  <div className="d-flex justify-content-between" >
                  <h4>₹{item.price}</h4>
                  <Link to="#"  onClick={()=>{handleAdd(item)}} className="btn" style={{background:"rgb(202, 255, 255"}} >
                    Add to cart
                  </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
