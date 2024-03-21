import React from "react"
import styled, {keyframes} from 'styled-components'

interface centeredLoadingProps {
    className?: string,
    baseWidth?: string
    baseHeight?: string
}

const CenteredLoadingComp = ({ className, baseWidth, baseHeight }: centeredLoadingProps) => {
    return (
        <div className={className}>
            <div className="centered-loading__bar"></div>
        </div>
    )
}

const slide = keyframes`
    from {transform: translateX(0);}
    to {transform: translateX(200%);}
`

const CenteredLoading = styled(CenteredLoadingComp)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: ${({ baseWidth }) => baseWidth ? baseWidth : "100%"};
    max-width: 100%;
    height: ${({ baseHeight }) => baseHeight ? baseHeight : "auto"};
    max-height: 100%;
    margin: 0 auto;
    .centered-loading__bar {
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.primary.light};
        border-radius: 4px;
        height: 8px;      
        position: relative;  
        overflow: hidden;
        &::before {
            background-color: ${({theme}) => theme.colors.primary.light};
            content: "";
            width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            opacity: 0.4;
        }
        &::after {
            background-color: ${({theme}) => theme.colors.primary.light};
            content: "";
            width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: -100%;
            animation: ${slide} 2s ease 0s infinite;
        }
    }
`

export default CenteredLoading