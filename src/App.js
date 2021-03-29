import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/Navbar'
import Header from '../src/Header'

import {Route, Switch} from 'react-router-dom'
import Portfolio from './Portfolio'
import About from './About'
import Error from './Error'
import Contact from './Contact'
import Skills from './Skills'
import Profile from './Profile'




function App() {
  return (
    <>
  
   




    <Navbar/>

    <Switch>
      <Route exact path='/' component={Header} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
       <Route path='/portfolio' component={Portfolio} />
       <Route path='/skills' component={Skills} />
       <Route component={Error}/>
    </Switch>

         
     
      
      


    </>
  )
}

export default App
