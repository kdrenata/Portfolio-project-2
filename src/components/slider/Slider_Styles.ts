import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";


const Slider = styled.div`
    max-width: 500px;
`

const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`
`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }
        
        &.active { //видео про комбинаторы
            background-color: ${theme.colors.accentBg};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}