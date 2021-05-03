import React from "react";
import CartEntry from "../cartentry/CartEntry";
import {FaTags} from "react-icons/fa"
import "./style.css";

export default function Cart() {
    return (
        <div className="cart-page-section">
            <div className="cart-section-left">
                <div className="cart-offer">
                    <p><strong>Available Offers</strong></p>
                     <ul>
                         <li className="offer-description">10% Cashback on Slice Visa Card on a min spend of Rs 500. TCA</li>
                         <li className="offer-description">5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                     </ul>
                </div>
                <div className="cart-items-tag">
                    <p>My Shopping Bag(2 items)</p>
                    <p>Total:Rs. 2,848</p>
                </div>
                {/* Display Cart Entry */}
                <CartEntry/>
                <CartEntry/>
                
            </div>
            {/* Cart total price and discount section */}
            <div className="cart-section-right">
                <div className="cart-total-section">
                    <div className="cart-apply-coupon-section">
                        <p><FaTags/><strong>Apply Coupons</strong></p>
                        <button className="apply-coupon-btn">APPLY</button>
                    </div>
                    <div className="cart-total-price">
                        <div className="price-row">
                            <p>Total MRP</p>
                            <p>Rs.3,598</p>
                        </div>
                        <div className="price-row">
                            <p>Discount on MRP</p>
                            <p style={{color:"red"}}>-Rs.750</p>
                        </div>
                        <div className="price-row apply-coupon">
                            <p>Coupon Discount</p>
                            <p>Apply Coupon</p>
                        </div>
                        <div className="price-row">
                            <p>DELIVERY FEES</p>
                            <p>RS.50</p>
                        </div>
                        <div className="price-row final-price">
                            <p><strong>Total Amount</strong></p>
                            <p><strong>Rs. 2848</strong></p>
                        </div>
                    </div>
                    <div className="order-place-btn-section">
                        <button className="place-order-btn">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}