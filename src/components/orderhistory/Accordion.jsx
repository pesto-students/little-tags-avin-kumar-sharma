import React, { useState } from 'react';
import OrderEntry from '../orderentry/OrderEntry';

const Accordion = ({ order }) => {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div><strong> Order Id:</strong> {order.trackingId}</div>
        <div><strong> Date:</strong> {order.date}</div>
        <div><strong> Status:</strong> <span style={{color:"green", fontWeight:"500"}}>Shipped</span> </div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
          {order.cart.map((cartEntry, index)=>(
              <OrderEntry key={index} entryData={cartEntry} />
             
          ))}
           <div className="cart-total-price">
                        <div className="order-price-row">
                            <p>Total MRP</p>
                            <p>Rs. {order.totalPrice}</p>
                        </div>
                        <div className="order-price-row">
                            <p>Total Quantity</p>
                            <p>{order.totalQuantity}</p>
                        </div>
                        <div className="order-price-row">
                            <p>Tracking Id</p>
                            <p>{order.trackingId}</p>
                        </div>
                        <div className="order-price-row">
                            <p>Status</p>
                            <p style={{color:"green", fontWeight:"500"}}>Shipped</p>
                        </div>
                    </div>
          </div>}
    </div>
  );
};

export default Accordion;