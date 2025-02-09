// import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {Button} from "../../../../components/Button.tsx";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=''/>
                <Button>view project</Button>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={'#'}>DEMO</Link>
                <Link href={'#'}>CODE</Link>
            </Description>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;
    
    ${Link} {
        padding: 10px 0;
        
        & + ${Link} {       //каждый элемент Link, который идет после Link(а) видео про комбинаторы
        margin-left: 20px;
    }
    }
    @media ${theme.media.desktop}{
        max-width: 540px;
    }
`
const ImageWrapper = styled.div`
    position: relative;
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Description = styled.div`
    padding: 27px 20px;
`

const Title = styled.h3`
    
`
const Text = styled.p`
    margin: 14px 0 12px;
`