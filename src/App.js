import React from 'react'
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom"

import './assets/scss/index.scss'
import '../node_modules/eos-icons/dist/css/eos-icons.css'
// import '.assets/fonts/Lato/Lato-Regular.ttf'

import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import CreateMenu from './components/CreateMenu'
import HowItworks from './components/HowItWorks'
import QrContainer from './components/QrContainter'

function App() {
  return (
    <div className='App'>
        <div>
          <HashRouter>
            <Navigation />
            <Switch>

              <Route exact path='/' children={<Home />} />
              <Route exact path='/create'  children={<CreateMenu />} />
              <Route exact path='/how-it-works' children={<HowItworks />} />
              <Route path='/qr/:menuId' children={<QrContainer />}/>
            </Switch>

          </HashRouter>
        </div>
        <Footer />
      </div>
  );
}

export default App
