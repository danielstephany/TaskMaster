import React, { Suspense } from 'react'
import styled from 'styled-components'
import TopBar from '@src/components/modules/TopBar.tsx'
import CenteredLoading from '../modules/CenteredLoading.tsx';
import { Outlet } from "react-router-dom";

interface IntroLayoutProps {
    className?: string,
    children?: React.ReactNode
}

const IntroLayoutComp = ({ children, className }: IntroLayoutProps) => {

    return (
        <div className={className}>
            <div className="intro-Layout__topBar">
                <TopBar/>
            </div>
            <div className="intro-Layout__main">
                <Suspense fallback={<CenteredLoading baseHeight='400px'/>}>
                    {children || <Outlet />}
                </Suspense>
            </div>
        </div>
    )
}

const IntroLayout = styled(IntroLayoutComp)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    .intro-Layout {
        &__topBar {

        }
        &__main {            
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: ${({ theme }) => theme.colors.bg.main};
            padding: ${({theme}) => theme.spacing.main}px;
        }
    }
`

export default IntroLayout