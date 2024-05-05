import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';

import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer'
import PRoute from './components/Proute'
import OnlyAdminPRoute from './components/OnlyAdminPRoute';
import CreatePost from './pages/CreatePost';




function App() {
 

  return (
    <>
     
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>

        <Route element={<PRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>

        </Route>
        <Route element={<OnlyAdminPRoute/>}>
        <Route path='/create-post' element={<CreatePost/>}/>

        </Route>
        <Route path='/projects' element={<Projects/>}/>
     
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
