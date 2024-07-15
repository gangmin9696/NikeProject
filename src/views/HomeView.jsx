import React from "react";
import MainSlide from "@/components/home/MainSlide";
import MiddleSlide from "@/components/home/MiddleSlide";
import FooterSlide from "@/components/home/FooterSlide";
import MiddleImg from "../components/common/MiddleImg";
import MiniSlide from "../components/home/MiddleSlide";

const HomeView = () => {
    return (
        <div>
            <MainSlide />
            <MiddleSlide />
            <MiddleImg />
            <FooterSlide />
        </div>
    );
};

export default HomeView;
