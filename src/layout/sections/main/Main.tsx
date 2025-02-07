// import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justufy={'space-around'}>
                <StyledBlock>
                    <Hi>Hi There</Hi>
                    <Name>I am Renata Kudinova</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </StyledBlock>

                <Photo src={photo} alt='I am Renata Kudinova'/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #9c9c78;
`
const StyledBlock = styled.div`
    
`

const Photo = styled.img`
    width: 350px;
    height: 430px;

`
const Hi = styled.span`
    
`

const Name = styled.h2`
    
`

const MainTitle = styled.h1`
    
`
