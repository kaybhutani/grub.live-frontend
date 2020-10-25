import React, { useState } from 'react'
import EditMenu from './EditMenu'
import PreviewMenu from './PreviewMenu'
const CreateMenu = () => {

  const [restaurantDetails, setRestaurantDetails] = useState({});
  
  return (

    <div class='container'>

      <EditMenu restaurantDetails={restaurantDetails} setRestaurantDetails={setRestaurantDetails}/>
      <PreviewMenu restaurantDetails={restaurantDetails} />
      
    </div>
  )
}

export default CreateMenu