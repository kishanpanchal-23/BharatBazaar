import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Remove } from '../Redux/cartSlice';
import {Link} from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state)=> state.cart);

  const handleRemove = (id) =>{
    dispatch(Remove(id));
  }

  const handleDecreaseCart = () =>{}
  const handleAddToCart = () => {}
  return (
    // <div className='container cartpage' >
    //   <div className='row d-flex flex-row' >
    //     <div className="col-lg-12">
    //       <h2>Shopping Cart</h2>
    //     </div>
    //   <div className="col-lg-8">
    //         {product.map((product)=>(
    //             <div className='d-flex flex-row justify-content-evenly cartcard' >
    //               <div className='cartimg'>
    //                 <img height={"150px"} src={ "/images/" +product.img} alt={product.title}/>
    //               </div>
    //               <div className='cartinfo' >
    //                 <h2>{product.title}</h2>
    //                 <h6 style={{width:"90%"}} >{product.description}</h6>
    //                 <h4>Rs. {product.price}</h4>
    //                 <button className='cartbtn' onClick={()=>{handleRemove(product.id)}}>
    //                   remove
    //                 </button>
    //               </div>
    //             </div>
    //           ))}
    //          </div>
    //          <div className="col-lg-4 cartcard">
    //               <h3>Total Price : {product.price} </h3>
    //           </div>
    //   </div>
    // </div>
    <div className="cart-container">
    <h2>Shopping Cart</h2>
    {product.length === 0 ? (
      <div className="cart-empty">
        <p>Your cart is currently empty</p>
        <div className="start-shopping">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <div className="titles">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
          <h3 className="quantity">Quantity</h3>
          <h3 className="total">Total</h3>
        </div>
        <div className="cart-items">
           { product.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={ '/images/' + cartItem.img} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <button onClick={() => handleRemove(product.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">Rs.{cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}2</div>
                  <button onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${ Math.floor(Math.random() * 101 ) + 200 }
                </div>
              </div>
            ))}
        </div>
        <div className="cart-summary">
          <button className="clear-btn" onClick={() => ('')}>
            Clear Cart
          </button>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">Rs. 2300</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <button className='cartbtn' >Check out</button>
            <div className="continue-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Cart