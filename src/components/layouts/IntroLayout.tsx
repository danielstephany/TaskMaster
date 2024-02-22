import React from 'react'
import styled from 'styled-components'
import TopBar from '@src/components/modules/TopBar.tsx'

interface IntroLayoutProps {
    className?: string,
    children: React.ReactNode
}

const IntroLayoutComp = ({ children, className }: IntroLayoutProps) => {

    return (
        <div className={className}>
            <div className="intro-Layout__topBar">
                <TopBar/>
            </div>
            <div className="intro-Layout__main">
                {children}
            </div>
        </div>
    )
}

const IntroLayout = styled(IntroLayoutComp)`
    .intro-Layout {
        dislay: flex;
        flex-direction: column;

        overflow: hidden;
        height: 100vh;
        &__topBar {

        }
        &__main {
            flex-grow: 1;
        }
    }
`

export default IntroLayout