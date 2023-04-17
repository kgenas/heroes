
import { heroes } from '../data/heroes';
export const getHeroesAll = ( )=>{    
    return heroes.map( hero => hero);
}