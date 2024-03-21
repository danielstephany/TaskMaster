import React from "react"
import Button from "@src/components/controles/Button.tsx"
import Btn from "@src/components/controles/Btn.tsx"
import Surface from '@src/components/elements/Surface.tsx'
import ButtonContainer from "@src/components/elements/ButtonContainer.tsx"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <Surface baseWidth="400px">
            <h2>Whelcome to Task Master, log in or sign up to get started.</h2>
            <ButtonContainer justify="center">
                <Button variant="contained">Login</Button>
                <Btn component={Link} to="/signup" variant="contained">Sign Up</Btn>
            </ButtonContainer>
        </Surface>
    )
}

export default Home