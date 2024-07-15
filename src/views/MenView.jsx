import React from "react";
import Title from "@/components/common/Title";
import Section from "@/components/product/Section";
import Category from "@/components/product/Category";
import { useSelector } from "react-redux";

const MenView = () => {
    const category = useSelector((state) => state.products.category);
    return (
        <div>
            <Title title="MEN" />
            <Category title={category} />
            <Section title={category} />
        </div>
    );
};

export default MenView;
