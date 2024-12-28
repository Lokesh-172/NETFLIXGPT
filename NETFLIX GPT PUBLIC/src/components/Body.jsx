import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./MoviePage";
import GPTSearch from "./GPTSearch";
import ErrorPage from "./ErrorPage";
import AboutUs from "./FooterPages/AboutUs";
import FAQ from "./FooterPages/FAQ";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            errorElement: <ErrorPage/>
        },
        {
            path: "/browse",
            element: <Browse />,
            errorElement: <ErrorPage/>
        },
        {
            path: "/browse/:movieTitle/:movieID",
            element: <MoviePage />,
            errorElement: <ErrorPage/>
        },
        {
            path: "/browse/gpt",
            element: <GPTSearch />,
            errorElement: <ErrorPage/>
        },
        {
            path: "/footer/AboutUs",
            element: <AboutUs/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/footer/FAQ",
            element:<FAQ/>,
            errorElement: <ErrorPage/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
