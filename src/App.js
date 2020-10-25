import React from 'react'
import { Router } from '@reach/router'
import './assets/scss/index.scss'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import CreateMenu from './components/CreateMenu'


function App() {
  return (
    <div className='App'>
        <Navigation />
        <div>
          <Router primary={false}>
            <Home path='/' />
            <CreateMenu path='/create' />
          </Router>
        </div>
        <Footer />
      </div>
  );
}

export default App
