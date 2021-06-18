import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Brand ({brandData, folderName, parent, linkDisable = true}) {
   const brandMapper = brandData.map(({name,link}, index) => {
       return ( <div className="brand" key={index}>
         {linkDisable ? <Link to={`${parent}/${link}`}><img src={`/img/${folderName}/${name}`} alt={name}/></Link>
         : <img src={`/img/${folderName}/${name}`} alt={name} style={{cursor:"auto"}}/>}
       </div> )
    })
    return (
        <div className="brand-section">
           {brandMapper}
        </div>
    );
}