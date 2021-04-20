import React from "react";
import "./style.css";

export default function Footer() {
return ( <div className="footer-section">
    <div className="category-footer-section">
        <h4>CATEGORIES</h4>
        <p>MEN</p>
        <p>WOMEN</p>
        <p>ELECTRONICS</p>
        <p>JEWELLERY</p>
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
            <p>100% ORIGINAL guarantee<br/> for all products at myntra.com</p>
        </div>
        <div className="brands-footer-section-icon"><img src="/img/shipping.png" alt="shipping.png" />
            <p>Get free delivery for every<br/> order above Rs. 799</p>
        </div>
    </div>
</div>
);
}