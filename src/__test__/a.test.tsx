import React from "react";
import { renderWithProviders } from "../utils/test-utils";
import { HeroCard } from "../components/hero/HeroCard";
//import { DcScreen } from '../components/dc/index';

describe('ResultModal',() =>{

    test('Renders',() =>{
        renderWithProviders(<HeroCard
        
            key={"dc-batman"}
            id={"dc-batman"}
            superhero={"Batman"}
            alter_ego={"Bruce Wayne"}
            first_appearance={"Detective Comics #27"}
            characters={"Bruce Wayne"}
            // superhero:string;
            // alter_ego:string;
            // first_appearance:string;
            //characters:string        
        />);     
    });
})