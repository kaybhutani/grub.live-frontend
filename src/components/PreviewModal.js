import React from 'react'
import PreviewRestaurantMenu from './PreviewRestaurantMenu'

const PreviewModal = (props) => {

  const restaurantDetails = props.restaurantDetails

  return (
    <div className='preview-modal'>
      <PreviewRestaurantMenu restaurantDetails={restaurantDetails} />
    </div>
  )
}

export default PreviewModal