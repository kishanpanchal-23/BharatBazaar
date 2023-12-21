import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='container errorpage'>
       <p style={{fontSize:"100px",fontWeight:"600",margin:"0"}} >404</p>
       <p style={{fontSize:"50px"}} >Sorry, we couldn't find this page.</p>
       <p style={{fontSize:"25px"}} >But dont worry, you can find plenty of other things on our <br />
        homepage.
       </p>
       <Link to={'/'}><button style={{margin:"0"}}> Back to homepage</button></Link>
    </div>
  )
}

export default ErrorPage