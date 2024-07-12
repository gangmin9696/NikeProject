import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import HomeView from "@/views/HomeView";
import NewProductView from "@/views/NewProductView";
import MenView from "@/views/MenView";
import WomenView from "@/views/WomenView";
import JordanView from "@/views/JordanView";
import CartView from "@/views/CartView";
import ShoesView from "@/views/ShoesView";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomeView />} />
                <Route path="/newProduct" element={<NewProductView />} />
                <Route path="/men" element={<MenView />} />
                <Route path="/women" element={<WomenView />} />
                <Route path="/jordan" element={<JordanView />} />
                <Route path="/cart" element={<CartView />} />
                <Route path="/shoes" element={<ShoesView />} />
            </Route>
        </Routes>
    );
};

export default App;
