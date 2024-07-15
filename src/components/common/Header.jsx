import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const HeaderBlock = styled.div`
    background: #000;
    color: #fff;
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        float: left;
    }
    h1 img {
        width: 90px;
        height: auto;
        margin-top: 20px;
    }
`;
const Nav = styled.nav`
    .depth1 {
        display: flex;
        padding: 20px;
        justify-content: center;
        li {
            margin: 0 50px;
            position: relative;
            &:hover {
                .depth2 {
                    display: block;
                }
            }
            a {
                text-align: center;
                &:hover,
                &.active {
                    color: #ff5000;
                }
            }
            .depth2 {
                position: absolute;
                top: 100%;
                left: 0;
                margin-left: -35px;
                color: #000;
                width: 150px;
                border: 1px solid #023586;
                display: none;
                li {
                    a {
                        padding: 10px;
                    }
                }
            }
        }
    }
`;
// const Nav = styled.nav`
//     .depth1 {
//         display: flex;
//         padding: 20px;
//         justify-content: center;
//         li {
//             position: relative;
//             margin: 0 50px;
//             &:hover {
//                 .depth2 {
//                     display: block;
//                 }
//             }
//             a {
//                 padding: 40px 25px 40px 0;
//                 &:hover,
//                 &.active {
//                     color: #f00;
//                 }
//             }
//             .depth2 {
//                 position: absolute;
//                 top: 100%;
//                 left: 0;
//                 margin-left: -35px;
//                 color: #000;
//                 width: 150px;
//                 border: 1px solid #023586;
//                 display: none;
//                 li {
//                     a {
//                         padding: 10px;
//                     }
//                 }
//             }
//         }
//     }
// `;
const OtherNav = styled.div`
    a {
        padding-left: 25px;
        &:hover,
        &.active {
            color: #f00;
        }
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <div className="row">
                <Nav>
                    <h1>
                        <Link to="/">
                            <img
                                src="./assets/image/nikeor.png"
                                alt="출력오류"
                            />
                        </Link>
                    </h1>
                    <ul className="depth1">
                        <li>
                            <NavLink to="/newProduct">New</NavLink>
                        </li>
                        <li>
                            <NavLink to="/men">Men's</NavLink>
                        </li>
                        <li>
                            <NavLink to="/women">Women's</NavLink>
                        </li>
                        <li>
                            <NavLink to="/jordan">Jordan</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shoes">Shoes</NavLink>
                        </li>
                    </ul>
                </Nav>

                {/*         <OtherNav>
          <NavLink to="/cart">장바구니</NavLink>
          { !isUser ?
            <>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/join">회원가입</NavLink>
            </>
            :
            <>
              <a href="#none" onClick={ onLogout }>로그아웃</a>
              <NavLink to="/join">정보수정({isUser.userName})</NavLink>
            </>
          }
        </OtherNav> */}
            </div>
        </HeaderBlock>
    );
};

export default Header;
