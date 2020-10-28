import React from 'react'
import { Router } from '@reach/router'

import './assets/scss/index.scss'
import '../node_modules/eos-icons/dist/css/eos-icons.css'
// import '.assets/fonts/Lato/Lato-Regular.ttf'

import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import CreateMenu from './components/CreateMenu'
import HowItworks from './components/HowItWorks'

function App() {
  return (
    <div className='App'>
        <Navigation />
        <div>
          <Router  primary={false}>
            <Home path='/' />
            <HowItworks path='/how-it-works' />
            <CreateMenu path='/create' />
            <Home path='*' />
          </Router>
        </div>
        <Footer />
      </div>
  );
}

export default App
