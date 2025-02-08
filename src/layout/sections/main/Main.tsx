// import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justufy={'space-around'}>
                    <BlockWrapper>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Renata Kudinova</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </BlockWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #9c9c78;
    display: flex;
`
const BlockWrapper = styled.div`
    
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accentBg};
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;

`
const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
    display: flex;
`

const Name = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accentBg};
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
    display: flex;
`
