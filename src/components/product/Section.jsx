import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/product";

const SectionBlock = styled.div`
    background-color: aliceblue;
`;
const UlBlock = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;
const ListBlock = styled.li`
    flex: 0 0 21%;
    margin: 20px 2%;
    text-align: center;
    border: 5px solid #ff5000;
    overflow: hidden;
    background-color: #000000;
    color: #ff5000;
    font-weight: 600;
    &:hover img {
        scale: 1.03;
        transition: all 0.5s;
    }
    .info {
        p:nth-child(1) {
            font-size: 20px;
        }
    }
`;

const Section = ({ title }) => {
    const dispatch = useDispatch();
    const allData = useSelector((state) => state.products.products);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (allData && Array.isArray(allData) && allData.length > 0) {
            if (title === "all") {
                setProducts(allData);
            } else {
                setProducts(allData.filter((item) => item.category === title));
            }
        } else {
            setProducts([]);
        }
    }, [allData, title]);

    if (!products || !Array.isArray(products)) {
        return <div>No products found</div>;
    }

    return (
        <SectionBlock>
            <UlBlock>
                {products.map((item, index) => (
                    <ListBlock key={index}>
                        <div className="photo">
                            <Link
                                to={`/product/${item.id}`}
                                state={{ item, index }}
                            >
                                <img src={item.image} alt={item.title} />
                            </Link>
                        </div>
                        <div className="info">
                            <p>
                                <Link
                                    to={`/product/${item.id}`}
                                    state={{ item, index }}
                                >
                                    {item.title}
                                </Link>
                            </p>
                            <p>{item.price.toLocaleString()}</p>
                            <p>{item.description}</p>
                        </div>
                    </ListBlock>
                ))}
            </UlBlock>
        </SectionBlock>
    );
};

export default Section;
