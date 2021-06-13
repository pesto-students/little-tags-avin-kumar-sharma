import React from "react";
import "./style.css"

export default function OrderEntry({entryData}){
    
   
    if(!entryData){
        return (
            <div>
                empty
            </div>
        )
    }
    return (
        <div className="order-left-section-entries">
             
                    <div className="order-section-entry">
                    <div className="order-entry-display-image">
                        <img src={entryData.product.image} alt="product"/>
                    </div>
                    <div className="order-entry-details">
                        <p className="order-entry-product-title">{entryData.product.title}</p>
                        <p className="order-entry-product-description">{entryData.product.category}</p>
                        <p className="order-entry-product-price">Price: Rs. {entryData.product.price}</p>
                        {/* <p className="size-qty"><span>SIZE:42</span></p> */}
                        <p className="size-qty"> <span>Qty:{entryData.quantity}</span></p>
                       
                    </div>
                    </div>
                    
                </div>
    )
}
