import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
      <FooterContainer>
         <FooterMenu>
          <a>About Disney+ Hotstar</a>
          <a>Terms Of Use</a>
          <a>Privacy Policy</a>
          <a>FAQ</a>
          <a>Feedback</a>
       <Desc>
       <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi perferendis <br />
           sed blanditiis excepturi, rerum eius <br/>consequuntur error deleniti eaque impedit architecto veritatis atque ex.<br/> Possimus illo id blanditiis mollitia!<br />

       </Desc>
         </FooterMenu>
      </FooterContainer>
    )
}

export default Footer
const FooterContainer = styled.div`
background-color: black;
top: 0;
height: 200px;
width: 100%;
bottom: 0;
display: flex;
padding-top: 20px;
a{
  padding: 10px;
  font-weight: bold;
  padding-top: 50px;
  color: gray;
}

`
const FooterMenu =styled.div`

`
const Desc=styled.div`
color: gray;
padding-left: 10px;
`