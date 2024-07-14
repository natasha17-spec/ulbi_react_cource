import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainLazyPage} from "./pages/MainPage/MainPage.async";
import {AboutLazyPage} from "./pages/AboutPage/AboutPage.async";

import {useTheme} from "./theme/useTheme";


import './styles/index.scss'
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app' ,[theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={'/home'}>
                Main
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <Suspense fallback={'Load'}>
                <Routes>
                    <Route path='*' element={<MainLazyPage/>}/>
                    <Route path='/home' element={<MainLazyPage/>}/>
                    <Route path='/about' element={<AboutLazyPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;