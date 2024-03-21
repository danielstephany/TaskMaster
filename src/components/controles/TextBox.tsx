import React from 'react'
import styled from 'styled-components'
import FormItem from '@src/components/base/FormItem.tsx'
import Label from '@src/components/elements/Label.tsx'

interface textBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean,
    errorMsg?: string
    inputRef?: React.Ref<any>,
    label?: string
}

export type Ref = HTMLInputElement;

const TextBoxComp: React.ElementType = React.forwardRef<Ref, textBoxProps>((
    { 
        className, 
        error,
        errorMsg,
        inputRef, 
        label, 
        id,
        ...others 
    }: textBoxProps,
    ref
) => {

    let extraClasses = ""
    if (error) extraClasses += " text-box--error"

    return (
        <FormItem 
            ref={ref} 
            className={className} 
            error={error} 
            errorMsg={errorMsg}
        >
            {label ? <Label htmlFor={id} error={error} >{label}</Label> : null}
            <input className={"text-box" + extraClasses} id={id} ref={inputRef} {...others}/>
        </FormItem>
    )
})

const TextBox = styled(TextBoxComp)`
    .text-box {
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid #aaa;
        &:focus-visible {
            outline-offset: -1px;
            outline: 2px solid ${({theme}) => theme.colors.primary.main};
        }
        &--error {
            border-color: ${({theme}) => theme.colors.error.main};
            &:focus-visible {
                outline-color: ${({ theme }) => theme.colors.error.main};
            }
        }
    }
`

export default TextBox;