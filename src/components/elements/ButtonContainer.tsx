import React from 'react'
import styled from 'styled-components'

interface ButtonContainerProps {
    justify?: "flex-start" | "center" | "flex-end" | "space-between"
    children?: React.ReactNode
}

const ButtonContainerComp = ({ justify, ...others }: ButtonContainerProps) => {
    return <div {...others} />
}

const ButtonContainer = styled(ButtonContainerComp)`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify }) => justify ? justify : "flex-start" };
    > a,
    > button,
    > div {
        margin-right: 24px;
        &:last-child,
        &:only-child {
            margin-right: 0
        }   
    }
`

export default ButtonContainer