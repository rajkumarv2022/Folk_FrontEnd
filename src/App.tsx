import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import SignUp from './components/SignUp'
import LandinPage from './components/LandinPage'
import LoginPage from './components/LoginPage'

export default function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' Component={LandinPage}></Route>
          <Route path='/signup' Component={SignUp}></Route>
          <Route path='/login' Component={LoginPage}></Route>
        </Routes>
      </Router>

  )
}
