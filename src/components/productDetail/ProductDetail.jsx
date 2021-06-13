import React, { useEffect, useState } from "react";
import {FaShoppingBag, FaShoppingCart} from "react-icons/fa";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {connect} from "react-redux";
import {addProductToCart} from "../../actions/actions";
import Loader from "../loader/Loader";
import "./style.css";

const API_BASE_URL = "https://fakestoreapi.com/products";

function ProductDetail({ match, addProductToCart , authUser = {email:null, username:null, uid:null}}) {
    
    const [productDetails, setProductDetails] = useState({});
    const [isLoading, setIsLoading] = useState('true');

    const fetchProductData = (productId) => {
        fetch(`${API_BASE_URL}/${productId}`)
            .then(res => res.json())
            .then(result => {
                setProductDetails(result);
                setIsLoading(false)
            }).catch(err => {
            console.log(err);
        })
    };

    const DisplayAddedProduct = ({productDetails}) => (
        <div  className="display-popup">
            <div className="display-popup-img-section">
              <img src={productDetails.image} alt="product-detail.jpg" width="30"/>
             </div>
             <div className="display-popup-detail-section">
                 <h5>{productDetails.title}</h5>
                 <p>Rs.{productDetails.price}</p>
             </div>
        </div>
    )

    const handleAddToCart = () =>{
        try{
            addProductToCart(productDetails, authUser);
            toast( <DisplayAddedProduct productDetails ={productDetails}/>, {type:"dark", autoClose: 2000});
          } catch (error) {
            console.log("ERROR :: IN ADDING PRODUCT :: TO CART", error)
        }
    }
    
    useEffect(()=>{
        const productId = match.params.id;
        fetchProductData(productId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(isLoading) {
        return (
            <Loader/>
        );
    }
    
return (
    <div className="product-detail-section">
         <ToastContainer position="top-right"/>
        <div className="display-image">
            <div className="display-imag-tile">
            <img src={productDetails.image} alt="product-detail.jpg" />
            </div>
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
            {productDetails.category === 'jewelery' || productDetails.category === 'electronics' ? "" :
            <div>
            <h3 className="pdp-title">SELECT SIZE</h3>
            <div className="product-size">
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
            </div> </div>}
            <div className="product-btn-section">
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
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
  cart: state.cartReducer.cart,
  authUser: state.sessionReducer.authUser
});
  
  const mapDispatchToProps = { addProductToCart };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);