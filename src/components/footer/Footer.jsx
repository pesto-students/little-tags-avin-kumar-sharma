import React from "react";
import {Link} from "react-router-dom"
import "./style.css";
import * as Routes from "../../constants/routes"

export default function Footer() {
return (
<div>
    <div className="footer-section">
        <div className="category-footer-section">
            <h4>CATEGORIES</h4>
            <Link to={`${Routes.CATEGORIES_PAGE}/mens`}>MEN</Link>
            <Link to={`${Routes.CATEGORIES_PAGE}/womens`}>WOMEN</Link>
            <Link to={`${Routes.CATEGORIES_PAGE}/electronics`}>ELECTRONICS</Link>
            <Link to={`${Routes.CATEGORIES_PAGE}/jewelery`}>JEWELLERY</Link>
        </div>
        <div className="links-footer-section">
            <h4>USEFUL LINKS</h4>
            <p>CONTACT US</p>
            <p>FAQ</p>
            <p>TERMS AND CONDITIONS</p>
            <p>SHIPPING</p>
        </div>
        <div className="brands-footer-section">
            <div className="brands-footer-section-icon"><img src="/img/original.png" alt="original.png" />
                <p>100% ORIGINAL guarantee<br /> for all products at myntra.com</p>
            </div>
            <div className="brands-footer-section-icon"><img src="/img/shipping.png" alt="shipping.png" />
                <p>Get free delivery for every<br /> order above Rs. 799</p>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
         <p>Designed By: Krishna Tyagi</p>
    </div>
</div>
);
}