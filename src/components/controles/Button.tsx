import React from 'react'
import styled, { keyframes } from 'styled-components'
import {RefreshCw} from "react-feather"

type componentType = "a" | "button"

interface buttonBaseProps {
    children?: React.ReactNode,
    className?: string,
    color?: "primary" | "secondary",
    component?: componentType,
    loading?: boolean,
    theme?: any,
    variant?: string,
    forwardedRef?: React.ForwardedRef<Element> | null,
    disabled?: boolean
}

interface aProps extends buttonBaseProps {
    href?: string,
    target?: string
}
interface buttonProps extends buttonBaseProps {
    type?: string
}

const ButtonBase = <t extends buttonBaseProps>({ 
    children,
    className,
    component = "button",
    color = "primary",
    loading,
    variant,
    ...others
}: t) => {
    let Component = component
    let classes = ""

    if(variant === "contained"){
        classes = "button--contained"
    }

    const props = others

    return (
        <div className={ className }>
            <Component className={classes} {...others}>
                {children}
            </Component>
            {loading ? <span className="button__load-icon"><RefreshCw /></span> : null}
        </div>
    )
}

const ButtonComp = React.forwardRef((
    { component = "button", ...others }: buttonProps | aProps, 
    ref: React.ForwardedRef<Element>
) => {
    const props = {
        component,
        ...others
    }
    if (ref) props.forwardedRef = ref

    if (component === "a") {
        return <ButtonBase<aProps> {...props} />
    } else if (component === "button") {
        return <ButtonBase<buttonProps> {...props} />
    }

})

const getColor = ({ color = "primary", theme }: buttonProps, type: string = "main"): string => {
    if (color && theme?.colors[color][type]) return theme.colors[color][type] 
    return theme.colors.primary.main
}

const rotate = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

const Button = styled(ButtonComp)`
    color: ${getColor};
    display: inline-flex;
    position: relative;
    button,
    a {
        border-radius: 4px;
        display: inline-block;        
        font-weight: 500;
        outline: none;
        background: transparent;
        border: none;
        padding: ${({ theme }) => theme.spacing[2]}px ${({theme}) => theme.spacing.small}px;
        cursor: pointer;    
        position: relative;
        z-index: 1;
        overflow: hidden;
        vertical-align: middle;
        &::before {
            display: block;
            content: "";
            background-color: ${getColor};
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.2s ease;
            z-index: -1;
        }
        &:hover::before {
            opacity: 0.25;
        }
        &:disabled {
            opacity: 0.25;
            cursor: not-allowed;
        }
        &.button--contained {
            background-color: ${getColor};
            color: #fff;
            transition: background-color 0.2s ease;
            &:hover {
                background-color: ${(props) => getColor(props, "dark")}
            }
            &::before {
                display: none;
            }
        }
    }
    .button__load-icon {
        color: ${getColor};
        display: inline-flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg {            
            animation: ${rotate} 1s linear 0s infinite;
        }
    }
`

export default Button