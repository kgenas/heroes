import { Link } from 'react-router-dom';

//* para que no de error en require.context
//? npm i -D @types/webpack-env
interface valuePros{
    id:string;
    superhero:string;
    alter_ego:string;
    first_appearance:string;
    characters:string
}

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}:valuePros) =>{    
    return(
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ require(`../../assets/${id}.jpg`) } className ='card-img' alt = { superhero } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-litle">{ superhero }</h5>
                            <p className="card-test">{ alter_ego }</p>
                            {
                                (alter_ego !== characters )&&
                                <p className="text-muted">{ characters }</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}