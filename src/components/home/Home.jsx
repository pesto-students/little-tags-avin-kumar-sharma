import React from "react";
import Carousel from "../carousel/Carousel";
import Brand from "../brands/Brand";
import "./style.css"

export default function Home() {
  const imageArr = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
  const brandData = ['brand1.jpg', 'brand2.jpg', 'brand3.jpg', 'brand4.jpg','brand5.jpg'];
  const categoriesData = ['dresses.jpg', 'kurtas.jpg', 'sarees.jpg', 'jeans.jpg', 'shirts.jpg'];
    return (<>
       <Carousel imageArr={imageArr}/>
         <h4 className="text-banner-title">Biggest Deals On Top Brands</h4>
         <Brand brandData={brandData} folderName="brands" />
         <h4 className="text-banner-title">CATEGORIES TO BAG</h4>
         <Brand brandData={categoriesData} folderName="categories"/>
        </>);
}