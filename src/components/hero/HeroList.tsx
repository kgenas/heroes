import { useMemo } from "react"
import { getHeroesAll } from "../../selectors/getHeroesAll";
import { getHeroesPublisher } from "../../selectors/getHeroesPublisher"
import { HeroCard } from "./HeroCard";

interface valueProps {
    publisher:string;
}
export const HeroList = ( {publisher}:valueProps ) =>{


    const heroes = useMemo( () => getHeroesPublisher( publisher ),[ publisher ]);
    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id}{...hero}/>              
                ))
            }
        </div>
    );
}

export const HeroAll = () =>{


    const heroes = getHeroesAll();
    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id}{...hero}/>              
                ))
            }
        </div>
    );
}