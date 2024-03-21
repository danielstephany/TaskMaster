import React from 'react'
import styled from 'styled-components'

interface labelProps extends React.InputHTMLAttributes<HTMLLabelElement> {
    error: boolean
}

const LabelComp: React.ElementType = ({ error, ...others }: labelProps) => {
    return <label {...others}/>
}

const Label = styled(LabelComp)`
    display: block;
    color: ${({theme, error}) => error ? theme.colors.error.main : theme.colors.type.main};
    font-size: 1em;
    margin-bottom: 6px;
`

export default Label