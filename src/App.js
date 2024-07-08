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
import Room from './components/pages/Room/Room.jsx';
const tg = window.Telegram.WebApp

function App() {
  const [header, setHeader] = useState(false)
  const [userData, setUserData] = useState(null)
  useEffect(()=>{
    setHeader(false)
    tg.ready()
    tg.expand()
    tg.setHeaderColor('#000000')
   
    const user= tg.initDataUnsafe?.user;

   
    setUserData(user)
  },[])



  return (
    <Router>
      <div className='main'>
         {header ? <Header userData={userData}/> : ''}
        <Routes>
          <Route exact path={'/'} userData={userData} element={<MainPage setHeader={setHeader}/>} />
          <Route exact path={'/page2'} userData={userData} element={<PlayPages setHeader={setHeader} userData={userData}/>} />
          <Route exact path={'/room'} userData={userData} element={<Room setHeader={setHeader} userData={userData}/>} />
          
        </Routes>
  
        <Menu setHeader={setHeader}/>
      </div>
    </Router>


  );
}

export default App;
