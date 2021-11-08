import React from 'react'
import styled from 'styled-components'
function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/769775.jpg" alt="" />
            </Background>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
<span>+</span>
                </AddButton>
                <GroupWatchButton>
<img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
                
            </Controls> 
           <Description>
           <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi perferendis <br />
           sed blanditiis excepturi, rerum eius <br/>consequuntur error deleniti eaque impedit architecto veritatis atque ex.<br/> Possimus illo id blanditiis mollitia!<br />
           </Description>
        </Container>
    )
}

export default Detail
const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Controls = styled.div`
padding-top: 100px;
display: flex;
align-items: center;

`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
border: none;
background: rgb(249, 249, 249);
    height: 45px;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background: rgb(219, 219, 219);
    }
`
const TrailerButton = styled(PlayButton)`
background: rgba(0, 0, 0, 0.5);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`
const AddButton = styled.button`
margin-right: 16px;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 1.5px solid white;
background-color: rgba(0, 0, 0.6);
cursor: pointer;
span{ 
    font-size: 30px;
    color: white;
}

`
const GroupWatchButton = styled(AddButton)`
`
const Description=styled.div`
padding-top: 20px;
`