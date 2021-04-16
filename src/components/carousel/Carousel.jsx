import React, { useEffect, useState } from "react";
import "./style.css";

export default function Carousel () {
const [currentImg, setCurrentImg] = useState("banner1.jpg");
const [count, setCount] = useState(0);

const imageArr = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];

const handleNextClick = () => {
    if(count === 2) {
        setCount(0);
        return;
    }
    setCount((count % 3) + 1);
   
}

const handlePrevClick = () => {
    if(count === 0) {
        setCount(2);
        return;
    }
    setCount((count % 3) - 1);
}
useEffect(()=>{
    setCurrentImg(imageArr[count]);
    console.log(count); 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [count])

return (
<div className="slideshow-container">
    <div className="mySlides fade">
        <img src={`/img/${currentImg}`} alt={currentImg} style={{width:"100%"}}/>
    </div>

    <button className="prev" onClick={handlePrevClick}>&#10094;</button>
    <button className="next" onClick={handleNextClick}>&#10095;</button>

</div>
);
}