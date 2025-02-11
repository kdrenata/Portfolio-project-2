import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './Skills_Styles.ts'

const skillData = [
    {
        iconId: 'code',
        title: 'HTML5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        iconId: 'css',
        title: 'CSS3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        iconId: 'react',
        title: 'REACT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        iconId: 'typeScript',
        title: 'TYPE SCRIPT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        iconId: 'styledComponents',
        title: 'STYLE COMPONENTS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    },
    {
        iconId: 'figma',
        title: 'WEB DESIGN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    }
]


export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justufy={'space-between'}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

