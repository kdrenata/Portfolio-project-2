// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

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
    background-color: #e1a983;
    min-height: 20vh;
`
const Name = styled.span`
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`