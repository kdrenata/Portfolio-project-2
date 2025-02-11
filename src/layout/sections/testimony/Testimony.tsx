import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from '../skills/Skills_Styles.ts'

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
    min-height: 50vh;
    
    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`