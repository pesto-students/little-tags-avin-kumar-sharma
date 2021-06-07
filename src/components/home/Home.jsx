import React from "react";
import Carousel from "../carousel/Carousel";
import Brand from "../brands/Brand";
import * as ROUTES from "../../constants/routes";
import "./style.css"

export default function Home() {
  const imageArr = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
  const brandData = [{name:'brand1.jpg',link:"all"}, {name:'brand2.jpg',link:"all"}, {name:'brand3.jpg', link:"all"}, {name:'brand4.jpg', link:"all"},{name:'brand5.jpg',link:"all"}];
  const categoriesData = [{name:'womens.jpg', link:"womens"}, {name:'kurtas.jpg', link:"kurta"}, {name:'jewelery.jpg', link:"jewelery"}, {name:'jeans.jpg', link:"mens"}, {name:'mens.jpg',link:"mens"}];
    return (<>
       <Carousel imageArr={imageArr}/>
         <h4 className="text-banner-title">CATEGORIES TO BAG</h4>
         <Brand brandData={categoriesData} parent={ROUTES.CATEGORIES_PAGE} folderName="categories"/>
         <h4 className="text-banner-title">Biggest Deals On Top Brands</h4>
         <Brand brandData={brandData} folderName="brands" parent={ROUTES.CATEGORIES_PAGE} linkDisable = {false}/>
        
        </>);
}