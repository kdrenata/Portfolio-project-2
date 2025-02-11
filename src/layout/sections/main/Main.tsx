import React from 'react';
import photo from "../../../assets/images/photo2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from './Main_Styles.ts'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justufy={'space-around'} wrap={'wrap'}>
                    <S.BlockWrapper>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Renata Kudinova</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </S.BlockWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=''/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

