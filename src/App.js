import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './components/pages/MainPage/MainPage.jsx';

import Menu from './components/menu/Menu.jsx';
import Header from './components/header/Header.jsx';
import PlayPages from './components/pages/PlayPages/PlayPages.jsx';
function App() {
  return (
    <Router>
      <div className='main'>
        <Header/>
        <Routes>
          <Route exact path={'/'} element={<MainPage />} />
          <Route exact path={'/page2'} element={<PlayPages />} />
        </Routes>
        <Menu />
      </div>
    </Router>


  );
}

export default App;
