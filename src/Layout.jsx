import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MainSlide from "@/components/home/MainSlide";
import MiddleSlide from "./components/home/MiddleSlide";

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
