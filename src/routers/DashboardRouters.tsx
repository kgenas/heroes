import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DcScreen } from '../components/dc';
import { HeroScreen } from '../components/hero/HeroScreen';
import { DCMarvelScreen, MarvelScreen } from '../components/marvel';
import { SearchScreen } from '../components/search';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouters = () =>{
    return (
        <>
            <Navbar/>
            <div className='container'>                
            </div>
            <Routes>
                <Route path='marvel' element={<MarvelScreen/>}/>
                <Route path='dc' element={<DcScreen/>}/>
                <Route path='search' element={<SearchScreen/>}/>
                <Route path='hero/:heroeId' element={<HeroScreen/>}/>
                <Route path='/' element={<DCMarvelScreen/>}/>                
            </Routes>
        </>
    )
}