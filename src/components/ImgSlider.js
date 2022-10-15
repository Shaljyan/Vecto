import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
           
    }

    return (
    <Carousel {...settings}>
       <Wrap>
        <img src="/images/https_specials-1.png"/>
       </Wrap>
       <Wrap>
        <img src="/images/https_specials-2.png"/>
       </Wrap>
       <Wrap>
        <img src="/images/https_specials-3.png"/>
       </Wrap>
       <Wrap>
        <img src="/images/https_specials-4.png"/>
       </Wrap>
       <Wrap>
        <img src="/images/https_specials-5.png"/>
       </Wrap>
       <Wrap>
        <img src="/images/https_specials-6.png"/>
       </Wrap>
       <Wrap>
        <img src="/images/https_specials-7.png"/>
       </Wrap>
       <Wrap>
        <img src="/images/https_specials-8.png"/>
       </Wrap>
    </Carousel>
  )
}

export default ImgSlider


const Carousel = styled(Slider)`
z-index:-1;
margin-top:0;
width:92%;
margin-left:100px;

`
const Wrap = styled.div`

img{
    width:20vh;

}

`