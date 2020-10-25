import React, { useState } from 'react'
import EditMenu from './EditMenu'
import PreviewMenu from './PreviewMenu'
const CreateMenu = () => {

  const sampleRestaurantDetails = {
    restaurantName: "Moti Mahal",
    logo: "",
    menu: {
      categories: [ ]
    }
  }
  const [restaurantDetails, setRestaurantDetails] = useState(sampleRestaurantDetails);
  
  return (

    <div class='container'>

      <EditMenu restaurantDetails={restaurantDetails} setRestaurantDetails={setRestaurantDetails}/>
      <PreviewMenu restaurantDetails={restaurantDetails} />
      
    </div>
  )
}

export default CreateMenu