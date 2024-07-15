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
    padding: 50px 30px;
    justify-content: center;

    img {
        width: 95%;
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
const SlideContainer = styled.div`
    position: relative;
`;

const Image = styled.img`
    width: 90%;
    margin: 0 5%;
    transition: all 0.5s;
    opacity: ${({ ishovered }) => (ishovered ? 1 : 0)};
`;
const HoverImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    margin: 0 5%;
    transition: all 0.5s;
    opacity: ${({ ishovered }) => (ishovered ? 0 : 1)};
`;

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return <IoIosArrowDropleftCircle className={className} onClick={onClick} />;
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <IoIosArrowDroprightCircle className={className} onClick={onClick} />
    );
};

const MiddleSlide = () => {
    const [currentImage, setCurrentImage] = useState(null);
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
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
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
                    <SlideContainer key={index}>
                        <Image
                            src={item.image2}
                            ishovered={currentImage == index ? "hover" : ""}
                        />
                        <HoverImage
                            src={item.image1}
                            onMouseOver={() => setCurrentImage(index)}
                            onMouseOut={() => setCurrentImage(null)}
                            ishovered={currentImage == index ? "hover" : ""}
                        />
                    </SlideContainer>
                ))}
            </Slider>
        </MiddleSlideBlock>
    );
};

export default MiddleSlide;
