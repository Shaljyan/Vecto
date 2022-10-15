import React from 'react'
import styled from 'styled-components';

function Home() {
  return (
    <Container>
        <Background>
            <img src="/images/FeaturedCoverImage.png"/>
        </Background>
        <ImageTitle>
            <img src="/images/FeaturedTitleImage.png"/>
        </ImageTitle>
        </Container>
  )
}

export default Home

const Container = styled.div`
min-height: calc(vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Background = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index: -1;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const ImageTitle = styled.div`
height: 65vh;
min-height: 170px;
width: 40vw;
min-width: 200px;
z-index:-1;
img{
    width:100%;
    height:100%;
    object-fit: contain; 
}
`
