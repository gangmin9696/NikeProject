import React from "react";
import styled from "styled-components";

const MiddleImgBlock = styled.div`
    margin: 50 0px;
`;

const MiddleImg = () => {
    return (
        <MiddleImgBlock>
            <img src="./assets/image/back.jpg" alt="none" />
        </MiddleImgBlock>
    );
};

export default MiddleImg;
