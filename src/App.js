import React, {useEffect} from 'react'
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
import ReactGA from 'react-ga';
import About from './pages/About'
import Contact from './pages/Contact'
ReactGA.initialize('UA-182081513-1');

function App() {

  useEffect( () => {

    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search); 

}, []);


  return (
    <div className='App'>
        <div>
          <HashRouter>
            <Navigation />
            <Switch>

              <Route exact path='/' children={<Home />} />
              <Route exact path='/create'  children={<CreateMenu />} />
              <Route exact path='/about'  children={<About />} />
              <Route exact path='/contact'  children={<Contact />} />
              <Route exact path='/how-it-works' children={<HowItworks />} />
              <Route exact path='/qr/:menuId' children={<QrContainer />}/>
              <Route path='/edit/:menuId/:hash' children={<CreateMenu edit={true}/>}/>
              <Route exact path='/qr/edit/:menuId' children={<QrContainer edit={true}/>}/>
            </Switch>
            <Footer />
          </HashRouter>
        </div>
        
      </div>
  );
}

export default App
