import React from 'react'

const PreviewMenu = (props) => {
  
  const restaurantDetails = props.restaurantDetails

  return (
    <div className='preview-menu'>
      <h2>Preview Menu <i className='eos-icons'>slideshow</i></h2>
      <p>Once done, create on Generate QR Menu to create your Virtual Menu.</p>
      <br></br>
    </div>
  )

}


export default PreviewMenu