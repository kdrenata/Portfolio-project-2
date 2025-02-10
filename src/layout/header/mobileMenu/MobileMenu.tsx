import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {useState} from "react";


export const MobileMenu = (props: {menuItems: Array<string>}) => {
    const [menuIsOpen, setMenuIsOpen ] = useState(false)
    const onBurgerBtnClick = () => { setMenuIsOpen( !menuIsOpen ) }
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href=''>
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};
const StyledMobileMenu = styled.nav`
    display: none;
    
    
    @media ${theme.media.tablet} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`


const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    z-index: 99999999;
    
    width: 200px;
    height: 200px;
    top: -105px;
    right: -80px;

    span {
        display: block;
        width: 36px;
        height: 4px;
        background-color: ${theme.colors.accentBg};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(192, 102, 234, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 4px;
            background-color: ${theme.colors.accentBg};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}

        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 4px;
            background-color: ${theme.colors.accentBg};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
        @media ${theme.media.tablet} {
            left: 60px;
            bottom: 48px;
        }


        @media ${theme.media.mobile} {
            left: 58px;
            bottom: 50px;
        }
    }

`

const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    color: transparent;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.accentBg};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accentBg};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
        
    }
    
    &:hover {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`
