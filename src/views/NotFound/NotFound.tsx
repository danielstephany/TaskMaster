import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const NotFoundComp = () => {
    return (
        <div>
            <h2>Page not found.</h2>
            <Link to="/">Return Home</Link>
        </div>
    )
}

const NotFound = styled(NotFoundComp)`

`

export default NotFound