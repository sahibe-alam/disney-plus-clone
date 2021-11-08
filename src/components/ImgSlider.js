import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  badging from "../Utils/images/slider-badging.jpg"
import  pic1 from "../Utils/images/slider-badag.jpg"
function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
        

    }
    return (
        <Carousel {...settings} >

            <Wrap>
                <img src={badging} alt="" />
            </Wrap>
            <Wrap>
                <img src={pic1} alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
margin-top: 20px;
 ul li button{
     &:before{
         font-size: 10px;
         color: rgb(150, 158, 171);
     }
 }
li.slick-active button::before{
    color: white;
}
.slick-list{
    overflow: visible;
}
button.slick-arrow slick-next {
z-index: 1;
}
button{
    z-index: 1;
}
`
const Wrap = styled.div`
cursor: pointer;
img{
    border: 4px solid transparent;
    width: 100%;
height: 100%;
border-radius: 4px;
-webkit-box-shadow: -1px 12px 13px -3px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 12px 13px -3px rgba(0,0,0,0.75);
box-shadow: -1px 12px 13px -3px rgba(0,0,0,0.75);
transition-duration: 300ms;
&:hover{
    border: 4px solid #31B1FF;
}
}
`