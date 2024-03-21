import React, {FormEvent, useContext} from 'react'
import {RootContext} from "@src/components/data/RootContext.tsx"
import Surface from '@src/components/elements/Surface.tsx'
import styled from 'styled-components'
import Button from '@src/components/controles/Button.tsx'
import TextBox from '@src/components/controles/TextBox.tsx'
import useFormCtrl from '@src/hooks/useFormCtrl.ts'

interface signupProps {
    className?: string
}

const validate = (values: {[key: string]: any}) => {
    const errors: { [key: string]: any } = {}

    Object.entries(values).forEach(([key, value]) => {
        if(!value){
            errors[key] = true
        }
    })

    return errors
}

const SignupComp = ({ className }: signupProps) => {
    const {setUser, user} = useContext(RootContext);
    const formCtrl = useFormCtrl({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
        },
        validate
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log(formCtrl.values)
        console.log(formCtrl.isValidValues())
        setUser(formCtrl.values)
    }
    console.log(user)
    return (
        <div className={className}>
            <Surface baseWidth="400px">
                <h2>Create Your Account</h2>
                <div>
                    <form onSubmit={handleSubmit} noValidate>
                        <TextBox 
                            label="First Name"
                            id="firstName"
                            name="firstName"
                            value={formCtrl.values.firstName}
                            onChange={formCtrl.handleChange}
                            onBlur={formCtrl.handleBlur}
                            error={formCtrl.errors.firstName}
                        />
                        <TextBox 
                            label="Last Name"
                            id="lastName"
                            name="lastName"
                            value={formCtrl.values.lastName}
                            onChange={formCtrl.handleChange}
                            onBlur={formCtrl.handleBlur}
                            error={formCtrl.errors.lastName}
                        />
                        <TextBox 
                            label="Email"
                            id="email"
                            name="email"
                            value={formCtrl.values.email}
                            onChange={formCtrl.handleChange}
                            onBlur={formCtrl.handleBlur}
                            error={formCtrl.errors.email}
                        />
                        <TextBox 
                            label="Password"
                            id="password"
                            name="password"
                            value={formCtrl.values.password}
                            onChange={formCtrl.handleChange}
                            onBlur={formCtrl.handleBlur}
                            error={formCtrl.errors.password}
                        />
                        <TextBox 
                            label="Password"
                            id="password2"
                            name="password2"
                            value={formCtrl.values.password2}
                            onChange={formCtrl.handleChange}
                            onBlur={formCtrl.handleBlur}
                            error={formCtrl.errors.password2}
                        />           
                        <div>
                            <Button variant='contained' type="submit" >Submit</Button>
                        </div>
                    </form>
                </div>
            </Surface>
        </div>
    )
}

const Signup = styled(SignupComp)`
    .form-item {
        margin-bottom: 16px;
        label > span {
            display: block;
            margin-bottom: 4px
        }
        input {
            width: 100%;
        }
    }
`

export default Signup