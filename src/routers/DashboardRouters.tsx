import { Route, Routes } from 'react-router-dom';
import { DcScreen } from '../components/dc';
import { MarvelScreen } from '../components/marvel';
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
            </Routes>
        </>
    )
}