import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { logout } from "../../features/counter/loginHero";

export const Navbar = () => {

    const dispatch:AppDispatch = useDispatch();
    const { name } = useSelector( ( state:RootState ) =>state.hero);    
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login',{
            replace: true
        });
    }

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                Heroes
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className= { ( { isActive }) => 'nav-item nav-link' + ( isActive ? 'active':'')}
                        to='/marvel'
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                       className={({ isActive }) => 'nav-item nav-link' + ( isActive ? 'active':'')}
                       to ='/dc'
                    >
                        DC
                    </NavLink>
                    <NavLink
                       className={({ isActive }) => 'nav-item nav-link' + ( isActive ? 'active':'')}
                       to ='/search'
                    >
                        Search
                    </NavLink>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-info">
                            { name }
                        </span>
                        <button
                            className="btn btn-primary"
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}