import React from "react";
import {FaShoppingBag, FaShoppingCart} from "react-icons/fa";
import "./style.css";

export default function ProductDetail() {
    
return (
    <div className="product-detail-section">
        <div className="display-image">
            <img src="/img/products/product-detail1.jpg" alt="product-detail.jpg" />
            <img src="/img/products/product-detail1.jpg" alt="" />
            <img src="/img/products/product-detail1.jpg" alt="" />
            <img src="/img/products/product-detail1.jpg" alt="" />
        </div>
        <div className="product-detail-description">
            <h1 class="pdp-title">HERE&amp;NOW</h1>
            <h1 class="pdp-name">Men Navy Polo Collar T-shirt</h1>
            <div class="pdp-discount-container"><span class="pdp-price"><strong>Rs. 599</strong></span>
                <div class="pdp-mrp-verbiage" tabindex="0">
                    <div className="product-tax">(Incl. of all taxes)</div>
                    <span class="pdp-discount">(50% OFF)</span>
                </div>
            </div>
            <h3 class="pdp-title">SELECT SIZE</h3>
            <div className="product-size">
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
            </div>
            <div className="product-btn-section">
                <button className="add-to-cart-btn">
                    <FaShoppingCart />&nbsp;ADD TO BAG</button>
                <button className="wishlist-btn">
                    <FaShoppingBag />&nbsp;WISHLIST</button>
            </div>
            <div className="product-detail-data">
                <p>
                    100% Original Products
                    Free Delivery on order above Rs. 799
                    Pay on delivery might be available
                    Easy 30 days returns and exchanges
                    Try and Buy might be available
                </p>
            </div>
        </div>
    </div>
)
}