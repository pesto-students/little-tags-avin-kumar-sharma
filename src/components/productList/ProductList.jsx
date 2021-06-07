import React,{useEffect, useState, useRef} from "react";
import ProductCard from "../productCard/ProductCard";
import Filter from "../filters/Filter";
import {connect} from "react-redux";
import { loadProductData, emptyProductList } from "../../actions/actions";
import Loader from "../loader/Loader";
import "./style.css";

const API_BASE_URL = "https://fakestoreapi.com/products";

function ProductList({match, productList = [], loadProductData, emptyProductList}) {
    const [isLoading, setIsLoading] = useState('true');
    const updateTimer = useRef(null);

    const fetchProductListFromAPI =()=>{ 
    setIsLoading(true)
    fetch(API_BASE_URL)
    .then(res => res.json())
    .then(result => {
        emptyProductList();
        const products = [];
        if(match){
        if(match.params.id === 'mens') {
          
            for(let item of result){
                if(item.category === "men's clothing"){
                    products.push(item);
                }
            }
        } else if(match.params.id === 'womens') {
            for(let item of result){
                if(item.category === "women's clothing"){
                    products.push(item);
                }
            } 
        } else if(match.params.id === 'electronics') {
            for(let item of result){
                if(item.category === "electronics"){
                    products.push(item);
                }
            }
        } else if(match.params.id === 'jewelery'){
            for(let item of result){
                if(item.category === "jewelery"){
                    products.push(item);
                }
            }
        }
        else if(match.params.id === 'all'){
            products.push(...result)
        }

        loadProductData(products);
        setIsLoading(false);
        updateTimer.current = null;
        return;
    }   
        updateTimer.current = null;
        loadProductData(result);
        setIsLoading(false);
    }).catch(err => {
        console.log(err);
    })
}
    
    useEffect(()=>{
        updateTimer.current = fetchProductListFromAPI(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
        if(!updateTimer.current){
            updateTimer.current = fetchProductListFromAPI();
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match])

    const displayProduct = productList.map((productData, index) => {
        return (<ProductCard key={index} productData={productData}/>)
    });

    
    
    if(isLoading) {
        return (
            <Loader/>
        );
    }
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
    productList: state.productDisplayReducer.productList
  });

const mapDispatchToProps = { loadProductData, emptyProductList };
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
