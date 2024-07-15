import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

const MinislideBlock = styled.div`
    position: relative;
    padding: 30 0px;
    margin: 50px auto;
    img {
        width: 100%;
        height: auto;
        margin: 0 50%;
    }
    .slick-arrow {
        position: absolute;
        top: -10%;
        transform: translateY(-50%);
        font-size: 30px;
        color: #ff2222;
        opacity: 0.4;
        &.slick-prev {
            left: 50px;
            z-index: 9999;
        }
        &.slick-next {
            right: 50px;
        }
        &:hover {
        }
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
`;

const MiniSlide = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const handleMouserOver = (아무렇게나써도되는매개변수내맘대로집어넣자) => {
        setCurrentImage(아무렇게나써도되는매개변수내맘대로집어넣자);
    };
    const sliders = [
        {
            image1: "./assets/image/01.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/03.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/4.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/5.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/6.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/01.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/03.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/4.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/5.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/6.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/01.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/03.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/4.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/5.jpg",
            alt: "",
        },
        {
            image1: "./assets/image/6.jpg",
            alt: "",
        },
    ];
    const options = {
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidexToScroll: 1,
        arrows: true,
        cssEase: "linear",
        prevArrow: <IoIosArrowDropleftCircle />,
        nextArrow: <IoIosArrowDroprightCircle />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, //보여질 슬라이드 수
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2, //보여질 슬라이드 수
                },
            },
        ],
    };
    return (
        <MinislideBlock>
            <div className="name1">
                SHOES
                <div className="name2">
                    나만의 <b>깔@쌈하고 힙한</b> 신발을 찾아보세요.
                </div>
            </div>
            <Slider {...options}>
                {sliders.map((item, index) => (
                    <div key={index}>
                        <img src={item.image1} alt={item.alt} />
                        {/* onMouseOver={() => handleSlideChange(index)} */}
                    </div>
                ))}
            </Slider>
        </MinislideBlock>
    );
};

export default MiniSlide;
