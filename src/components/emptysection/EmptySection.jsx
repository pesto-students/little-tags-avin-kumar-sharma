import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../../constants/routes";
import "./style.css"

export default function EmptySection(){
    return (
        <div>
        <div className="no-items-section">
            <img src="/img/no-items.png" alt="no-items"/>
           
         </div>
         <div className="no-items-section">
         <Link to={`${ROUTES.CATEGORIES_PAGE}/all`} id="shop-btn">Let's start your shopping</Link>
         </div>
        </div>
    )
}