import React, { useEffect, useState } from 'react';
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

const tg = window.Telegram.WebApp

function App() {
  const [header, setHeader] = useState(false)

  useEffect(()=>{
    setHeader(false)
    tg.ready()
    tg.expand()
    tg.setHeaderColor('#000000')

  },[])



  return (
    <Router>
      <div className='main'>
         {header ? <Header/> : ''}
        <Routes>
          <Route exact path={'/'} element={<MainPage setHeader={setHeader} />} />
          <Route exact path={'/page2'} element={<PlayPages setHeader={setHeader} />} />
        </Routes>
        <Menu setHeader={setHeader}/>
      </div>
    </Router>


  );
}

export default App;
