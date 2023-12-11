  import React, { useEffect, useState} from "react";
  import { Link } from "react-router-dom";
  import { FaBars, FaTimes } from "react-icons/fa";
  import { useSelector } from "react-redux";
  // import { RemoveUserData } from "../Redux/authSlice";

  function Header(props) {
    // const dispatch = useDispatch();
    const { handleSearchChange, handleCategoryChange } = props;
    const [navbtn, setNavBtn] = useState(false);
    const [token, setToken] = useState();
    const data = useSelector((state) => state.auth.UserData);
    // const [isLogged, setIslogged] = useState(false);
    // const checkUser = data?.UserData  ? data.UserData[0].username : data.UserData
    // const user = localStorage.getItem("usertoken")
    // console.log(data );

    useEffect(()=>{
      const usertoken = localStorage.getItem("usertoken")
      setToken(usertoken);
    },[])

    const handlesignout = () => {
      localStorage.removeItem("usertoken");
      console.log('logout')
      // setIslogged(false)
    };
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
            {token ? (
              <>
                <h6
                  style={{ cursor: "pointer" }}
                  className="pt-2"
                  onClick={handlesignout}>
                  Signout
                </h6>
                <Link className="cartlogo" to={"/cart"}>
                  <h4 className="cart ps-4 pt-1 ">
                    <i className="ri-shopping-cart-line"></i>
                  </h4>
                </Link>
              </>
            ) : (
              <Link className="signuplink" to={"/signup"}>
                SignUp
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
