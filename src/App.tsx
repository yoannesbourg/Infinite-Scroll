import React from 'react';

import Searchbar from './components/Searchbar/Searchbar';

import './App.scss';
import logo from './img/logo.png';

const App = (): JSX.Element => {
    const handleSearch = () => {
        return;
    };
    return (
        <div>
            <div className="container header">
                <img className="header__logo" src={logo} alt="logo" />
                <Searchbar handleSearch={handleSearch} />
            </div>

            <div className="body"></div>
        </div>
    );
};

export default App;
