import React from 'react'
import styled from 'styled-components'
function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
            <Wrap>
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/drama-movie-poster-template-design-990b4132e1c3ec24bb4c4f8261d8d69c.jpg?ts=1596691256" alt="" />
            </Wrap>
            <Wrap>
                <img src="" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://raw.githubusercontent.com/sahibe190/disney-plus-clone/gh-pages/images/m1.jpeg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/m3.JPG " alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/m4.JPG" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/m5.JPG" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/m6.JPG" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/m6.JPG" alt="" />
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
