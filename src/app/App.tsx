import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {useTheme} from "app/providers/ThemeProviders";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

import {classNames} from "shared/lib/classNames/classNames";

import './styles/index.scss'


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
                    <Route path='*' element={<MainPage/>}/>
                    <Route path='/home' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;