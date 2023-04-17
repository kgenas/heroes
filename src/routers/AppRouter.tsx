import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PublicRouter } from "./PublicRoute";
import { Login } from '../components/login/index';
import { PrivateRouter } from './PrivateRouter';
import { DashboardRouters } from "./DashboardRouters";

export const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                {/*en el navegador agregar login */}
                <Route path="/login" element ={
                    <PublicRouter>
                        <Login/>
                    </PublicRouter>
                }/>
                {/*en el navegador no hay una url definida asigna una o ingresa a otra serie de url */}
                <Route path="/*" element = {
                    <PrivateRouter>   
                        <DashboardRouters/>                     
                    </PrivateRouter>
                }
                />     
            </Routes>
        </BrowserRouter>        
    );
};