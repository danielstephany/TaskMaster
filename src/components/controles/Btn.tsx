import React from 'react'
import styled, {keyframes} from 'styled-components'
import { RefreshCw } from "react-feather"

interface getColorProps {
    color?: "primary" | "secondary",
    theme?: any,
}

type btnProps<t extends React.ElementType> = {
    component?: t | "a" | "button",
    children?: React.ReactNode,
    className?: string,
    color?: "primary" | "secondary",
    loading?: boolean,
    theme?: any,
    variant?: string,
    forwardedRef?: React.ForwardedRef<Element> | null,
    disabled?: boolean
} & React.ComponentPropsWithoutRef<t>

const BtnComp = <t extends React.ElementType = "button",>({
    component="button",
    children,
    className,
    color = "primary",
    loading,
    variant,
    ...others
}: btnProps<t>) => {
    let Component = component
    let classes = ""

    if (variant === "contained") {
        classes = "button--contained"
    }

    return (
        <div className={className}>
            <Component className={classes} {...others}>
                {children}
            </Component>
            {loading ? <span className="button__load-icon"><RefreshCw /></span> : null}
        </div>
    )
}

const getColor = ({ color = "primary", theme }: getColorProps, type: string = "main"): string => {
    if (color && theme?.colors[color][type]) return theme.colors[color][type]
    return theme.colors.primary.main
}

const rotate = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

const Btn = styled(BtnComp)`
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
        padding: ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing.small}px;
        cursor: pointer;    
        position: relative;
        z-index: 1;
        overflow: hidden;
        vertical-align: middle;
        text-decoration: none;
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

export default Btn