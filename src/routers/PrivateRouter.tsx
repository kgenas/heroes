import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../app/store";



export const PrivateRouter = ({ children }:any) => {
    const { logged } = useSelector( ( state:RootState ) =>state.hero);    
    const { pathname, search } = useLocation();
    localStorage.setItem( 'lasPath', pathname + search );
    return logged ? children: <Navigate to='/login'/>
};
