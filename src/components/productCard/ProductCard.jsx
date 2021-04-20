import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./style.css";

export default function ProductCard() {
return (
<Link className="product-card" to={ROUTES.PRODUCT_DETAIL_PAGE}>
    <img src="/img/products/product1.jpg" alt="product1.jpg" />
    <div className="product-metainfo">
        <h3 className="product-brand">Moda Rapido</h3>
        <h4 className="product-detail">Printed Round Neck T-shirt</h4>
        <div className="product-price">
          <span className="price-value">Rs.390</span>
          <span className="price-discount">(40% OFF)</span>
        </div>
    </div>
</Link>
)
}