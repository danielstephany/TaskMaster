import React from 'react'
import styled from 'styled-components'

interface surfaceProps { baseWidth?: string, children?: React.ReactNode }

const SurfaceComp = ({ baseWidth, ...others }: surfaceProps): JSX.Element => {
    return <div {...others}/>
}
 
const Surface = styled(SurfaceComp)`
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.bg.light};
    padding: ${({theme}) => theme.spacing.main}px;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
    width: ${({ baseWidth }) => baseWidth ? baseWidth : "auto"};
    max-width: 100%;
`

export default Surface