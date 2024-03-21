import React from 'react'
import { useRouteError } from "react-router-dom";
import styled from 'styled-components'

type anyObject = { [key: string]: any }
interface ErrorPageProps { className ?: string }

const ErrorPageComp = ({ className }: ErrorPageProps) => {
    const error = useRouteError() as anyObject
    console.error(error);

    return (
        <div className={className}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

const ErrorPage = styled(ErrorPageComp)`
    padding: 32px;
    margin: 0 auto;
    text-align: center;
`

export default ErrorPage