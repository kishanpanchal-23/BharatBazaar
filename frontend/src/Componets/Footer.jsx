import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer container-fluid pb-0'>
     <div className="row">
        <div className="first col-sm-3 col-lg-3">
        <p><strong>B</strong>harat<strong>B</strong>azaar.com </p>
        <pre>"Shop Smart, Shop Easy <br />
           Your Online Retail Destination!"</pre>
        </div>
        <div className="second col-sm-3 col-lg-3">
          <h4>Get to Know Us</h4>
          <ul>
            <li><Link>About Us</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Press Releases</Link></li>
            <li><Link>FAQ</Link></li>
          </ul>
        </div>
        <div className="third col-sm-3 col-lg-3">
        <h4>Connect with Us</h4>
          <ul>
            <li><Link>Facebook</Link></li>
            <li><Link>Twitter</Link></li>
            <li><Link>Instagram</Link></li>
          </ul>
        </div>
        <div className="four col-sm-3 col-lg-3">
        <h4>Make Money with Us</h4>
          <ul>
            <li><Link>Sell on BharatBazzar</Link></li>
            <li><Link>Sell under BharatBazzar</Link></li>
            <li><Link>Protect and Build Your Brand</Link></li>
            <li><Link>Advertise Your Products</Link></li>
            <li><Link>BharatBazzar App Download</Link></li>
          </ul>
        </div>
        <div className='footerleft col-sm-12 col-lg-6' >
           <h4> ©2023 BharatBazzar.com</h4>
        </div>
        <div className='footerright col-sm-12 col-lg-6' >
         <ul>
          <li><Link>Privacy Policy</Link> </li>
          <li><Link>Legal Disclamier</Link></li>
          <li><Link>Terms & Conditions</Link></li>
         </ul>
        </div>
     </div>
    </footer>
  )
}

export default Footer