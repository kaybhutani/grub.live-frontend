import React, { useState } from 'react'
import EditMenu from './EditMenu'
import PreviewMenu from './PreviewMenu'
import ReactGA from 'react-ga';
ReactGA.initialize('G-0BPQRCHTXK');


const CreateMenu = () => {
  ReactGA.pageview('/create')

  const sampleRestaurantDetails = {
    emailId: "",
    restaurantName: "",
    logo: "",
    menu: {
      categories: [ ]
    }
  }
  const [restaurantDetails, setRestaurantDetails] = useState(sampleRestaurantDetails);
  
  return (

    <div className='container'>

      <EditMenu restaurantDetails={restaurantDetails} setRestaurantDetails={setRestaurantDetails}/>
      <PreviewMenu restaurantDetails={restaurantDetails} />
      
    </div>
  )
}

export default CreateMenu