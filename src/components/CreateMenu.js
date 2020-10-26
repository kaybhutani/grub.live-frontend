import React, { useState } from 'react'
import EditMenu from './EditMenu'
import PreviewMenu from './PreviewMenu'
const CreateMenu = () => {

  const sampleRestaurantDetails = {
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