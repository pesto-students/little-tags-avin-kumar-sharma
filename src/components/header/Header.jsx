import React, { useContext, useEffect, useState } from "react";
import {FaUserAlt, FaShoppingCart, FaShoppingBag} from "react-icons/fa"
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import FirebaseContext from "../Firebase/context";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./style.css";

function Header ({authorized, history, totalQuantity}) {
    const firebase = useContext(FirebaseContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [userId, setUserId] = useState("");

    const handleLogin = () => {
        firebase.doGoogleSignIn()
        .then((authUser) => {
            return firebase.user(authUser.user.uid).set({
                email: authUser.user.email,
                username: authUser.user.displayName,
                uid:authUser.user.uid
            })
           
        })
        .catch((error) => {
          console.log("LOGIN WINDOW:: CLOSED");
         
        })
    }

    const handleLogout = () => {
        firebase.doSignOut()
        .then(()=>{
            history.push(ROUTES.HOME_PAGE);
        });
    }

    useEffect(()=>{
        setCartItemsCount(totalQuantity);
    }, [totalQuantity])

    useEffect(()=>{
        if(authorized){
            setUserId(authorized.uid)
        }
    },[authorized])

return(
<header>
    <div className="brand-logo">
        <Link to={ROUTES.HOME_PAGE}>Ecomm Cart</Link>
    </div>
    <div className="left-menu">
        <Link to={`${ROUTES.CATEGORIES_PAGE}/mens`}> MENS</Link>
        <Link to={`${ROUTES.CATEGORIES_PAGE}/womens`}> WOMENS</Link>
        <Link to={`${ROUTES.CATEGORIES_PAGE}/electronics`}> ELECTRONICS</Link>
        <Link to={`${ROUTES.CATEGORIES_PAGE}/jewelery`}> JEWELLERY</Link>
    </div>
    <div className="right-menu">
        <div className="search-bar">
            <input type="text" name="search" placeholder="Search" />
        </div>
        <div className="dropdown">
                <FaUserAlt />
            <div className="dropdown-content">
                <p> <strong> Welcome</strong> <br/> here you can manage account</p>
                <div className="dropdown-item dropdown-login">
                    {authorized ? <button className="btn-login" onClick={handleLogout}>LOGOUT</button> : 
                    <button className="btn-login" onClick={handleLogin}>LOGIN/SIGNUP</button>
                    }
                    
                    { !!errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                </div>
                <div className="dropdown-item dropdown-login">
                <Link to={`${ROUTES.ORDER_HISTORY_PAGE}/${userId}`}> Orders</Link>
                </div>
                <div className="dropdown-item dropdown-login">
                <a href="/">Contact Us</a>
                </div>
            </div>
        </div>

       {authorized ? <Link to={ROUTES.WISHLIST_PAGE}><FaShoppingBag /></Link>: "" } 
        
        <Link to={ROUTES.CART_PAGE}>
            <FaShoppingCart /><sup>{cartItemsCount}</sup></Link>
    </div>
</header>
);
}

const mapStateToProps = (state) => ({
    authorized : state.sessionReducer.authUser,
    totalQuantity : state.cartReducer.totalQuantity,
    
});

export default withRouter(connect(mapStateToProps)(Header));

