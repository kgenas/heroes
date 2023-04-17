import { HeroList ,HeroAll } from "../hero/HeroList";

export const MarvelScreen = () => {

    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr/>
            <HeroList publisher ='Marvel Comics'/>
        </div>
    );
};

export const DCMarvelScreen = () => {

    return (
        <div>
            <h1>HeroesScreen</h1>
            <hr/>
            <HeroAll/>
        </div>
    );
};