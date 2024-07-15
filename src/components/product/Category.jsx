import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { onChangeCategory } from "../store/product";

const CategoryBlock = styled.div`
    display: flex;
    justify-content: center;
    background-color: #000000;
    button {
        width: 100px;
        height: 40px;
        margin: 0 20px;
        background: #3d3d3d;
        color: #fff;
        &.on {
            background: #ff5000;
        }
    }
`;

const Category = ({ title }) => {
    const dispatch = useDispatch();
    const category = ["all", "상의", "하의", "재킷", "용품"];
    return (
        <CategoryBlock>
            {category.map((value, index) => (
                <button
                    type="button"
                    key={index}
                    className={title == value ? "on" : ""}
                    onClick={() => dispatch(onChangeCategory(value))}
                >
                    {value}
                </button>
            ))}
        </CategoryBlock>
    );
};

export default Category;
