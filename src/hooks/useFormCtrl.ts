import React, {useState} from 'react'

const focusError = () => {
    setTimeout(() => {
        const errorEl = document.querySelector(".text-box--error") as HTMLElement
        console.log(errorEl)
        if (errorEl) errorEl.focus();
    }, 0)
}

type anyObject = { [key: string]: any }

interface formCtrlProps {
    initialValues: anyObject
    validate: (values: anyObject, storedValues?: anyObject) => anyObject
}

const useFormCtrl = ({
    initialValues,
    validate
}: formCtrlProps) => {
    const [values, setValues] = useState<anyObject>(initialValues)
    const [errors, setErrors] = useState<anyObject>({})

    const handleChange = (e: { target: { name: string, value: string } }) => {
            setValues({ ...values, [e.target.name]: e.target.value})
    }

    const handleBlur = (e: { target: { name: string, value: string } }) => {
        const name = e.target.name,
        value = e.target.value;

        setValues({ ...values, [name]: value})
        const existingErrors = {...errors}
        const newErrors = validate({ [name]: value })
        if (existingErrors[name] && !newErrors[name]){
            delete existingErrors[name]
        }

        setErrors({...existingErrors, ...newErrors})
    }

    const isValidValues = ():boolean => {
        const errors = validate(values)
        setErrors(errors)
        const isValid = Object.keys(errors).length === 0

        if (!isValid) focusError()
        return isValid
    }


    return {
        initialValues,
        handleChange,
        handleBlur,
        isValidValues,
        values,
        errors
    }
}

export default useFormCtrl