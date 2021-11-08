import React from 'react'
import styled from 'styled-components'
import  m1 from "../Utils/images/m1.jpeg"
import  m2 from "../Utils/images/m2.jpg"
import  m3 from "../Utils/images/m3.jpg"
import  m4 from "../Utils/images/m4.jpg"
import  m5 from "../Utils/images/m5.jpg"
import  m6 from "../Utils/images/m6.jpg"
import  m7 from "../Utils/images/m7.jpg"


function Movies() {
    // const[

    // ]
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
            <Wrap>
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/drama-movie-poster-template-design-990b4132e1c3ec24bb4c4f8261d8d69c.jpg?ts=1596691256" alt="" />
            </Wrap>
            <Wrap>
                <img src= {m1} alt="" />
            </Wrap>
            <Wrap>
                <img src= {m2} alt="" />
            </Wrap>
            <Wrap>
                <img src={m3} alt="" />
            </Wrap>
            <Wrap>
                <img src={m4} alt="" />
            </Wrap>
            <Wrap>
                <img src={m5} alt="" />
            </Wrap>
            <Wrap>
                <img src={m6} alt="" />
            </Wrap>
            <Wrap>
                <img src={m7} alt="" />
            </Wrap>
            </Content>
            
        </Container>
    )
}

export default Movies
const Container =styled.div`

`
const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
` 
const Wrap = styled.div`
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249, 249, 249,0.1);
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
&:hover{
    // transform: scale(1.1);
    border-color: rgba(249, 249, 249,0.8);
    box-shadow: -1px 18px 21px -4px rgba(0,0,0,0.74);
-webkit-box-shadow: -1px 18px 21px -4px rgba(0,0,0,0.74);
-moz-box-shadow: -1px 18px 21px -4px rgba(0,0,0,0.74);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;

}
`
