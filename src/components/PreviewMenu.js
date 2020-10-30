import React from 'react'
import PreviewRestaurantMenu from './PreviewRestaurantMenu'
const PreviewMenu = (props) => {
  
  const restaurantDetails = props.restaurantDetails

  return (
    <div className='preview-menu'>
      <h2>Preview Menu <i className='eos-icons'>slideshow</i></h2>
      <p>Once done, click on Generate QR Menu to create your Virtual Menu.</p>
      <br></br>
      <PreviewRestaurantMenu restaurantDetails={restaurantDetails} />
    </div>
  )

}


export default PreviewMenu