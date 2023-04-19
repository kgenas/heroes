import { HeroList } from "../components/hero/HeroList"
import { renderWithProviders } from "../utils/test-utils"
import { screen } from "@testing-library/react";

describe('HeroList',() =>{
    test('Render HeroList',() =>{
        renderWithProviders(<HeroList
            publisher="DC Comics" 
        />)
         //eslint-disable-next-line          
         screen.debug();
    });

    test('HeroList Snapshot',() =>{
      const { baseElement } = renderWithProviders(<HeroList
        publisher="DC Comics" 
    />)  ;
       expect( baseElement ).toMatchSnapshot();
    })

})