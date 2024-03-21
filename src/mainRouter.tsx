
import React, { lazy } from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";

import IntroLayout from '@src/components/layouts/IntroLayout.tsx'
const Signup = lazy(() => import('@src/views/Signup/index.tsx'));
const ErrorPage = lazy(() => import('@src/views/ErrorPage/index.tsx'));
const NotFound = lazy(() => import('@src/views/NotFound/index.tsx'));
const Home = lazy(() => import('@src/views/Home/index.tsx'));
const CenteredLoading = lazy(() => import('@src/components/modules/CenteredLoading.tsx'));

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <IntroLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/*",
                element: <NotFound />,
            },
        ]
    },
    
]);

export default mainRouter