import React, { useState } from 'react'
import mobileQrMenu from '../assets/images//mobile-qr-menu.svg'
import NavLink from './NavLink'
import { Link } from '@reach/router'  

const Home = () => {

  const [featureOpen, setFeatureOpen] = useState([true, 0])

  const features = [
    {
      name: 'Enhances Safety',
      description: `Virtual menu's ensures a safe outlet by avoiding any unneeded interaction with staff, especially in times of COVID-19 safeguarding both staff and customers.`
    },
    {
      name: `No delay`,
      description: `Just open and start selecting out of menu, without waiting for the staff to reach out to you.`
    },
    {
      name: `Super Quick and Simple`,
      description: `It is super quic for people to scan the QR and get the menu on all of their phones. Your menu will never fall short now :D`
    },
    {
      name: `Always Updated`,
      description: `No matter if your dishes change daily or monthly, you don't have to print menu's again! Just update it on grub.live.`
    },
    {
      name: `Free and Easy to set up`,
      description: `Our virtual menu's are and will be forever Free and easy to use!`
    }
    

  ]

  const openFeature = (key) => {
    if(featureOpen[1]===key) {
      setFeatureOpen([false, -1])
      return
    }

    setFeatureOpen([true, key])
  }
  return (
    <div className='container'>
      
      <div className='header' >
        
        <h1 >Free {'&'} Simple Virtual QR Menu's <br></br> Rejuvenating the dining experience.</h1>
        <div className='header-features'>
          
          {
            features.map((feature, key) => {
              return (
                <div className='feature' key={key}>
                  <button onClick={() => openFeature(key)} className='btn-link'><h3>{feature.name}<i className='eos-icons'>{(featureOpen[0] && featureOpen[1]===key)?(`keyboard_arrow_down`):(`keyboard_arrow_right`) }</i> </h3> </button>
                  {(featureOpen[0] && featureOpen[1]===key)? (
                    <p className='fadein'>{feature.description}</p>
                  ): (<p className='fadeout'>{feature.description}</p>)}
                  
                </div>
              )
            })
          }

          
          
        </div>
        <div className='intro-img'>
          <img  src={mobileQrMenu} alt=''></img>
        </div>
        <div>
          <Link to='/how-it-works'>
            <button className='btn-link learn-more'>Learn more <i className='eos-icons'>keyboard_arrow_right</i></button>
          </Link>
          <br></br>
          <NavLink to='/create'>
            <button className='black-yellow nav-item'>
              Create Menu 
            </button>
          </NavLink>
          <button className='black-yellow nav-item'>
            Scan Menu 
          </button>
      </div>
      </div>


    </div>
  )
}

export default Home
