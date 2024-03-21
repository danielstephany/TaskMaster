import React from 'react'
import {
    RouterProvider,
} from "react-router-dom";
import mainRouter from "@src/mainRouter.tsx"

const App = () => {
    return (
        <RouterProvider router={mainRouter} />
    )
}

export default App