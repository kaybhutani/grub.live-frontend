import React from 'react'
import PreviewRestaurantMenu from './PreviewRestaurantMenu'

const PreviewModal = (props) => {

  const restaurantDetails = props.restaurantDetails
  const togglePreviewModal = props.togglePreviewModal
  return (
    <div className='preview-modal'>
      <i  style={{float: 'right'}} onClick={() => togglePreviewModal()} className='eos-icons delete-icon'>close</i>
      <PreviewRestaurantMenu restaurantDetails={restaurantDetails} />
    </div>
  )
}

export default PreviewModal