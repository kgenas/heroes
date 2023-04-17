import React from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { login } from "../../features/counter/loginHero";

export const Login = () =>{
    const navigate = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    const handleLogion = () =>{

        const data = {
            name: 'pedro',                
        };
        dispatch(login(data));
        const lastPath = localStorage.getItem('lasPath') || '/marvel';
        navigate( lastPath, { replace: true });
    };
    return(
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ handleLogion }
            >
                Login
            </button>
        </div>
    )    
}