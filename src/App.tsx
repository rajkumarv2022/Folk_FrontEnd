import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import SignUp from './components/SignUp'
import LandinPage from './components/LandinPage'
import LoginPage from './components/LoginPage'
import ASignupPage from './components/ASigupPage'
import ALoginpage from './components/ALoginpage'
import MainPage from './components/MainPage'
import AmainPage from './components/AmainPage'

export default function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' Component={LandinPage}></Route>
          <Route path='/signup' Component={SignUp}></Route>
          <Route path='/login' Component={LoginPage}></Route>
          <Route path='/asignup' Component={ASignupPage}></Route>
          <Route path='/alogin' Component={ALoginpage}></Route>
          <Route path='/login/main' Component={MainPage}></Route>
          <Route path='/alogin/amain' Component={AmainPage}></Route>
        </Routes>
      </Router>

  )
}
