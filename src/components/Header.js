import React from 'react'
import styled from 'styled-components'
import  p1 from "../Utils/images/logo.svg"
import  p2 from "../Utils/images/search-icon.svg"
import  p3 from "../Utils/images/watchlist-icon.svg"
import  p4 from "../Utils/images/search-icon.svg"
import  p5 from "../Utils/images/series-icon.svg"
import  p6 from "../Utils/images/user-icon.png"
// import  p7 from "../Utils/images/search-icon.svg"
// import  p8 from "../Utils/images/search-icon.svg"
// import  p9 from "../Utils/images/search-icon.svg"
function Header() {
    return (
        <Nav>

            
            <Logo src={p1} />
            <NavMenu>
                <a>
                    <img src="https://raw.githubusercontent.com/sahibe190/disney-plus-clone/0a2e428059db7e7547fc54c8b69bcdc513dff1c2/images/home-icon.svg" />
                    <span>Home</span>
                </a>
                <a>
                    <img src={p2} />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src={p3} />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src={p4} />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src={p5} />
                    <span>SEARIES</span>
                </a>
            </NavMenu>
            <UserImg src={p6} />
        </Nav>
    )
}

export default Header
const Nav = styled.nav`

height: 70px;
background: #090b13;
alig-items: center;
padding: 0px 36px;
display: flex;
overflow-x: hidden;

`
const Logo = styled.img`
width: 80px
align-items: center;


`
const NavMenu = styled.div`
display: flex;
flex: 1;
align-items: center;
margin-left: 20px;
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img{
        height: 20px;
    }

    span{
        font-size:13px;
        letter-spacing: 1.42px;
        position: relative;

    &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);

           
        }
    }
    &:hover{
       span:after{
           transform: scaleX(1);
           opacity: 1;
       }
    }
}
`
const UserImg = styled.img`
width: 30px;
height: 30px;
cursor: pointer;
margin-top: 20px;



`
