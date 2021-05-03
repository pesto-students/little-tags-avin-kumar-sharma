import React from "react";

export default function CartEntry(){
    return (
        <div className="cart-left-section-entries">
                    <div className="cart-section-entry">
                    <div className="cart-entry-display-image">
                        <img src="https://assets.myntassets.com/w_111,h_148,q_60,c_limit,fl_progressive/h_148,q_60,w_111/v1/assets/images/1758578/2017/5/12/11494569522819-WROGN-Men-Shirts-8521494569522516-1.jpg" alt="product"/>
                    </div>
                    <div className="cart-entry-details">
                        <p className="cart-entry-product-title">WROGN</p>
                        <p className="cart-entry-product-description">Men Green Slim Fit Solid Casual Shirt</p>
                        <p className="cart-entry-product-price">Price: Rs. 2,099</p>
                        <p className="size-qty"><span>SIZE:42</span></p>
                        <p className="size-qty"> <span>Qty:1</span></p>
                       
                    </div>
                    </div>
                    <div className="cart-entry-section-btn">
                        <button className="cart-entry-remove-btn">REMOVE</button>
                    </div>
                </div>
    )
}