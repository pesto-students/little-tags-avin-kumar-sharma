import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";

export default function Brand ({brandData, folderName}) {
   const brandMapper = brandData.map((item, index) => {
       return ( <div className="brand" key={index}>
          <Link to={ROUTES.PRODUCT_LIST_PAGE}><img src={`/img/${folderName}/${item}`} alt={item}/></Link>
       </div> )
    })
    return (
        <div className="brand-section">
           {brandMapper}
        </div>
    );
}