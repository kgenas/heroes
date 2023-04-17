import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () =>{

    //* parametro de la ruta del navegador
    const { heroeId } = useParams();
    const navigate = useNavigate();
    interface valuePros{
        id:string;
        superhero:string;
        alter_ego:string;
        first_appearance:string;
        characters:string;
        publisher:string;
    }

    const hero = useMemo( () => getHeroById( heroeId ),[ heroeId ] )
    const handleReturn = () =>{
        navigate(-1);//*return previous page
    }
    if(!hero){
        return <Navigate to='/'/> //* return origin state page
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }:valuePros = hero;
    
    return(
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    src = { require(`../../assets/${id}.jpg`) }
                    alt = { superhero }
                    className ='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
            <div className='col-8'>
                    <h3>{ superhero }</h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Alter ego:</b>{ alter_ego }</li>
                        <li className='list-group-item'><b>Publisher:</b>{ publisher }</li>
                        <li className='list-group-item'><b>First Appearance:</b>{ first_appearance }</li>
                    </ul>
                    <h5 className='my-3'>Characters</h5>
                    <p>{ characters }</p>
                    <button
                        className='btn btn-outline-info'
                        onClick={ handleReturn }
                    >
                        Return
                    </button>
            </div> 
        </div>
    );
};