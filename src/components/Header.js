import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>

            
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SEARIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" />
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
width: 48px;
height: 48px;
cursor: pointer;
padding: 10px;

`