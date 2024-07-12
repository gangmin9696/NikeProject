import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

const MainSlideBlock = styled.div`
    position: relative;

    .slide {
        height: 40vw;
        background-position: center;
        background-size: cover;

        &.slide1 {
            background-image: url("./assets/image/main01.jpg");
        }
        &.slide2 {
            background-image: url("./assets/image/main02.jpg");
        }
        &.slide3 {
            background-image: url("./assets/image/main03.jpg");
        }
    }

    .slick-dots {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        li {
            display: inline-block;
            margin: 0 10px;
            button {
                width: 20px;
                height: 20px;
                background: #000;
                border-radius: 50%;
                text-indent: -9999px;
                overflow: hidden;
                opacity: 0.7;
            }
            &.slick-active {
                button {
                    background: white;
                }
            }
        }
    }
    .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 50px;
        color: #000;
        opacity: 0.5;
        &.slick-prev {
            left: 50px;
            z-index: 9999;
        }
        &.slick-next {
            right: 50px;
        }
    }
`;

const MainSlide = () => {
    const options = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: <IoIosArrowDropleftCircle />,
        nextArrow: <IoIosArrowDroprightCircle />,
    };
    return (
        <MainSlideBlock>
            <Slider {...options}>
                <div className="slide slide1"></div>
                <div className="slide slide2"></div>
                <div className="slide slide3"></div>
            </Slider>
        </MainSlideBlock>
    );
};

export default MainSlide;
