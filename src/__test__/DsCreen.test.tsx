import { renderWithProviders } from "../utils/test-utils";
import { screen } from "@testing-library/react";
import { DcScreen } from "../components/dc";

describe('DcScreen',() =>{

    test('Renders DcScreen',() =>{
 
        renderWithProviders(<DcScreen/>)
        const value = screen.getByText(/DC Screen/i);
        expect( value ).toBeInTheDocument();
        //eslint-disable-next-line          
        screen.debug();
    });
    test('DcScreen Snapshot', () =>{
       const { baseElement } = renderWithProviders(<DcScreen/>)  ;
       expect( baseElement ).toMatchSnapshot();
    })
})