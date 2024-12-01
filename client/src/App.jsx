import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start'
import UserLogin from './pages/Userlogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSingnup from './pages/CaptainSingnup';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogut from './pages/UserLogut';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<Captainlogin/>}/>
        <Route path='/captain-signup' element={<CaptainSingnup/>}/>
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        }/>
        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogut />
        </UserProtectedWrapper>}
        />


      </Routes>
    </div>
  )
}

export default App