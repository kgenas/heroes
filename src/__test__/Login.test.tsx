import React from 'react';
import { fireEvent, screen } from "@testing-library/react";
import { setupStore } from '../app/store';
import { login } from '../features/counter/loginHero';
import { renderWithProviders } from '../utils/test-utils';
import { Login } from '../components/login/index';

describe('Login',()=>{
    test('Click',()=>{
        const store = setupStore();
        store.dispatch(login({
            name:'Pedro'
        }))                   
        renderWithProviders(<Login/>,{ store });     
        //eslint-disable-next-line 
        fireEvent.click(screen.getAllByText(/Login/)[1])
        //eslint-disable-next-line    
        screen.debug();
    })
    test('Login Snapshot',() =>{
        const { baseElement } = renderWithProviders(<Login/>);
        expect( baseElement ).toMatchSnapshot();
      })
})