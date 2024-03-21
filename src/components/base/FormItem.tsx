import React from 'react'
import styled from 'styled-components'

interface FormItemProps extends React.InputHTMLAttributes<HTMLDivElement> {
    error?: boolean,
    errorMsg?: string,
    fullWidth?: boolean
} 

export type Ref = HTMLDivElement;

const FormItemComp: React.ElementType = React.forwardRef<Ref, FormItemProps>((
    {
        className, 
        children, 
        error, 
        errorMsg,
        fullWidth,
        ...others 
    }: FormItemProps, 
    ref
) => {

    let extraClasses = ""
    if (error) extraClasses += " form-item--error"

    return (
        <div className={className + extraClasses} ref={ref} {...others}>
            {children}
            {errorMsg && error ? <span className='form-ctrl__error-text'>{errorMsg}</span> : null}
        </div>
    )
})

const FormItem = styled(FormItemComp)`
    display: inline-flex;
    flex-direction: column;
    width: ${({ fullWidth = true }) => fullWidth ? "100%" : "auto"};
    margin-bottom: 16px;
    .form-ctrl__error-text {
        display: block;
        color: ${({theme}) => theme.colors.error.main};
        margin-top: 4px;
    }
`

export default FormItem