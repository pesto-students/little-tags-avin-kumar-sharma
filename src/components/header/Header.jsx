import React from "react";
import {FaUserAlt, FaShoppingCart, FaShoppingBag} from "react-icons/fa"
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes"
import "./style.css";

export default function Header () {
    return(
       <header>
           <div className="brand-logo">
           <Link to={ROUTES.HOME_PAGE} >logo</Link>
           </div>
           <div className="left-menu">
               <Link to={ROUTES.PRODUCT_LIST_PAGE} > MENS</Link>
               <Link to={ROUTES.PRODUCT_LIST_PAGE} > WOMENS</Link>
               <Link to={ROUTES.PRODUCT_LIST_PAGE} > ELECTRONICS</Link>
               <Link to={ROUTES.PRODUCT_LIST_PAGE} > JEWELWRY</Link>
           </div>
           <div className="right-menu">
               <div className="search-bar">
                   <input type="text" name="search" placeholder="Search"/>
               </div>
               <a href="/"> <FaUserAlt/></a>
               <a href="/"> <FaShoppingBag/></a>
               <a href="/"> <FaShoppingCart/></a>
           </div>
       </header>
    );
}