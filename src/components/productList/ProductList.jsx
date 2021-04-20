import React from "react";
import ProductCard from "../productCard/ProductCard";
import Filter from "../filters/Filter";
import "./style.css";

export default function ProductList() {
    return ( <>
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
    </>);
}
