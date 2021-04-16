import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProductCard from "../productCard/ProductCard";
import Filter from "../filters/Filter";
import "./style.css";

export default function ProductList() {
    return ( <>
    <Header/>
    <div className="product-list-section">
    <Filter/>
    <div className="product-list">
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </div>
    </div>
    <Footer/>
    </>);
}
