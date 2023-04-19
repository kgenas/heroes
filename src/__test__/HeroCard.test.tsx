
import { HeroCard } from "../components/hero/HeroCard";
import { renderWithProviders } from "../utils/test-utils";
import { screen } from "@testing-library/react";
describe('HeroCard',() =>{
    test('Render HeroCard',() =>{
        renderWithProviders(<HeroCard        
            key={"dc-batman"}
            id={"dc-batman"}
            superhero={"Batman"}
            alter_ego={"Bruce Wayne"}
            first_appearance={"Detective Comics #27"}
            characters={"Bruce Wayne"}    
        />);
        //eslint-disable-next-line          
        screen.debug();
    })
    test('HeroCard Snapshot',() =>{
        const { baseElement } =
        renderWithProviders(<HeroCard        
            key={"dc-batman"}
            id={"dc-batman"}
            superhero={"Batman"}
            alter_ego={"Bruce Wayne"}
            first_appearance={"Detective Comics #27"}
            characters={"Bruce Wayne"}    
        />);
        expect( baseElement ).toMatchSnapshot();
    })
    test('click HeroCard',() =>{
        renderWithProviders(<HeroCard        
            key={"dc-batman"}
            id={"dc-batman"}
            superhero={"Batman"}
            alter_ego={"Bruce Wayne"}
            first_appearance={"Detective Comics #27"}
            characters={"Bruce Wayne"}    
        />);
        //eslint-disable-next-line          
        expect(screen.getByRole('link',{ name:'Mas...'})).toHaveAttribute('href','/hero/dc-batman');
    })
})