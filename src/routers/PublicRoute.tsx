import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../app/store';

export const PublicRouter = ({ children }:any) => {
    const { logged } = useSelector( ( state:RootState ) =>state.hero);
    console.log(logged,'hola');
    return logged ? <Navigate to="/marvel"/> : children
}