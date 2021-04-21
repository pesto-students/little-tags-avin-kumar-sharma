import React,{useEffect} from "react";
import ProductCard from "../productCard/ProductCard";
import Filter from "../filters/Filter";
import {connect} from "react-redux";
import { loadProductData } from "../../actions/actions";
import "./style.css";

const API_BASE_URL = "https://fakestoreapi.com/products";

function ProductList({productList = [], loadProductData}) {

    useEffect(()=>{
        fetch(API_BASE_URL)
        .then(res => res.json())
        .then(result => {
            loadProductData(result);
        }).catch(err => {
            console.log(err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const displayProduct = productList.map((productData, index) => {
        return (<ProductCard key={index} productData={productData}/>)
    });
    return ( <>
    <div className="product-list-section">
    <Filter/>
    <div className="product-list">
    {displayProduct}
    </div>
    </div>
    </>);
}

const mapStateToProps = (state) => ({
    productList: state.productList
  });

const mapDispatchToProps = { loadProductData };
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
