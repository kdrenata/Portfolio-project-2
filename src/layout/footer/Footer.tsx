import React from 'react';
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {S} from './Footer_Styles.ts'

const socialItemsData = [
    {
        iconId: 'instagram'
    },
    {
        iconId: 'telegram'
    },
    {
        iconId: 'vkLogo'
    },
    {
        iconId: 'linkedin'
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Renata</S.Name>
                <S.SocialList>

                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2025 Renata Kudinova, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
