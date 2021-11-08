import React from 'react'
import styled from 'styled-components'
import  m1 from "../Utils/images/viewers-disney.png"
import  m2 from "../Utils/images/viewers-pixar.png"
import  m3 from "../Utils/images/viewers-marvel.png"
import  m4 from "../Utils/images/viewers-starwars.png"
import  m5 from "../Utils/images/viewers-national.png"
function Viewers() {
    return (
        <Container>
           <Wrap>
               <img src={m1} />
           </Wrap>
           <Wrap>
               <img src= {m2} />
           </Wrap>
           <Wrap>
               <img src={m3} />
           </Wrap>
           <Wrap>
               <img src= {m4} />
           </Wrap>
           <Wrap>
               <img src= {m5} />
           </Wrap>
        </Container>
    )
}

export default Viewers


const Container = styled.div`
margin-top: 30px;
display: grid;
grid-gap: 25px;
padding: 30px 0px 26px;
grid-template-columns: repeat(5, minmax(0, 1fr));

`
const Wrap = styled.div`
border-radius: 10px;
border: 3px solid rgba(249, 249, 249,0.1);
box-shadow: -1px 18px 21px -4px rgba(0,0,0,0.74);
-webkit-box-shadow: -1px 18px 21px -4px rgba(0,0,0,0.74);
-moz-box-shadow: -1px 18px 21px -4px rgba(0,0,0,0.74);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;
img{
    width: 100%;
    height: 100%:
    object-fit: cover;
}
&:hover{
    transform: scale(1.05);
    border-color: white;
}

`