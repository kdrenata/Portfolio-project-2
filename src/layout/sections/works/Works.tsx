import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/proj1.png";
import timerImg from "../../../assets/images/proj2.png";
import {Container} from "../../../components/Container.ts";
import {S} from './Works_Styles.ts'

const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        title: 'Timer',
        src: timerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justufy={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    {workData.map((w) => {
                        return <Work title={w.title}
                                     src={w.src}
                                     text={w.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
