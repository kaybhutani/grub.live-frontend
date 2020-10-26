import React from 'react'
import mobileQrMenu from '../assets/images//mobile-qr-menu.svg'
const Home = () => {


  return (
    <div className='container'>
      
      <div className='header' >
        
        <h1 style={{textAlign: 'center'  }}>Free {'&'} Simple Virtual QR Menu's <br></br> Rejuvenating the dining experience.</h1>
        <div style={{display: "inline-block"}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli test 2 </p>
        </div>
        <img style={{display: "inline-block", width: '20em'}} src={mobileQrMenu} alt=''></img>
      </div>

      <div>
        <button className='black-yellow nav-item'>
          Create Menu 
        </button>
        <button className='black-yellow nav-item'>
          Scan Menu 
        </button>
      </div>
    </div>
  )
}

export default Home
