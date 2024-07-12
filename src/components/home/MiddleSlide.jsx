import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

const MiddleSlideBlock = styled.div`
    position: relative;
    padding: 30px 30px;
    justify-content: center;

    img {
        width: 100%;
    }

    .slick-arrow {
        display: none;
    }
    .name1 {
        text-align: center;
        font-weight: 800;
        font-size: 45px;
        color: #000;
        margin: 50px 0;
        font-family: arial;
    }

    .name2 {
        text-align: center;
        font-weight: 300;
        font-size: 18px;
        color: #0f0f0f;
        margin: 0 0;
        font-family: 나눔고딕;
    }
    .caption {
        width: inherit;
        height: inherit;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        padding: 20px;
        box-sizing: border-box;
        opacity: 0;
        transition: 0.5s;
    }

    .caption a {
        color: #fff;
        background-color: #333;
        text-decoration: none;
        padding: 7px;
        border-radius: 3px;
    }

    .slick-dots {
        position: absolute;
        bottom: 10px;
        left: 8%;
        transform: translateX(-50%);
        li {
            opacity: 0.7;
            display: inline-block;
            margin: 0 3px;
            button {
                width: 8px;
                height: 8px;
                background: #d8d8d8;
                border-radius: 50%;
                text-indent: -9999px;
                overflow: hidden;
            }
            &.slick-active {
                button {
                    opacity: 1;
                    background: #ff5000;
                }
            }
        }
    }
`;

const MiddleSlide = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const handleMouserOver = (아무렇게나써도되는매개변수내맘대로집어넣자) => {
        setCurrentImage(아무렇게나써도되는매개변수내맘대로집어넣자);
    };
    const sliders = [
        {
            image1: "./assets/image/mainimg.jpg",
            image2: "./assets/image/mainimg-2.jpg",
            alt: "MEN",
        },
        {
            image1: "./assets/image/mainimg2.jpg",
            image2: "./assets/image/mainimg2-2.jpg",
            alt: "SHOES",
        },
        {
            image1: "./assets/image/mainimg4-2.jpg",
            image2: "./assets/image/mainimg4-1.jpg",
            alt: "WOMEN",
        },
        {
            image1: "./assets/image/mainimg3.jpg",
            image2: "./assets/image/mainimg3-2.jpg",
            alt: "JORDAN",
        },
    ];
    const options = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidexToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, //보여질 슬라이드 수
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1, //보여질 슬라이드 수
                },
            },
        ],
    };
    return (
        <MiddleSlideBlock className="row">
            <div className="name1">
                ITEM
                <div className="name2">
                    나만의 <b>깔@롱하고 쌈@뽕한</b> 아이템을 찾아보세요.
                </div>
            </div>
            <Slider {...options}>
                {sliders.map((item, index) => (
                    <div key={index}>
                        <img
                            src={
                                currentImage === index
                                    ? item.image2
                                    : item.image1
                            }
                            alt={item.alt}
                            onMouseOver={() => handleMouserOver(index)}
                            onMouseOut={() => setCurrentImage(null)}
                        />
                    </div>
                ))}
            </Slider>
        </MiddleSlideBlock>
    );
};

export default MiddleSlide;
