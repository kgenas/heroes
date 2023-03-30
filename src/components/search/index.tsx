import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'; //*  npm install query-string
import { useState, useMemo } from 'react';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from "../hero/HeroCard";
export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const { q ='' } = queryString.parse(location.search);
    const [ values ,setValues] = useState({ searchText:q});
    const { searchText } = values;
    const handleInputChange =({ target }:any ) =>{

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    const heroesFilter = useMemo( ()=> getHeroesByName(q as string),[q]);
    const handleSearch = (e:any)=>{
        e.preventDefault();
        navigate(`?q=${ searchText }`)
    }
    return(
        <>
            <h1>Busqueda</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr/>
                    <form onSubmit={ handleSearch }>
                        <input
                            type='text'
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value ={ searchText as string}
                            onChange ={ handleInputChange }
                        />
                        <button
                            className="btn btn-outline-primary mt-1"
                            type='submit'
                        >
                            Buscar ....
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        ( q==='' ) 
                            ? <div className="alert alert-info">Buscar un heroe</div>
                            : ( heroesFilter.length === 0)
                                &&<div className="alert alert-danger">No hay resultados:{ q }</div>
                    }
                    {
                        heroesFilter.map( hero =>(
                            <HeroCard
                                key={ hero.id}
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}