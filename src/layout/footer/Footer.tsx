// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";
import {font} from "../../styles/Common.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Renata</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'instagram'} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'telegram'} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'vkLogo'} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'linkedin'} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2025 Renata Kudinova, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.10);
    width: 35px;
    height: 35px;   // ширина и высота не применяется т.к ссылка строчный элемент. Меняем расположение с помощью дисплей  с строчного на флекс
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.accentBg};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`
const Copyright = styled.small`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
`