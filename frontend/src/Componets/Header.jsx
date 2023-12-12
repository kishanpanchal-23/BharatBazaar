  import React, { useState} from "react";
  import { Link } from "react-router-dom";
  import { FaBars, FaTimes } from "react-icons/fa";


  function Header(props) {
    const { handleSearchChange, handleCategoryChange, islogged, handleLogin} = props;
    const [navbtn, setNavBtn] = useState(false);

    return (
      <header className="header container-fluid">
        <div className="logo">
          <Link to={"/"}>
            <p>
              <strong>B</strong>harat<strong>B</strong>azaar{" "}
            </p>
          </Link>
        </div>
        <nav>
          <ul className={navbtn ? "#navbar active" : "#navbar"} id="navbar">
            <li>
              <Link onClick={() => handleCategoryChange("men")}>Men</Link>
            </li>
            <li>
              <Link onClick={() => handleCategoryChange("women")}>Women</Link>
            </li>
            <li>
              <Link onClick={() => handleCategoryChange("kids")}>Kids</Link>
            </li>
          </ul>
        </nav>
        <div className="search d-flex align-items-center">
          <div className="searchinput">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
          </div>
          <div className="signup d-flex flex-row ">
            {islogged ? (
              <>
                <h6
                  style={{ cursor: "pointer" }}
                  className="pt-2"
                  onClick={handleLogin}>
                  Signout
                </h6>
                <Link className="cartlogo" to={"/cart"}>
                  <h4 className="cart ps-4 pt-1 ">
                    <i className="ri-shopping-cart-line"></i>
                  </h4>
                </Link>
              </>
            ) : (
              <Link className="signuplink" to={"/login"}>
                Login
              </Link>
            )}
          </div>
        </div>
        <div className="mobile" onClick={() => setNavBtn(!navbtn)}>
          {!navbtn ? (
            <span>
              <FaBars />
            </span>
          ) : (
            <span>
              <FaTimes />
            </span>
          )}
        </div>
      </header>
    );
  }

  export default Header;
