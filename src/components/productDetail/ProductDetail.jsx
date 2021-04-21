import React, { useEffect, useState } from "react";
import {FaShoppingBag, FaShoppingCart} from "react-icons/fa";
import {connect} from "react-redux";
import  {loadProductDetails} from "../../actions/actions";
import "./style.css";

const API_BASE_URL = "https://fakestoreapi.com/products";

function ProductDetail({ match }) {

    const [productDetails, setProductDetails] = useState({});

    const fetchProductData = (productId) => {
        fetch(`${API_BASE_URL}/${productId}`)
            .then(res => res.json())
            .then(result => {
                setProductDetails(result);
            }).catch(err => {
            console.log(err);
        })
    };
    
    useEffect(()=>{
        const productId = match.params.id;
        fetchProductData(productId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
return (
    <div className="product-detail-section">
        <div className="display-image">
            <img src={productDetails.image} alt="product-detail.jpg" />
            {/* <img src="/img/products/product-detail1.jpg" alt="" />
            <img src="/img/products/product-detail1.jpg" alt="" />
            <img src="/img/products/product-detail1.jpg" alt="" /> */}
        </div>
        <div className="product-detail-description">
            <h1 className="pdp-title">{productDetails.title}</h1>
            <h1 className="pdp-name">{productDetails.category}</h1>
            <div className="pdp-discount-container"><span className="pdp-price"><strong>Rs. {productDetails.price}</strong></span>
                <div className="pdp-mrp-verbiage" tabIndex="0">
                    <div className="product-tax">(Incl. of all taxes)</div>
                    <span className="pdp-discount">(50% OFF)</span>
                </div>
            </div>
            <h3 className="pdp-title">SELECT SIZE</h3>
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
                {productDetails.description}
                </p>
            </div>
        </div>
    </div>
)
}

const mapStateToProps = (state) => ({
   // productDetails: state.productDetails
  });
  
  const mapDispatchToProps = { loadProductDetails };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);