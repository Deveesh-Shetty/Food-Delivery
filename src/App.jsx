import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./routes/Header/Header.route";
import Home from "./routes/Home/Home.route";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                {/* <Route
                    path="/calculator"
                    element={isAuthenticated ? <CalculatorGraph /> : <Navigate to="/" />}
                />
                <Route
                    path="/account"
                    element={isAuthenticated ? <Account /> : <Navigate to="/" />}
                />
                <Route
                    path="/admin"
                    element={
                        isAuthenticated && user.role === "admin" ? <Admin /> : <Navigate to="/" />
                    }
                /> */}
            </Route>
            <Route
                path="*"
                element={
                    <>
                        <Header />
                        <p>There is nothing here!</p>
                    </>
                }
            />
        </Routes>
    );
};

export default App;
