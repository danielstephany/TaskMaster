import React, { Children } from 'react'
import styled from 'styled-components'

type componentType = "a" | "button"

interface buttonProps {
    children?: JSX.Element | string,
    className?: string,
    component?: componentType,
    variant?: string,
    color?: "primary" | "secondary"
    theme: any
}

const getComponent = (c?: componentType): React.ReactNode => {
    if(typeof c === "string") return <a></a>
    if(typeof(c) === "object") return c
}

const ButtonComp = ({ 
    children,
    className,
    component,
 }: buttonProps) => {

    let Component = component || "button"


    return (
        <Component className={className}>
            {children}
        </Component>
    )
}

const getColor = ({ color, theme }: buttonProps): string => {
    if (color && theme?.colors[color]?.main) return theme.colors[color].main
    return theme.colors.primary.main
}

const Button = styled(ButtonComp)`
    display: inline-block;
    color: ${getColor};
    font-weight: 500;
    ouline: none;
    background: transparent;
    border: none;
`

Button.defaultProps = {
    color: "primary"
}

export default Button